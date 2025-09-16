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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
          <BriefcaseBusinessIcon size={48} className="text-red-500 flex-shrink-0" />
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Here's some other cool stuff I've done</h2>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-400">Take a look around, see if you find something that interests you.</p>
          </div>
        </div>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full border border-zinc-800 pl-10 pr-4 py-3 rounded-lg bg-zinc-900/80 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((t, i) => (
                <Button
                  onClick={() => setSelectedTech(t)}
                  key={i}
                  size="sm"
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    selectedTech === t ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                >
                  {t}
                </Button>
              ))}
            </div>
            <Button 
              onClick={resetState} 
              size="sm"
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full text-xs w-fit"
            >
              Clear Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}