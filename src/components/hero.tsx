import { ArrowDownIcon, DownloadIcon } from "lucide-react"
import { easeIn, motion } from "motion/react"
import { Link } from "react-router"
import Section from './section'
import { Button, buttonVariants } from './ui/button'

export default function Hero() {
    return (
        <Section id='hero'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 w-full">
                    <div className='flex-1 max-w-2xl text-center lg:text-left'>
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold gray-gradient drop-shadow-[0px_0px_20px_#ffffff6a] mb-4">
                                Felipe Kafka Dias
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl tracking-tight bg-radial from-slate-200 to-zinc-400 text-transparent bg-clip-text mb-8">
                                Let's
                                <span className='bg-linear-to-t from-red-300 via-red-500 to-red-700 text-transparent bg-clip-text font-medium drop-shadow-[2px_0px_10px_#fb2c36]'> build </span>
                                something together?
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <a 
                                target='_blank' 
                                href={"https://drive.google.com/file/d/15tbDK6XaDY2OgAIdLF4LhsyylDCgydnD/view?usp=sharing"} 
                                className={`${buttonVariants({ variant: "defaultGlass", size: "lg" })} text-base sm:text-lg flex-1 sm:flex-none sm:w-auto min-w-[200px]`}
                            >
                                Download My CV <DownloadIcon className="ml-2" />
                            </a>
                            <Button
                                asChild
                                size="lg"
                                variant="ghostGlass"
                                className='text-base sm:text-lg flex-1 sm:flex-none sm:w-auto min-w-[200px]'
                            >
                                <Link to="/#about">
                                    About Me <ArrowDownIcon size={20} className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className='flex-shrink-0'>
                        <div className='w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
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
                                className='rounded-full w-full h-full bg-cover bg-center bg-[url("/icon2.gif")]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section >
    )
}
