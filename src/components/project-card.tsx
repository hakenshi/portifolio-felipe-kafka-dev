import { Code2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { buttonVariants } from './ui/button'

interface ProjectCardProps {
    id: number
    title: string,
    briefDescription: string
    tags: string[]
}

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Card className="dark hover:border-red-600/50 w-100 h-130 grid grid-rows-4 p-0">
            <CardHeader className="bg-linear-to-br grid row-span-2 place-items-center from-gray-900/50 to-gray-950/50 rounded-t-xl rounded-b-sm">
                <Code2Icon className="text-red-600/70" size={32} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
                <CardTitle className="text-md text-white">{project.title}</CardTitle>
                <CardDescription className="pt-5">
                    {project.briefDescription}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col">
                <div className="flex justify-start w-full gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <div className="bg-gray-600 px-3 py-1 rounded-full text-xs">{tag}</div>
                    ))}
                </div>
                <div className="flex items-end h-2/3"><Link className={buttonVariants({ variant: 'default' })} to={`/projects/${project.id}`} >See Project</Link></div>
            </CardFooter>
        </Card>
    )
}
