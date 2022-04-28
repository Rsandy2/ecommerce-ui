import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

let userAccount = null;
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const confirmPasswordHash = (plainPassword, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
      resolve(res);
    });
  });
};
const basicCompare = (x, y) => {
  return x === y;
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
        // console.log(credentials);/
        try {
          // console.log(credentials);
          // console.log("good nhere");
          // console.log(credentials.email);

          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          // console.log("good?");
          // console.log(user.email);

          if (user !== null) {
            //Compare the hash

            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );
            if (res === true) {
              userAccount = {
                userId: user.id,
                username: user.username,
                email: user.email,
                userRole: user.userRole,
              };

              console.log("Made it to: ", userAccount);
              return userAccount;
            } else {
              console.log("Hash not matched logging in");
              return null;
            }
          } else {
            console.log("hmmm");
            return null;
          }
        } catch (err) {
          console.log("Authorize error: ", err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        //the user object is wrapped in another user object so extract it
        user = user.user;
        if (typeof user.userId !== typeof undefined) {
          console.log("This is: ", user);
          return user;
        } else {
          console.log("User id was undefined");
          return false;
        }
      } catch (err) {
        console.error("Signin callback error:", err);
      }
    },
    async register(username, email, password) {
      try {
        await prisma.user.create({
          data: {
            username: username,
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
        console.log("Sessions is not equal to null");
        session.user = userAccount;

        // console.log(session.user, "After");
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

      // console.log("This is session: ", session);
      return session;
    },

    async jwt(token, user, account, profile, isNewUser) {
      // console.log("JWT", user);
      // if (typeof user !== typeof undefined) {
      //   token.user = user;
      // }
      token.user = userAccount;
      console.log(token);
      return token;
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
