import { motion } from "motion/react"
import Section from "./section"
import { easeIn } from "motion"

export default function About() {
    return (
        <Section id={"about"}>
            <main className="grid place-items-center w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-around bg-zinc-700/20 p-10 rounded-xl border-zinc-800 border-2 w-11/12 h-9/12">
                    <div className='max-w-xl'>
                        <h2 className='text-4xl text-center font-black my-5'>About Me</h2>
                        <div className="space-y-3">
                            <p>
                                I’m Felipe Kafka Dias, a graduate in Information Technology from SENAC MG and currently pursuing a Bachelor's degree in Software Engineering at UNIFAE.
                            </p>
                            <p>I’m a dedicated professional with a critical mindset, always seeking to enhance my knowledge and skills in new technologies.</p>
                            <p>
                                I have experience in PHP, Laravel, React, and TailwindCSS, developing real systems and applying these technologies in challenging projects.
                            </p>
                            <p>I’m committed to delivering my projects efficiently, focusing on quality and continuous learning.</p>
                        </div>
                    </div>
                    <div className='size-48 md:size-96'>
                        <motion.div
                            initial={{
                                border: "none",
                                boxShadow: "none",
                            }}
                            transition={{ ease: easeIn, duration: 0.3 }}
                            whileHover={{
                                border: "2px solid oklch(0.637 0.237 25.331)",
                                boxShadow: "0 0 50px oklch(0.637 0.237 25.331)",
                            }}
                            className='rounded-full size-full bg-cover bg-[-100px] md:bg-[-200px] bg-[url("/icon2.gif")]'
                        />
                    </div>
                </div>
            </main>
        </Section>
    )
}
