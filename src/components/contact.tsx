import Section from "./section";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Contact() {
    const focusTransition = { duration: 0.2 };

    return (
        <Section>
            <main className="grid place-items-center">
                <div className="flex flex-col items-center justify-around gap-5">
                    <div className="grid place-items-center">
                        <h2 className="text-lg font-black pb-5">Social Media</h2>
                        <div className="flex gap-5">
                            <a target="_blank" href="https://github.com/hakenshi"><img className="size-15" src="/github.png" alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/felipe-kafka-dias-39390b252"><img className="size-15" src="/linkedin.png" alt="" /></a>
                        </div>
                    </div>
                    <form className="bg-zinc-700/20  md:max-w-2xl md:w-1000 min-h-120 p-10 rounded-xl border-zinc-800 border-2 space-y-4">
                        <h2 className="text-2xl font-black text-center">Get in Touch</h2>
                        <div className="w-full">
                            <label className="block pb-6">Name</label>
                            <motion.input
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full border-zinc-800 border-2 rounded px-4 py-2"
                                type="text"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block pb-6">Email</label>
                            <motion.input
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full border-zinc-800 border-2 rounded px-4 py-2"
                                type="email"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block pb-6">Message</label>
                            <motion.textarea
                                initial={{ boxShadow: "0 0 0 0px transparent" }}
                                whileFocus={{ boxShadow: "0 0 0 2px var(--color-red-600)", transition: focusTransition }}
                                className="w-full resize-none border-zinc-800 border-2 rounded px-4 py-2 h-32"
                            />
                        </div>
                        <div className="text-center p-5">
                            <Button variant={"defaultGlass"}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </Section>
    );
}
