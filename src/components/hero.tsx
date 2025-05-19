import { easeIn, motion } from "motion/react"
import Section from './section'
import { Button, buttonVariants } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

export default function Hero() {
    return (
        <Section id='hero'>
            <div className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full">
                <div className='max-w-xl'>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold gray-gradient drop-shadow-[0px_0px_20px_#ffffff6a]">
                            <span className=''>Felipe Kafka Dias</span>
                        </h1>
                        <p className="text-xl tracking-tight bg-radial from-slate-200 to-zinc-400 p-5 text-transparent bg-clip-text">Let's
                            <span className='bg-linear-to-t from-red-300 via-red-500 to-red-700 text-transparent bg-clip-text font-medium drop-shadow-[2px_0px_10px_#fb2c36]'> build </span>
                            something together?</p>
                    </div>
                    <div className='space-y-10 md:space-x-10 text-center pt-2'>
                        <a target='_blank' href={"https://drive.google.com/file/d/15tbDK6XaDY2OgAIdLF4LhsyylDCgydnD/view?usp=sharing"} className={`${buttonVariants({variant: "defaultGlass", size: "lg"})} text-lg text-center w-full md:w-56`}>
                            Download My CV
                        </a>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    size="lg"
                                    variant="ghostGlass"
                                    className='text-lg text-center w-full md:w-56'
                                >
                                    About Me
                                </Button>
                            </DialogTrigger>
                            <DialogContent className='dark border-red-600/10 shadow-2xl shadow-red-600/20 p-10'>
                                <DialogHeader>
                                    <DialogTitle>
                                        <h2 className='text-4xl text-center font-black mb-5'>About Me</h2>
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
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
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className='flex md:flex-col md:items-center'>
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
            </div>
        </Section>
    )
}
