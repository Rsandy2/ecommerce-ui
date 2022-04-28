import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(tokenObject) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await axios.post(
      process.env.NEXTAUTH_URL + "auth/refreshToken",
      {
        token: tokenObject.refreshToken,
      }
    );

    return {
      ...tokenObject,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Email",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "meine.email@domain.com",
      },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      // The 'url' is pointing to a Rails API endpoint which returns a JWT Token

      console.log("before");
      const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

      // const res = await axios.post("api/login", credentials);
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const user = await res.json();
      console.log(user);
      // If no error and we have user data, return it
      if (res.ok && user) {
        // I SAW EXAMPLES RETURNING {"email": "blah@tst.com"}
        console.log(user);
        return user; // MY CONTENT {token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJyb2xl…0.OAGiwjj9O_NsH02lIjA2D4HYZkmTQ3_SqtKcVgaIul0'}
      }
      // Return null if user data could not be retrieved
      return null;
    },
  }),
];

const callbacks = {
  jwt: async ({ token, user }) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = user.data.accessToken;
      token.accessTokenExpiry = user.data.accessTokenExpiry;
      token.refreshToken = user.data.refreshToken;
    }

    // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
    const shouldRefreshTime = Math.round(
      token.accessTokenExpiry - 60 * 60 * 1000 - Date.now()
    );

    // If the token is still valid, just return it.
    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    }

    // If the call arrives after 23 hours have passed, we allow to refresh the token.
    token = refreshAccessToken(token);
    return Promise.resolve(token);
  },
  session: async ({ session, token }) => {
    // Here we pass accessToken to the client to be used in authentication with your API
    session.accessToken = token.accessToken;
    session.accessTokenExpiry = token.accessTokenExpiry;
    session.error = token.error;

    return Promise.resolve(session);
  },
};

export const options = {
  providers,
  // callbacks,
  pages: {},
  secret: process.env.NEXTAUTH_SECRET,
};

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;
