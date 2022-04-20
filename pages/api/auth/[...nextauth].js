import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";
import toast, { Toaster } from "react-hot-toast";
import { compileString } from "sass";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      token.userRole = "admin";

      session.accessToken = token.accessToken;
      // console.log(session);
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(account);
      return true;
    },
    async jwt({ token }) {
      token.userRole = "admin";
      console.log(token);
      return token;
    },
  },
  events: {
    async signIn(message) {
      // toast.success("Successfully toasted!"), (<Toaster />);
      console.log(message);
    },
    async signOut(message) {
      /* on signout */
      console.log("Signed out YERRRR");
    },
  },
});
