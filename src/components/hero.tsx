import Section from './section'
import Button from './button'

export default function Hero() {
    return (
        <Section>
            <main className='flex items-center justify-center flex-col gap-5'>
                <div className='text-center mb-5'>
                    <h1 className='text-5xl font-black'>Felipe Kafka Dias</h1>
                </div>
                <div className='text-center space-y-5'>
                    <p className='text-4xl font-light'>Fullstack Developer | Software Engineer</p>
                    <Button />
                </div>
            </main>
        </Section>
    )
}
