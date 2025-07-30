import z from "zod";

export const businessDetailsSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  contact: z
    .string()
    .min(1)
    .regex(/^(\+63|0)?9\d{9}$/, "Invalid phone number"),
});

export type BussinessDetailsFormData = z.infer<typeof businessDetailsSchema>;

export type BusinessDetailsErrors = {
  name?: string;
  address?: string;
  contact?: string;
};
