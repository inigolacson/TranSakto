import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI, oAuthProxy } from "better-auth/plugins";
import { expo } from "@better-auth/expo";
import { NextRequest } from "next/server";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURI: "https://transakto.vercel.app/api/auth/callback/google",
    },

    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      redirectURI: "https://transakto.vercel.app/api/auth/callback/facebook",
    },
  },

  plugins: [openAPI(), expo(), oAuthProxy()],
  trustedOrigins: ["exp://"],
});

export async function getUserId(req: NextRequest): Promise<string> {
  const sessionData = await auth.api.getSession(req);

  if (!sessionData?.session.userId) {
    throw new Error("unauthorized");
  }

  return sessionData.session.userId;
}
