import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI, oAuthProxy } from "better-auth/plugins";
import { expo } from "@better-auth/expo";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURI:
        "https://transakto.vercel.app/api/auth/callback/google",
    },

    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      redirectURI:
        "https://transakto.vercel.app/api/auth/callback/facebook",
    },
  },

  plugins: [openAPI(), expo(), oAuthProxy()],
  trustedOrigins: ["exp://"],
});
