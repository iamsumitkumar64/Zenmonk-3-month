import * as z from "zod";

const usernameOrEmailSchema = z.string().refine((val) => {
    // Check if it's a valid email
    const isEmail = z.string().email().safeParse(val).success;
    if (isEmail) return true;

    // If not an email, validate as alphanumeric username
    // Must contain at least one letter and no special characters
    const isAlphanumericUsername = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(val);
    return isAlphanumericUsername;
})

const LoginSchema = z.object({
    text: usernameOrEmailSchema,
    password: z.string().min(1).max(20),
});

type LoginInterface = z.Infer<typeof LoginSchema>

export { LoginSchema }
export type { LoginInterface }
