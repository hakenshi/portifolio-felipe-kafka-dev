import { Link } from "react-router";
import ProjectCard from "./project-card";
import Section from "./section";
import { buttonVariants } from "./ui/button";
import { projects } from "../lib/projects-data";

export default function Projects() {

    return (
        <Section id="projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="w-full flex justify-center mt-8">
                    <Link to="/projects" className={buttonVariants({ variant: "defaultGlass" })}>See more</Link>
                </div>
            </div>
        </Section >
    );
}
