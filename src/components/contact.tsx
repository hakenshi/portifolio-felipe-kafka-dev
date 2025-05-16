import { useRef } from "react";
import Section from "./section";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { EmailSchema, emailSchema } from "../lib/email-schema";
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function Contact() {
    const focusTransition = { duration: 0.2 };
    const formRef = useRef(null)
    const form = useForm<EmailSchema>({
        resolver: zodResolver(emailSchema)
    })
    async function sendEmail(formData: EmailSchema) {
        const parsed = emailSchema.safeParse(formData)
        if (!parsed.success) {
            return { errors: parsed.error.format() }
        }
        try {
            if (formRef.current)
                await emailjs.sendForm("service_zmw2atf", "template_sqm9j4t", formRef.current, {
                    publicKey: "cRcgIsXyCyMTzdq0m",
                });
            form.reset()
            return
        }
        catch {
            return { errors: "Failed to send message, please try again." }
        }
    }
    return (
        <Section id="contact">
            <div className="grid place-items-center">
                <div className="flex flex-col items-center justify-around gap-5">
                    <div className="grid place-items-center">
                        <h2 className="text-lg font-black pb-5">Social Media</h2>
                        <div className="flex gap-5">
                            <a target="_blank" href="https://github.com/hakenshi"><img className="size-15" src="/github.png" alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/felipe-kafka-dias-39390b252"><img className="size-15" src="/linkedin.png" alt="" /></a>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={form.handleSubmit(sendEmail)} className="bg-zinc-700/20  md:max-w-2xl md:w-1000 min-h-120 p-10 rounded-xl border-zinc-800 border-2 space-y-4">
                        <h2 className="text-2xl font-black text-center">Get in Touch</h2>
                        <div className="w-full">
                            <label className="block pb-6">Name</label>
                            <motion.input
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full border-zinc-800 border-2 rounded px-4 py-2"
                                type="text"
                                {...form.register("to_name")}
                            />
                            {form.formState.errors && (<p>{form.formState.errors.to_name?.message}</p>)}
                        </div>
                        <div className="w-full">
                            <label className="block pb-6">Email</label>
                            <motion.input
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full border-zinc-800 border-2 rounded px-4 py-2"
                                type="text"
                                {...form.register("from_name")}
                            />
                            {form.formState.errors && (<p>{form.formState.errors.from_name?.message}</p>)}

                        </div>

                        <div className="w-full">
                            <label className="block pb-6">Message</label>
                            <motion.textarea
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full resize-none border-zinc-800 border-2 rounded px-4 py-2 h-32"
                                {...form.register("message")}
                            />
                            {form.formState.errors && (<p>{form.formState.errors.message?.message}</p>)}
                        </div>
                        <div className="text-center p-5">
                            <Button variant={"defaultGlass"}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}
