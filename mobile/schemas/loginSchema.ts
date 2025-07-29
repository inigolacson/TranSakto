import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(9),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginErrors = {
  email?: string;
  password?: string;
};
