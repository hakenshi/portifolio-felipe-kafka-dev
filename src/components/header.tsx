import { motion } from 'motion/react'

export default function Header() {
    return (
        <motion.header className='fixed top-0 left-0 p-5 w-full font-black border-b border-zinc-800 bg-black/50 backdrop-blur-lg z-10'>
            <nav>
                <div className='flex justify-between mx-20'>
                    <div>
                        <p className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer'>lonelyw</p>
                    </div>
                    <ul className='flex gap-5'>
                        {['Home', 'About me', 'Projects', 'Contact'].map((item, index) => (
                            <motion.li className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer' key={index}>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
        </motion.header>
    )
}
