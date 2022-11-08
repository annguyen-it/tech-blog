import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { LoginModel, Response } from "../../../models";

export default NextAuth({
  secret: "cTl79BypYNgPMOSepSHnsXT0rn7u8B9CZKVsATKHdbk=",
  providers: [
    CredentialsProvider({
      name: "teblo",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const res = await axios.post<Response<LoginModel>>(
            `${process.env.NEXT_PUBLIC_API_BASE}/login`,
            payload
          );
          // console.log("auth", res.data);
          const user = res.data.data;
          return user;
        } catch (e) {
          return null;
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID || "",
      clientSecret: process.env.AUTH_GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      // console.log("jwt", user);
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user as any;
      // console.log("session", session);
      if (session && session.user) {
        // session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
