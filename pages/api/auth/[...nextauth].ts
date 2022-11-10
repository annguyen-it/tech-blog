import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { LoginModel, Response } from "../../../models";

const handler: (req: NextApiRequest) => NextAuthOptions = (req) => ({
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
    jwt: async ({ token, user, profile, account }) => {
      if (account?.access_token) {
        const res = await axios.post<Response<LoginModel>>(
          `${process.env.NEXT_PUBLIC_API_BASE}/login/${account.provider}`,
          { token: account.access_token }
        );
        const userFromCredentials = res.data.data;
        token.user = userFromCredentials;
      } else if (user) {
        token.user = user;
      }
      if (req.url?.includes("/api/auth/session?update")) {
        // console.log("query ", req.query);
        (token.user as any).name = req.query["name"];
        (token.user as any).nickname = req.query["nickname"];
      }
      // console.log("jwt", user);
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user as any;
      }
      // console.log("session", session);
      // console.log("token", token);

      return session;
    },
  },
});

const nextAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, handler(req));
};

export default nextAuth;
