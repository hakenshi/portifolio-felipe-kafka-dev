import Section from './section'
import { Button } from './ui/button'

export default function Hero() {
    return (
        <Section id='home'>
            <main className='flex items-center justify-center flex-col gap-5'>
                <h1 className="text-5xl font-extrabold gray-gradient">Felipe Kafka Dias</h1>
                <p className="text-xl tracking-tight bg-radial from-slate-200 to-zinc-400 p-5 text-transparent bg-clip-text">Fullstack Developer | Software Engineer</p>
                <div className='space-x-10'>
                    <Button size='lg' variant='defaultGlass' className='text-lg text-center w-56'>
                        See More
                    </Button>
                    <Button size='lg' variant={'default'} className='text-lg text-center w-56 border border-red-600 hover:bg-slate-950/50 bg-slate-950/10 drop-shadow-red-500'>
                        Download my cv
                    </Button>
                </div>
            </main>
        </Section>
    )
}
