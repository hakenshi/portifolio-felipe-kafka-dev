import { motion } from "motion/react"
import { buttonVariants } from "./ui/button";

export default function Button() {
    return (
        <motion.button
            whileHover={{ "scale": 1.1 }}
            whileTap={{ scale: 0.95 }}

            className={`${buttonVariants({variant: "defaultGlass", size:"lg"})}`}
            
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
