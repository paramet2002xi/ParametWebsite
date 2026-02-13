
export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    role: string;
    timeline: string;
    type: string;
    tools: string[];
    overview: {
        problem: string;
        solution: string;
    };
    process: {
        image: string; // Placeholder for sitemap/userflow
    };
    designSystem: {
        colors: { name: string; hex: string }[];
        typography: { name: string; usage: string }[];
    };
    gallery: {
        id: number;
        image: string;
        label?: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'ecommerce-dashboard',
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing.',
        role: 'UX/UI Designer',
        timeline: '3 Weeks',
        type: 'Web Application',
        tools: ['Figma', 'React', 'Tailwind CSS'],
        overview: {
            problem: 'Store owners struggled with fragmented data across multiple platforms, making it difficult to get a clear view of their business health and inventory status in real-time.',
            solution: 'Designed a unified dashboard that aggregates critical metrics, simplifies inventory management with low-stock alerts, and streamlines the order fulfillment process.',
        },
        process: {
            image: '/placeholder-sitemap.jpg',
        },
        designSystem: {
            colors: [
                { name: 'Primary Blue', hex: '#2563EB' },
                { name: 'Success Green', hex: '#10B981' },
                { name: 'Dark Slate', hex: '#1E293B' },
                { name: 'Light Gray', hex: '#F1F5F9' },
            ],
            typography: [
                { name: 'Inter', usage: 'Primary Font for UI elements' },
            ],
        },
        gallery: [
            { id: 1, image: '/project1.jpg', label: 'Dashboard Overview' },
            { id: 2, image: '/project1-mobile.jpg', label: 'Mobile View' },
        ],
    },
     {
        id: 2,
        slug: 'finance-app',
        title: 'Finance App UI Kit',
        description: 'A modern UI kit for fintech applications. Includes 50+ components, dark mode support, and accessibility features.',
        role: 'UI Designer',
        timeline: '2 Weeks',
        type: 'UI Kit',
        tools: ['Figma', 'Auto Layout', 'Variables'],
        overview: {
             problem: 'Fintech apps often suffer from complex, cluttered interfaces that intimidate users. Developers needed a clean, consistent starting point.',
             solution: 'Created a modular UI kit with 50+ accessible components, focusing on clarity, trust, and ease of use to speed up development.',
        },
        process: {
            image: '/placeholder-process.jpg',
        },
        designSystem: {
            colors: [
                { name: 'Deep Purple', hex: '#5B21B6' },
                { name: 'Accent Pink', hex: '#EC4899' },
                { name: 'Dark', hex: '#0F172A' },
            ],
            typography: [
                { name: 'Plus Jakarta Sans', usage: 'Headings & Body' },
            ],

        },
        gallery: [
             { id: 1, image: '/project2.jpg', label: 'Onboarding Screens' },
              { id: 2, image: '/project2-components.jpg', label: 'Component Library' },
        ],
    },
];
