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
        "https://13adc79122f4.ngrok-free.app/api/auth/callback/google",
    },
  },

  plugins: [openAPI(), expo(), oAuthProxy()],
  trustedOrigins: ["possystemmob://", "exp://192.168.100.10:8081"],
});
