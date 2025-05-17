import { useParams } from "react-router"
import Section from "../components/section";
import { projects } from "../lib/projects-data";

export default function ProjectsProjectPage() {

  const { id } = useParams()

  const project = projects.find(p => id ? p.id === parseInt(id) : {})

  return (
    <Section>{project?.title}</Section>
  )
}
