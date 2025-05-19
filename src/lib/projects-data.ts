export const projects = [
    {
        id: 1,
        title: "Droplet",
        description:
            "Droplet is an ambitious social media app project currently under development. The platform is designed to champion freedom of speech, allowing users to express themselves openly and authentically. Droplet aims to foster meaningful connections by enabling users to discover, interact, and share experiences with people from diverse backgrounds. The app features a modern, intuitive UI/UX, real-time messaging and notifications, and robust privacy controls, all built with scalability and user empowerment in mind.",
        briefDescription:
            "A social media app focused on freedom of speech and connecting people.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "Laravel"],
        timeline: {
            start: "January 2025",
            end: null, // still in development
            status: "In Development",
        },
        keyFeatures: [
            "Freedom of speech focused",
            "Connect with new people",
            "Modern UI/UX",
            "Real-time interactions",
        ],
        sourceCode: "https://github.com/hakenshi/droplet",
    },
    {
        id: 2,
        title: "Intercurso UNIFAE",
        description:
            "Intercurso UNIFAE is a comprehensive platform developed for my college in 2024 to streamline the organization of the annual intercollegiate sports event. The system allows administrators to schedule events, manage teams and participants, and facilitate communication between students from different courses. It features live score updates, real-time announcements, and a user-friendly interface for both organizers and participants, making the event more engaging and efficient.",
        briefDescription:
            "A platform to organize and manage annual intercollegiate sports events.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["React", "Javascript", "Laravel"],
        timeline: {
            start: "April 2024",
            end: "October 2024",
            status: "Completed",
        },
        keyFeatures: [
            "Event scheduling and management",
            "Team and participant registration",
            "Live score updates",
            "Announcements and notifications",
        ],
        sourceCode: "https://github.com/hakenshi/intercurso-fae-frontend",
    },
    {
        id: 3,
        title: "Stich",
        description:
            "Stich is a free and open-source CLI tool designed to accelerate the development of React and Next.JS projects. It enables developers to quickly scaffold new projects, generate components, and create Next.JS-specific files such as pages, layouts, actions, and API routes. Stich offers customizable templates, a fast and intuitive command-line experience, and is built with Typescript and Bun for optimal performance and extensibility.",
        briefDescription:
            "A CLI tool to quickly scaffold React and Next.JS projects and files.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Typescript", "Bun"],
        timeline: {
            start: "May 2025",
            end: null, // still in development
            status: "In Development",
        },
        keyFeatures: [
            "Scaffold React/Next.JS projects",
            "Generate components and files",
            "Customizable templates",
            "Fast CLI experience",
        ],
        sourceCode: "https://github.com/hakenshi/stich",
    },
    {
        id: 4,
        title: "Ecommerce Management System",
        description:
            "The Ecommerce Management System is a robust platform designed to simplify and centralize ecommerce operations. It provides tools for managing inventory, processing orders, and maintaining customer relationships. The system includes a sales analytics dashboard for tracking performance, automated notifications for order updates, and user-friendly interfaces for both administrators and staff. Built with scalability and security in mind, it streamlines day-to-day business processes for online retailers.",
        briefDescription:
            "A platform to manage ecommerce operations, inventory, and customers.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Laravel", "PHP", "Livewire", "Docker"],
        timeline: {
            start: "March 2024",
            end: "April 2024",
            status: "Completed",
        },
        keyFeatures: [
            "Inventory management",
            "Order processing",
            "Customer management",
            "Sales analytics dashboard",
        ],
        sourceCode: "https://github.com/hakenshi/sistema-de-vendas",
    },
    {
        id: 5,
        title: "VIP English School Platform",
        description:
            "VIP English School Platform is a modern learning management system tailored for language schools. It offers interactive features for teachers and students, including assignment creation and submission, progress tracking, and direct communication channels. The platform supports interactive learning modules, automated grading, and detailed analytics to monitor student performance. Its intuitive interface ensures a seamless experience for both educators and learners, enhancing the overall educational process.",
        briefDescription:
            "A learning management system for teachers and students.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "PrismaORM"],
        timeline: {
            start: "August 2024",
            end: "November 2024",
            status: "Completed",
        },
        keyFeatures: [
            "Assignment management",
            "Progress tracking",
            "Teacher-student communication",
            "Interactive learning modules",
        ],
        sourceCode: "https://github.com/hakenshi/project-vip-uce",
    },
    {
        id: 6,
        title: "Pokédex WebApp",
        description:
            "Pokédex WebApp is a lightweight and responsive web application that allows users to browse, search, and filter Pokémon data. The app provides detailed information on each Pokémon, including stats, types, and evolutions. It features a fast-loading interface, optimized for both desktop and mobile devices, and leverages modern web technologies to deliver a smooth and engaging user experience for Pokémon enthusiasts.",
        briefDescription: "A web app to browse and search Pokémon data.",
        image: "/placeholder.svg?height=300&width=300",
        tags: ["Next.JS", "Typescript", "PrismaORM"],
        timeline: {
            start: "October 2024",
            end: "October 2024",
            status: "Completed",
        },
        keyFeatures: [
            "Pokémon search and filter",
            "Detailed Pokémon info",
            "Responsive design",
            "Fast loading",
        ],
        sourceCode: "https://github.com/hakenshi/pokedex-webapp",
    },
];

export const technologies = [...new Set(projects.flatMap(p => p.tags).sort())];