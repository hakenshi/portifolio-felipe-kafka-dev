import { z } from "zod";

export const emailSchema = z.object({
    to_name: z.string().min(6, { message: "Name is required." }),
    from_name: z.string().min(6, { message: "Email is required." }).email({ message: "Please provide a valid email address." }),
    message: z.string().min(6, { message: "Message is required" })
})


export type EmailSchema = z.infer<typeof emailSchema>