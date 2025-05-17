import { motion } from 'motion/react'
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router';

export default function Header() {

    const { pathname } = useLocation()

    return (
        <motion.header className='fixed top-4 left-5 px-5 py-3 mx-auto w-[98vw] font-black border rounded-full border-zinc-900/50 bg-zinc-950/50 backdrop-blur-lg z-10'>
            <nav>
                <div className='flex justify-between mx-10'>
                    <div>
                        <Link to={"/"} className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer inline-flex items-center gap-3'>
                            <img src="/makima.png" alt="" className='size-12 opacity-90' />
                            <span>Felipe Kafka Dias</span>
                        </Link>
                    </div>
                    <ul className='flex items-center gap-5'>
                        {[{ name: 'Home', route: "/" }, { name: 'Projects', route: "/projects" }].map(({ name, route }, index) => (
                            <motion.li
                                onClick={() => {
                                    const selector = `#${name.toLowerCase().split(' ')[0]}`
                                    const nextSection = document.querySelector(selector);
                                    if (nextSection && pathname !== "/") {
                                        nextSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer' key={index}>
                                <Link to={route}>{name}</Link>
                            </motion.li>
                        ))}
                        <motion.li
                            onClick={() => {
                                const selector = `#contact`
                                const nextSection = document.querySelector(selector);
                                if (nextSection) {
                                    nextSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer'>
                            <Button variant='defaultGlass' className='rounded-full hover:text-white'>Contact</Button>
                        </motion.li>
                    </ul>
                </div>
            </nav>
        </motion.header>
    )
}
