import { Link } from "react-router";
import ProjectCard from "./project-card";
import Section from "./section";
import { buttonVariants } from "./ui/button";

const projects = [
    {
        id: 1,
        title: "Droplet",
        description: "Droplet is a ambicious social media app project that's still on development, it embraces the freedeom of speech and the possibility to connect with people and make new experiences.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "Laravel"],
    },
    {
        id: 2,
        title: "Intercurso UNIFAE",
        description: "This platform was created for my college in 2024. It was made to help organize the annual intercollegiate sports event (similar to a 'school games week'), where students from different courses compete and interact.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["React", "Javascript", "Laravel"],
    },
    {
        id: 3,
        title: "Stich",
        description: "Stich is a free and opensource powerful CLI tool made for help people kickstart react and nextjs projects, make components and nextjs related files (pages, layouts, actions, api routes, etc...)",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Typescript", "Bun"],
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

            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project, index: number) => (
                    <ProjectCard key={index} project={project} />
                ))}
                <div className="w-full grid place-items-center col-span-3 mt-20">
                    <Link to={"/projects"} className={buttonVariants({variant: "defaultGlass"})}>See more</Link>
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
