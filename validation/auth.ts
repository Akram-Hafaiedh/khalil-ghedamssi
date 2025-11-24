// Define custom messages for clarity
const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 2;

import { z } from "zod";

export const LoginSchema = z.object({
    email: z.email("Adresse email invalide").toLowerCase(),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export const RegistrationSchema = z.object({
    // 1. Name Validation
    name: z
        .string({ message: "Name is required" })
        .trim()
        .min(MIN_NAME_LENGTH, { message: `Name must be at least ${MIN_NAME_LENGTH} characters` }),

    // 2. Email Validation
    email: z
        .email({ message: "Invalid email format" })
        .toLowerCase(),

    // 3. Password Validation (using refine for custom checks)
    password: z
        .string({ message: "Password is required" })
        .min(MIN_PASSWORD_LENGTH, { message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters` })
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((val) => /[a-z]/.test(val), {
            message: "Password must contain at least one lowercase letter",
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number",
        }),
});

export type RegistrationInput = z.infer<typeof RegistrationSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;