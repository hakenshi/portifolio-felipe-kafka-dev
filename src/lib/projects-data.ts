export const projects = [
    {
        id: 1,
        title: "Droplet",
        description: "Droplet is a ambicious social media app project that's still on development, it embraces the freedeom of speech and the possibility to connect with people and make new experiences.",
        briefDescription: "A social media app focused on freedom of speech and connecting people.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "Laravel"],
    },
    {
        id: 2,
        title: "Intercurso UNIFAE",
        description: "This platform was created for my college in 2024. It was made to help organize the annual intercollegiate sports event (similar to a 'school games week'), where students from different courses compete and interact.",
        briefDescription: "A platform to organize and manage annual intercollegiate sports events.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["React", "Javascript", "Laravel"],
    },
    {
        id: 3,
        title: "Stich",
        description: "Stich is a free and opensource powerful CLI tool made for help people kickstart react and Next.JS projects, make components and Next.JS related files (pages, layouts, actions, api routes, etc...)",
        briefDescription: "A CLI tool to quickly scaffold React and Next.JS projects and files.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Typescript", "Bun"],
    },
    {
        id: 4,
        title: "Ecommerce Management System",
        description: "A comprehensive platform for managing ecommerce operations, inventory, and customer relations with ease.",
        briefDescription: "A platform to manage ecommerce operations, inventory, and customers.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Laravel", "PHP", "Livewire", "Docker"],
    },
    {
        id: 5,
        title: "VIP English School Platform",
        description: "A streamlined learning management system offering interactive features for both teachers and students, facilitating assignments, progress tracking, and communication.",
        briefDescription: "A learning management system for teachers and students.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "PrismaORM", ],
    },
    {
        id: 6,
        title: "Pokédex WebApp",
        description: "A simple Pokédex webapp",
        briefDescription: "A web app to browse and search Pokémon data.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "PrismaORM", ],
    },
];

export const technologies = [...new Set(projects.flatMap(project => project.tags).sort())]