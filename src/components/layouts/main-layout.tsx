import { Outlet, useLocation } from 'react-router'
import Header from '../header'
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';


export default function MainLayout() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <AnimatePresence mode='popLayout'>
            <div className="relative">
                <div className="fixed inset-0 z-[-1]">
                    <div
                        className="absolute inset-0 bg-linear-to-t from-zinc-800/30 via-red-500/10 to-zinc-950/30 blur-2xl z-[-1]"
                    ></div>
                </div>
                <Header />
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className='z-10 relative'>
                    <Outlet />
                </motion.div>
            </div >
        </AnimatePresence>
    )
}
