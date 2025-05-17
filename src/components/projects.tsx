import { Link } from "react-router";
import ProjectCard from "./project-card";
import Section from "./section";
import { buttonVariants } from "./ui/button";
import { projects } from "../lib/projects-data";

export default function Projects() {

    return (
        <Section id="projects">
            <h2 className="text-center text-3xl font-black">Projects</h2>

            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.slice(0, 3).map((project, index: number) => (
                    <ProjectCard key={index} project={project} />
                ))}
                <div className="w-full grid place-items-center col-span-3 mt-20">
                    <Link to={"/projects"} className={buttonVariants({ variant: "defaultGlass" })}>See more</Link>
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
