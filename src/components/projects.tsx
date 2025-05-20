import { Link } from "react-router";
import ProjectCard from "./project-card";
import Section from "./section";
import { buttonVariants } from "./ui/button";
import { projects } from "../lib/projects-data";

export default function Projects() {

    return (
        <Section id="projects">
            <h2 className="text-center text-3xl font-black">Projects</h2>
            <div className="flex flex-col md:grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <div className="w-full grid place-items-center col-span-3">
                    <Link to={{
                        hash: "#projects",
                        pathname: "/projects"
                    }} className={buttonVariants({ variant: "defaultGlass" })}>See more</Link>
                </div>
            </div>
        </Section >
    );
}
