import Section from './section'
import { Button } from './ui/button'

export default function Hero() {
    return (
        <Section id='home'>
            <main className='flex items-center justify-center flex-col gap-5'>
                <h1 className="text-5xl font-extrabold tracking-tight bg-radial from-slate-100 via-slate-300 to-slate-400 text-transparent bg-clip-text">Felipe Kafka Dias</h1>
                <p className="text-xl tracking-tight bg-radial from-slate-200 to-zinc-400 p-5 text-transparent bg-clip-text">Fullstack Developer | Software Engineer</p>
                <Button size='lg' variant='defaultGlass' className='text-lg text-center'>
                    See More
                </Button>
            </main>
        </Section>
    )
}
