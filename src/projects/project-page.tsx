import { ChevronLeftIcon, Code2Icon } from "lucide-react";
import { Link, useParams } from "react-router";
import { AspectRatio } from "../components/ui/aspect-ratio";
import Section from "../components/section";
import { projects } from "../lib/projects-data";

export default function ProjectsProjectPage() {

  const { id } = useParams()

  const project = projects.find(p => id ? p.id === parseInt(id) : {})

  return (
    <Section>
      <div className="h-10/12 w-full p-10 space-y-5 container mx-auto">
        <Link to={{
          hash: "#projects",
          pathname: "/projects"
        }} className="flex justify-start items-start text-red-700">
          <ChevronLeftIcon size={24} className="" />
          Back to all projects
        </Link>
        <div>
          <h2 className="text-3xl font-bold ">{project?.title}</h2>
          <p className="text-xl font-bold text-white/70">{project?.briefDescription}</p>
        </div>
        <AspectRatio className="bg-linear-to-br grid row-span-2 place-items-center from-gray-900/50 to-gray-950/50 rounded-t-xl rounded-b-sm">
          <Code2Icon className="text-red-600/70" size={32} />
        </AspectRatio>
      </div>
    </Section>
  )
}
