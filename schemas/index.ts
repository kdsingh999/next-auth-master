import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password should be atleast 6 chars"),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required").max(100).trim(),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password should be atleast 6 chars"),
});
