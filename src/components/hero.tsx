import Section from './section'
import { Button } from './ui/button'
import { easeIn, motion } from "motion/react"

export default function Hero() {
    return (
        <Section id='home'>
            <div className="flex items-center justify-evenly w-full">
                <div className='max-w-xl'>
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-extrabold gray-gradient">
                            <span>Felipe Kafka Dias</span>
                        </h1>
                        <p className="text-xl tracking-tight bg-radial from-slate-200 to-zinc-400 p-5 text-transparent bg-clip-text">Shall we
                            <span className='bg-linear-to-t from-red-300 via-red-500 to-red-700 text-transparent bg-clip-text font-medium red-shadow'> build </span>
                            something cool together?</p>
                    </div>
                    <div className='space-x-10 text-center mt-15'>
                        <Button size='lg' variant='defaultGlass' className='text-lg text-center w-56'>
                            Download My CV
                        </Button>
                        <Button size='lg' variant={'default'} className='text-lg text-center w-56 border border-red-600 hover:bg-slate-950/50 bg-slate-950/10 drop-shadow-red-500'>
                            About Me
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
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
