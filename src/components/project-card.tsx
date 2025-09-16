import { Code2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

interface ProjectCardProps {
    id: number
    title: string,
    briefDescription: string
    tags: string[]
}

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Card className="dark hover:border-red-600/50 w-full max-w-sm h-auto min-h-[400px] flex flex-col p-0">
            <CardHeader className="bg-linear-to-br flex-shrink-0 h-32 flex items-center justify-center from-gray-900/50 to-gray-950/50 rounded-t-xl">
                <Code2Icon className="text-red-600/70" size={32} />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between p-4">
                <div>
                    <CardTitle className="text-lg text-center sm:text-left text-white mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-400 line-clamp-3">
                        {project.briefDescription}
                    </CardDescription>
                </div>
                <div className="mt-4">
                    <div className="flex justify-start w-full gap-2 flex-wrap mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="bg-gray-600 px-2 py-1 rounded-full text-xs">{tag}</span>
                        ))}
                    </div>
                    <div className="flex justify-center sm:justify-start">
                        <Link className={buttonVariants({ variant: 'default', size: 'sm' })} to={`/projects/${project.id}`} >See Project</Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}