import { motion } from "motion/react"
import Section from "./section"
import { easeIn } from "motion"

export default function About() {
    return (
        <Section id={"about"}>
            <main className="min-h-screen grid place-items-center w-full">
                <div className="flex items-center justify-around bg-black/10 p-10 rounded-xl border-zinc-800 border-2 w-11/12 h-9/12">
                    <div className='max-w-xl'>
                        <h2 className='text-4xl text-center font-black my-5'>About Me</h2>
                        <p>
                            Hi, my name is Felipe Kafka Dias. 
                            I'm a full-stack web developer specializing in Next.js and Laravel development.
                        </p>
                        <p>
                            My main focus is on building fast, self-scaling applications that provide an exceptional user experience and intuitive user interfaces.
                        </p>
                    </div>
                    <div className='size-96'>
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
                            className='rounded-full size-full bg-cover'
                            style={{ backgroundImage: 'url("/icon2.gif")', backgroundPosition: "-220px" }}
                        />
                    </div>
                </div>
            </main>
        </Section>
    )
}
