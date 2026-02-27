import * as z from "zod";

const SignUpSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().min(5).max(50).email("Invalid email address"),
    password: z.string().min(1).max(20),
});

type SignupInterface = z.Infer<typeof SignUpSchema>

export { SignUpSchema }
export type { SignupInterface }