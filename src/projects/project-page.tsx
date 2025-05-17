import { ChevronLeftIcon, ChevronRightIcon, Code2Icon, GithubIcon } from "lucide-react";
import { Link, useParams } from "react-router";
import Section from "../components/section";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { projects } from "../lib/projects-data";

export default function ProjectsProjectPage() {
  const { id } = useParams();

  const projectId = id ? parseInt(id, 10) : NaN;
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[currentIndex];
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  if (!project) {
    return (
      <Section>
        <div className="h-screen w-full flex flex-col justify-center items-center p-4 md:p-10 space-y-5 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Project not found</h2>
          <Link to={{
            hash: "#projects",
            pathname: "/projects"
          }} className="flex items-center text-red-700 hover:text-red-500">
            <ChevronLeftIcon size={24} className="mr-1" />
            Back to all projects
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="h-10/12 w-full p-4 md:p-6 lg:p-10 space-y-5 max-w-7xl mx-auto">
        <Link to={{
          hash: "#projects",
          pathname: "/projects"
        }} className="bg-transparent hidden md:flex justify-start items-center text-red-700 hover:text-red-500 sticky top-4 z-10 backdrop-blur-md p-2 rounded-md w-fit">
          <ChevronLeftIcon size={20} />
          <span className="ml-1 text-sm md:text-base">Back to all projects</span>
        </Link>

        <div className="pt-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">{project?.title}</h2>
          <p className="text-lg sm:text-xl text-white/70">{project?.briefDescription}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-7">
          <div className="lg:w-2/3">
            <AspectRatio ratio={16 / 9} className="bg-linear-to-br grid place-items-center from-gray-900/50 to-gray-950/50 rounded-xl border-gray-800/50 border">
              <Code2Icon className="text-red-600/70" size={32} />
            </AspectRatio>
          </div>
          <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50 lg:w-1/3">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 text-sm md:text-base">
              <div>
                <p className="text-zinc-400">Timeline</p>
                <p>{project?.timeline.start} - {project?.timeline.end ? project.timeline.end : project?.timeline.status}</p>
              </div>
              <div>
                <p className="text-zinc-400">Role</p>
                <p>Lead Developer</p>
              </div>
              <div>
                <p className="text-zinc-400 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project?.tags.map((t, index) => (<span key={index} className="px-3 py-1 rounded-full text-xs w-fit bg-white/80 text-black" >{t}</span>))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <GithubIcon size={18} /> <span>Source Code</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-5 md:gap-8 pt-5">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Description</h3>
            <p className="text-white/80 leading-relaxed">
              {project?.description}
            </p>
            {project?.keyFeatures && project.keyFeatures.length > 0 && (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold pt-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-white/80">
                  {project?.keyFeatures.map((kf, index) => <li key={index}>{kf}</li>)}
                </ul>
              </>
            )}
          </div>


        </div>

        <div className="py-8 md:py-10 grid grid-cols-2 gap-4">
          <div className={`flex justify-start`}>
            {previousProject && (
              <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50 w-full sm:max-w-xs h-full hover:border-red-700/50 transition-colors">
                <CardContent className="p-3 md:p-4 h-full flex items-center">
                  <Link to={`/projects/${previousProject.id}#projects`} className="flex items-center gap-3 w-full">
                    <ChevronLeftIcon size={20} />
                    <div className="flex flex-col">
                      <span className="hidden md:inline text-xs md:text-sm text-zinc-400">Previous Project</span>
                      <span className="hidden md:inline text-base md:text-lg font-medium">{previousProject.title}</span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
          <div className={`flex justify-end`}>
            {nextProject && (
              <Card className="bg-gray-900/50 text-gray-200 border-gray-800/50 w-full sm:max-w-xs h-full hover:border-red-700/50 transition-colors">
                <CardContent className="p-3 md:p-4 h-full flex items-center justify-end">
                  <Link to={`/projects/${nextProject.id}#projects`} className="flex items-center gap-3 w-full justify-end">
                    <div className="flex flex-col text-right">
                      <span className="hidden md:inline text-xs md:text-sm text-zinc-400">Next Project</span>
                      <span className="hidden md:inline text-base md:text-lg font-medium">{nextProject.title}</span>
                    </div>
                    <ChevronRightIcon size={20} />
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
