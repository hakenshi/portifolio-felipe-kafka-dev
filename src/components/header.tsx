import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { buttonVariants } from './ui/button';

const liVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
};

const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
};

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { to: "/", label: "Home", delay: 0.1 },
        { to: "/#about", label: "About me", delay: 0.2 },
        { to: "/projects", label: "Projects", delay: 0.3 },
        { to: "/#contact", label: "Contact", delay: 0.4, isButton: true }
    ];

    return (
        <header className={`fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 px-4 sm:px-5 py-3 w-full md:w-[98vw] font-black border rounded-none md:rounded-full border-zinc-900/50 bg-zinc-950/50 backdrop-blur-lg z-20`}>
            <nav>
                <div className='flex justify-between items-center mx-2 sm:mx-10'>
                    <motion.div
                        variants={liVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0 }}
                    >
                        <Link to="/" className='transition-all duration-300 hover:scale-105 transform hover:text-red-500 cursor-pointer inline-flex items-center gap-2 sm:gap-3'>
                            <img src="/makima.png" alt="Logo" className='size-10 sm:size-12 opacity-90' />
                            <span className='text-sm sm:text-base'>Felipe Kafka Dias</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex items-center gap-5'>
                        {navLinks.map((link) => (
                            <motion.li
                                key={link.label}
                                variants={liVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.6, delay: link.delay }}
                                className={`transition-all duration-300 hover:scale-105 transform ${!link.isButton && 'hover:text-red-500 cursor-pointer'}`}
                            >
                                <Link
                                    to={link.to}
                                    className={link.isButton ? buttonVariants({ variant: 'default' }) : ''}
                                >
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMobileMenu}
                            className='text-white focus:outline-none'
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <motion.div
                    className='md:hidden overflow-hidden'
                    initial="closed"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={mobileMenuVariants}
                    transition={{ duration: 0.3 }}
                >
                    <ul className='flex flex-col items-center gap-4 mt-4 pb-4'>
                        {navLinks.map((link) => (
                            <motion.li
                                key={`mobile-${link.label}`}
                                className={`w-full text-center transition-all duration-300 ${!link.isButton && 'hover:text-red-500 cursor-pointer'}`}
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                            >
                                <Link
                                    to={link.to}
                                    className={link.isButton ? `${buttonVariants({ variant: 'default' })} w-3/4 mx-auto` : 'py-2 block'}
                                >
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </nav>
        </header>
    )
}
