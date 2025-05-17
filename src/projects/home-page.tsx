import { BriefcaseBusinessIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../components/project-card";
import Section from "../components/section";
import { Button } from "../components/ui/button";
import { projects, technologies } from "../lib/projects-data";

export default function ProjectsHomePage() {

  const [selectedTech, setSelectedTech] = useState<string>("")
  const [search, setSearch] = useState<string>("")

  const filteredProjects = projects.filter(project => {
    const matchesSearch = search
      ? project.title.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesTech = selectedTech
      ? project.tags.some(tag => tag.toLowerCase().includes(selectedTech.toLowerCase()))
      : true;
    return matchesSearch && matchesTech;
  });

  function resetState(){
    setSelectedTech('')
    setSearch('')
  }

  return (
    <Section id="projects">
      <div className="h-10/12 w-full p-10 space-y-5">
        <div className="flex justify-start items-start gap-5">
          <BriefcaseBusinessIcon size={48} className="text-red-500" />
          <div>
            <h2 className="text-2xl font-bold">Heres some other cool stuff i've done</h2>
            <p className="text-xl text-zinc-400">Take a look around, see if you find something that interests you.</p>
          </div>
        </div>
        <div className="relative">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full border border-zinc-800 pl-10 pr-4 py-3 rounded-lg bg-zinc-900/80 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mx-0 sm:mx-10">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologies.map((t, i) => (
                <Button
                  onClick={() => setSelectedTech(t)}
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs w-fit ${selectedTech === t ? "bg-red-600" : "bg-gray-600"}`}
                >
                  {t}
                </Button>
              ))}
            </div>
            <Button onClick={resetState} className="bg-red-600 px-3 py-1 rounded-full text-xs w-fit mt-2 sm:mt-0">Limpar</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 w-full">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
