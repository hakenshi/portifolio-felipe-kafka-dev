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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-black mb-6">Social Media</h2>
                        <div className="flex gap-6 justify-center">
                            <a target="_blank" href="https://github.com/hakenshi" className="hover:scale-110 transition-transform">
                                <img className="w-12 h-12 sm:w-16 sm:h-16" src="/github.png" alt="GitHub" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/felipe-kafka-dias-39390b252" className="hover:scale-110 transition-transform">
                                <img className="w-12 h-12 sm:w-16 sm:h-16" src="/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={form.handleSubmit(sendEmail)} className="bg-zinc-950/60 w-full max-w-2xl p-6 sm:p-8 lg:p-10 rounded-xl border-zinc-900 border-2 space-y-6">
                        <div className="text-center">
                            <h2 className="text-xl sm:text-2xl font-black mb-2">Get in Touch</h2>
                            <p className="text-lg sm:text-xl text-zinc-600">Have something on your mind? Let's get in touch</p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <motion.input
                                    initial={{ boxShadow: "0 0 0 0px transparent" }}
                                    whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                    className="w-full border-zinc-800 border-2 rounded px-4 py-3 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none"
                                    type="text"
                                    placeholder="Your name"
                                    {...form.register("to_name")}
                                />
                                {form.formState.errors.to_name && (
                                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.to_name.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <motion.input
                                    initial={{ boxShadow: "0 0 0 0px transparent" }}
                                    whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                    className="w-full border-zinc-800 border-2 rounded px-4 py-3 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...form.register("from_name")}
                                />
                                {form.formState.errors.from_name && (
                                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.from_name.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <motion.textarea
                                    initial={{ boxShadow: "0 0 0 0px transparent" }}
                                    whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                    className="w-full resize-none border-zinc-800 border-2 rounded px-4 py-3 h-32 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none"
                                    placeholder="Tell me about your project or just say hello!"
                                    {...form.register("message")}
                                />
                                {form.formState.errors.message && (
                                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-center pt-4">
                            <Button variant="defaultGlass" size="lg" className="w-full sm:w-auto min-w-[200px]">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}