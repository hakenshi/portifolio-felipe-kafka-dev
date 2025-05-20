import { technologies } from '../lib/projects-data'
import Section from './section'

export default function About() {
    return (
        <Section id='about'>
            <div className='bg-zinc-900/50 h-fit md:h-11/12 w-full border-y border-y-zinc-800'>
                <div className='text-center text-3xl p-5 '>
                    <h2 className='font-bold'>About me</h2>
                    <p className='text-xl text-zinc-600'>I'm a developer focused on building and developing web applications</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-8 container px-10 mx-auto">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                        <div className="text-zinc-400 leading-relaxed text-justify">
                            <p>I’m Felipe Kafka Dias, a graduate in Information Technology from SENAC MG and currently pursuing a Bachelor's degree in Software Engineering at UNIFAE.</p>
                            <p>
                                I am passionate about technology, always eager to learn and apply new concepts. My experience spans PHP, Laravel, React, and TailwindCSS, where I have built real-world systems and tackled challenging projects.
                                I value efficiency, quality, and continuous improvement in every project I undertake.
                            </p>
                        </div>
                        <h3 className='text-2xl font-semibold my-4'>Philosphy</h3>
                        <div className="text-zinc-400 leading-relaxed text-justify">
                            <p>I believe exceptional applications blend elegant design with intuitive usability. My philosophy is to prioritize user experience, crafting solutions that are both seamless and meaningful at every interaction.</p>
                            <p>Performance is equally important—fast, responsive applications create satisfaction and trust. I strive to deliver software that not only works beautifully but also delights users through thoughtful details and efficiency.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
                        <ul className="flex flex-wrap gap-3 text-zinc-300">
                            {technologies.map((t, i) => (
                                <li key={i} className="bg-red-900/30 border-red-700/40 text-red-300 border px-3 py-0.5 rounded-full shadow backdrop-blur-2xl">{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}
