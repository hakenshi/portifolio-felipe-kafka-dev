import { motion } from "motion/react"

export default function Button() {
    return (
        <motion.button
            whileHover={{ "scale": 1.1 }}
            whileTap={{ scale: 0.95 }}

            className={`text-2xl px-6 py-3 rounded cursor-pointer uppercase font-black backdrop-blur-3xl bg-red-500/35 hover:bg-red-500/60 border border-red-600/90 hover:border-red-600`}
            
            onClick={() => {
                const nextSection = document.querySelector('#about');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }}>
            Show More
        </motion.button>
    )
}
