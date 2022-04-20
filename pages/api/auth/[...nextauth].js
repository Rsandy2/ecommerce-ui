import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
let userAccount = null;

const bcrypt = require("bcrypt");

const confirmPasswordHash = (plainPassword, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
      resolve(res);
    });
  });
};

const configuration = {
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user !== null) {
            //Compare the hash
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );
            if (res === true) {
              userAccount = {
                userId: user.userId,
                user: user.username,
                email: user.email,
              };
              return userAccount;
            } else {
              console.log("Hash not matched logging in");
              return null;
            }
          } else {
            return null;
          }
        } catch (err) {
          console.log("Authorize error:", err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        //the user object is wrapped in another user object so extract it
        user = user.user;
        console.log("Sign in callback", user);
        console.log("User id: ", user.userId);
      } catch (err) {
        console.error("Signin callback error:", err);
      }
    },
    async register(username, email, password) {
      try {
        await prisma.users.create({
          data: {
            username: firstName,
            email: email,
            password: password,
          },
        });
        return true;
      } catch (err) {
        console.error("Failed to register user. Error", err);
        return false;
      }
    },
    async session(session, token) {
      if (userAccount !== null) {
        //session.user = userAccount;
        session.user = {
          userId: userAccount.userId,
          name: `${userAccount.username}`,
          email: userAccount.email,
        };
      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          (typeof session.user !== typeof undefined &&
            typeof session.user.userId === typeof undefined))
      ) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      console.log("JWT callback. Got User: ", user);
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
