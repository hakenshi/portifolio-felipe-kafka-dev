import { motion } from "motion/react";
import Section from "./section";

const projects = [
    {
        id: 1,
        title: "Droplet",
        description: "A dynamic social media platform inspired by Twitter, enabling real-time sharing and interaction.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "PostgreSQL", "Laravel", "Docker"],
    },
    {
        id: 2,
        title: "Intercurso UNIFAE",
        description: "A robust web app designed to streamline academic and extracurricular organization for UNIFAE with efficient communication and scheduling.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["React", "Javascript", "MariaDB", "Laravel"],
    },
    {
        id: 3,
        title: "Sistema de Pontos UNIFAE",
        description: "A tailored digital attendance and point tracking system for UNIFAE, enhancing efficiency and accountability.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Laravel", "PHP", "MySQL", "Livewire", "Docker"],
    },
    {
        id: 4,
        title: "Ecommerce Management System",
        description: "A comprehensive platform for managing ecommerce operations, inventory, and customer relations with ease.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Laravel", "PHP", "MySQL", "Livewire", "Docker"],
    },
    {
        id: 5,
        title: "VIP English School Platform",
        description: "A streamlined learning management system offering interactive features for both teachers and students, facilitating assignments, progress tracking, and communication.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["NextJS", "Typescript", "PrismaORM", "PostgreSQL"],
    },
    {
        id: 6,
        title: "Pokédex WebApp",
        description: "A simple Pokédex webapp",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["NextJS", "Typescript", "PrismaORM", "PostgreSQL"],
    },
];

export default function Projects() {

    return (
        <Section>
            <main className="grid place-items-center my-5 pb-10 overflow-y-scroll">
                <h2 className="text-center text-3xl font-black">Projects</h2>
                <motion.div
                    className="overflow-hidden w-full"
                    style={{ whiteSpace: "nowrap" }}
                >
                    <motion.div
                        className="inline-flex space-x-10 p-10"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 100,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...projects, ...projects].map((project, index: number) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg w-110 h-80 border-2 border-zinc-800 flex-shrink-0"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 20px var(--color-red-500)",
                                    border: "var(--color-red-500) 2px solid"
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black p-6 flex flex-col justify-end"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </main>
        </Section >
    );
}
