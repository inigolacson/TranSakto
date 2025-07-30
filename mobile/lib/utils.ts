import { ZodError } from "zod";
import { authClient } from "./auth-client";

export const handleOAuth = async (provider: string) => {
  await authClient.signIn.social({
    provider: provider,
    callbackURL: "/store",
  });
};

export const parseErrors = (error: ZodError) => {
  const errors: Record<string, string> = {};
  error.issues.forEach((issue) => {
    const field = issue.path[0];
    errors[field as string] = issue.message;
  });
  return errors;
};
