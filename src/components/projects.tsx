import { Code2Icon } from "lucide-react";
import Section from "./section";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const projects = [
    {
        id: 1,
        title: "Droplet",
        description: "A dynamic social media platform inspired by Twitter, enabling real-time sharing and interaction.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS","Laravel"],
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
    // {
    //     id: 4,
    //     title: "Ecommerce Management System",
    //     description: "A comprehensive platform for managing ecommerce operations, inventory, and customer relations with ease.",
    //     image: "/placeholder.svg?height=300&width=300",
    //     tags: ["Laravel", "PHP", "MySQL", "Livewire", "Docker"],
    // },
    // {
    //     id: 5,
    //     title: "VIP English School Platform",
    //     description: "A streamlined learning management system offering interactive features for both teachers and students, facilitating assignments, progress tracking, and communication.",
    //     image: "/placeholder.svg?height=300&width=300",
    //     tags: ["NextJS", "Typescript", "PrismaORM", "PostgreSQL"],
    // },
    // {
    //     id: 6,
    //     title: "Pokédex WebApp",
    //     description: "A simple Pokédex webapp",
    //     image: "/placeholder.svg?height=300&width=300",
    //     tags: ["NextJS", "Typescript", "PrismaORM", "PostgreSQL"],
    // },
];

export default function Projects() {

    return (
        <Section id="projects">
            <h2 className="text-center text-3xl font-black">Projects</h2>

            <div className="grid place-items-center grid-cols-3 gap-5">
                {projects.map((project, index: number) => (
                <Card className="dark hover:border-red-600/50 w-100 h-120 grid grid-rows-3 p-0" key={index}>
                    <CardHeader className="bg-linear-to-br grid place-items-center from-gray-900/50 to-gray-950/50 inset-0 rounded-t-xl rounded-b-sm">
                        <Code2Icon className="text-red-600/70" size={32} />
                    </CardHeader>
                    <CardContent className="">
                        <CardTitle className="text-md text-white">{project.title}</CardTitle>
                        <CardDescription className="pt-5">
                            {project.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <div className="flex gap-2">
                            {project.tags.map(tag => (
                                <div className="bg-zinc-600 px-3 py-1 rounded-full text-xs">{tag}</div>
                            ))}
                        </div>
                        <div className="flex items-end h-20"><Button variant={"ghostGlass"} className="w-full">See Project</Button></div>
                    </CardFooter>
                </Card>
                ))}
                <div className="w-full grid place-items-center col-end-3 h-72">
                    <Button variant={"defaultGlass"} className="w-56">See more</Button>
                </div>
            </div>

            {/* <motion.div
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
                                    <p className="text-zinc-300 mb-4 whitespace-normal">
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
                </motion.div> */}
        </Section >
    );
}
