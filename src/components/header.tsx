import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { buttonVariants } from './ui/button';

const liVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
};

export default function Header() {
    return (
        <header className='fixed top-4 left-5 px-5 py-3 mx-auto w-[98vw] font-black border rounded-full border-zinc-900/50 bg-zinc-950/50 backdrop-blur-lg z-20'>
            <nav>
                <div className='flex justify-between mx-10'>
                    <div>
                        <Link to={{
                            hash: "#hero",
                            pathname: "/"
                        }} className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer inline-flex items-center gap-3'>
                            <img src="/makima.png" alt="" className='size-12 opacity-90' />
                            <span>Felipe Kafka Dias</span>
                        </Link>
                    </div>
                    <ul className='flex items-center gap-5'>
                        <motion.li
                            variants={liVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer'>
                            <Link to={{
                                hash: "hero",
                                pathname: "/"
                            }}>Home</Link>
                        </motion.li>
                        <motion.li
                            variants={liVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer'>
                            <Link to={{
                                hash: "projects",
                                pathname: "/projects"
                            }}>Projects</Link>
                        </motion.li>
                        <motion.li
                            variants={liVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer'>
                            <Link
                                to={{
                                    hash: "contact",
                                    pathname: "/"
                                }}
                                className={buttonVariants({ variant: 'default' })}
                            >
                                Contact
                            </Link>
                        </motion.li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
