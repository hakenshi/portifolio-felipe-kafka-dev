import { ChevronLeftIcon, ChevronRightIcon, Code2Icon, GithubIcon } from "lucide-react";
import { Link, useParams } from "react-router";
import Section from "../components/section";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { projects } from "../lib/projects-data";

export default function ProjectsProjectPage() {

  const { id } = useParams()

  const project = projects.find(p => id ? p.id === parseInt(id) : {})
  const previousProject = projects.find(p => id ? p.id - 1 === parseInt(id) : {})
  const nextProject = projects.find(p => id ? p.id + 1 === parseInt(id) : {})
  return (
    <Section>
      <div className="h-10/12 w-full p-10 space-y-5 max-w-7xl  mx-auto">
        <Link to={{
          hash: "#projects",
          pathname: "/projects"
        }} className="flex justify-start items-start text-red-700 sticky">
          <ChevronLeftIcon size={24} className="" />
          Back to all projects
        </Link>
        <div>
          <h2 className="text-3xl font-bold ">{project?.title}</h2>
          <p className="text-xl font-bold text-white/70">{project?.briefDescription}</p>
        </div>
        <div className="flex gap-7">
          <AspectRatio ratio={12 / 5} className="bg-linear-to-br grid row-span-2 place-items-center from-gray-900/50 to-gray-950/50 rounded-t-xl rounded-b-sm border-gray-800/50 border">
            <Code2Icon className="text-red-600/70" size={32} />
          </AspectRatio>
          <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-10 h-fit flex flex-col justify-center">
              <div>
                <p className="text-zinc-400">Timeline</p>
                <p>{project?.timeline.start} - {project?.timeline.end ? project.timeline.end : project?.timeline.status}</p>
              </div>
              <div>
                <p className="text-zinc-400">Role</p>
                <p>Lead Developer</p>
              </div>
              <div className="space-x-3 space-y-2">
                <p className="text-zinc-400">Technlogies</p>
                {project?.tags.map((t, index) => (<span key={index} className="px-3 py-1 rounded-full text-xs w-fit bg-white/80 text-black" >{t}</span>))}
              </div>
            </CardContent>
            <CardFooter className="h-full">
              <Button className="w-full"> <GithubIcon /> <span>Source Code</span></Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-[1.5fr_0.5fr] gap-5">
          <div className="space-y-8">
            <h3 className="text-2xl">Description</h3>
            <p>
              {project?.description}
            </p>
            <h3 className="text-2xl">Key Features</h3>
            <ul className="list-disc pl-5">
              {project?.keyFeatures.map((kf, index) => <li key={index}>{kf}</li>)}
            </ul>
          </div>
        </div>
        <div className="py-10 flex">
          {project?.id !== undefined && project.id > 1 && (
            <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50 w-3/12">
              <CardContent className="p-2">
                <Link to={`/projects/${project.id - 1}`} className="flex items-center gap-5">
                  <ChevronLeftIcon size={24} />
                  <div className="flex flex-col">
                    <span className="text-sm">Previous Project</span>
                    <span className="text-lg">{previousProject?.title}</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
          {project?.id !== undefined && project.id < projects.length - 1 && (
            <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50 w-3/12 ml-auto">
              <CardContent className="p-2 justify-end flex">
                <Link to={`/projects/${project.id + 1}`} className="flex items-center gap-5">
                  <div className="flex flex-col">
                    <span className="text-sm">Next Project</span>
                    <span className="text-lg">{nextProject?.title}</span>
                  </div>
                  <ChevronRightIcon size={24} />
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

    </Section>
  )
}
