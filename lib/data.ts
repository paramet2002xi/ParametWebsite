export const projects = [
    {
        id: 'ibusiness',
        type: 'web',
        title: 'iBusiness Corporation',
        description: 'A comprehensive website redesign for iBusiness Corporation. The project focused on modernizing the brand identity, improving user experience, and creating a responsive layout.',
        tags: ['UX/UI Design', 'Figma', 'Web Design', 'Prototype'],
        github: '#',
        live: '#',
        image: '/Projects/iBusiness-Corporation/Perform/1-1-Edit-Home.png',
        caseStudy: {
            overview: "iBusiness Corporation required a complete digital transformation to align with their expanding service portfolio. The goal was to create a modern, professional, and trustworthy online presence that effectively communicates their value proposition to potential B2B clients.",
            problem: "The previous website was outdated, difficult to navigate, and did not reflect the company's current standing in the market. Users struggled to find service information, and the lack of responsive design hurt mobile traffic.",
            solution: "We designed a clean, corporate-yet-modern interface using a blue-tone color palette to evoke trust and stability. The new information architecture simplifies navigation, organizing services into clear categories. Key features include a dynamic news section, detailed service pages, and a streamlined contact flow.",
            myRole: "Lead UX/UI Designer",
            timeline: "2 Months",
            tools: ["Figma", "Photoshop", "Illustrator"],
            siteMap: "/sitemap-placeholder.png", // Placeholder
            designSystem: {
                colors: [
                    { name: "Primary Blue", value: "#0F4C81" },
                    { name: "Slate 900", value: "#1E293B" },
                    { name: "Slate 500", value: "#64748B" },
                    { name: "Slate 100", value: "#F1F5F9" },
                    { name: "White", value: "#FFFFFF" }
                ],
                typography: {
                    fontFamily: "Inter",
                    scale: [
                        { level: "Heading 1", weight: "Bold", size: "36px" },
                        { level: "Heading 2", weight: "SemiBold", size: "24px" },
                        { level: "Body", weight: "Medium", size: "16px" }
                    ]
                },
            },
            targetUsers: [
                { title: 'Customers', desc: 'Looking for portfolio or service information' },
                { title: 'Partners', desc: 'Seeking business collaboration and contact' },
                { title: 'Job Applicants', desc: 'Interested in the organization culture and jobs' },
                { title: 'Internal Staff', desc: 'Using internal tools and resources' }
            ],
            mainFeatures: [
                "Responsive Design for all devices",
                "Clean & Modern Corporate Identity",
                "Service Catalog with detailed views",
                "News & Activity Management System"
            ],
            gallery: [
                { src: '/Projects/iBusiness-Corporation/Perform/1-1-Edit-Home.png', title: 'Home Page' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-2 About.png', title: 'About Us' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-7 News & Activity.png', title: 'News & Activity' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-8 Contact.png', title: 'Contact Us' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-3 Services.png', title: 'Services' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-4 Showcase.png', title: 'Showcase' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-7-1 News & Activity.png', title: 'News Detail' },
                { src: '/Projects/iBusiness-Corporation/Perform/1-4-1 Showcase-DITP CARE.png', title: 'Showcase Detail' }
            ]
        }
    },
    {
        id: 'ruthi',
        type: 'mobile',
        title: 'Ruthi',
        description: 'A real estate platform application designed to connect landowners, agents, and investors, enabling landowners to list properties easily while allowing buyers to discover opportunities and manage deals efficiently.',
        tags: ['Mobile App', 'UX/UI Design', 'Figma'],
        github: '#',
        live: '#',
        image: '/Projects/Ruthi/3-Home.png',
        caseStudy: {
            overview: "A real estate platform application designed to connect landowners, agents, and investors, enabling landowners to list properties easily while allowing buyers to discover opportunities and manage deals efficiently.",
            problem: [
                "Land search still relies on keywords and manual browsing, making the process slow and inefficient.",
                "Buyers and investors lack visibility into the true potential and future value of land.",
                "Decision-making is driven by intuition rather than data and intelligence.",
                "Buyers, sellers, and investors operate on fragmented and disconnected information.",
                "Sellers with large land portfolios struggle to find the right channels to reach serious buyers.",
                "Managing multiple land deals simultaneously is complex and unstructured."
            ],
            solution: [
                "An AI-powered centralized platform for land discovery and real estate transactions.",
                "Natural language land search without the need for traditional keywords.",
                "A smart marketplace connecting verified buyers, sellers, and investors in one place.",
                "AI-driven analysis to quickly assess land potential and investment opportunities.",
                "An AI chat assistant that provides contextual insights for each land plot.",
                "A streamlined, transparent, and data-driven approach to land buying, selling, and investing."
            ],
            myRole: "UX/UI Designer",
            timeline: "Ongoing",
            tools: ["Figma"],
            siteMap: null,
            designSystem: {
                colors: [
                    { name: "Primary Green", value: "#059669" },
                    { name: "Secondary Dark", value: "#1F2937" },
                    { name: "Accent Red", value: "#FF2C2C" },
                    { name: "Accent Blue", value: "#2880C3" },
                    { name: "Off-White", value: "#F5F6F7" },
                    { name: "White", value: "#FFFFFF" }
                ],
                typography: {
                    fontFamily: "Sarabun",
                    scale: [
                        { level: "H1", weight: "Bold", size: "36px" },
                        { level: "H2", weight: "Bold", size: "32px" },
                        { level: "H3", weight: "Bold", size: "30px" },
                        { level: "H4", weight: "Bold", size: "24px" },
                        { level: "H5", weight: "Bold", size: "20px" },
                        { level: "H6", weight: "Bold", size: "18px" },
                        { level: "Paragraph", weight: "Regular", size: "16px" },
                        { level: "Menu", weight: "Regular", size: "14px" },
                        { level: "Navigation", weight: "Regular", size: "12px" }
                    ]
                },
            },
            targetUsers: [
                { title: 'Landowners', desc: 'Want to list and sell their land easily through a trusted platform' },
                { title: 'Agents / Brokers', desc: 'Looking for a centralized tool to manage listings and connect with buyers' },
                { title: 'Investors', desc: 'Seeking data-driven insights to evaluate land potential and investment opportunities' },
                { title: 'Buyers', desc: 'Looking for the right land with transparent information and AI-assisted search' }
            ],
            empathyMap: {
                say: [
                    '"I want to sell my land at a fair price."',
                    '"I don\'t know where to list it to reach real buyers."',
                    '"My land has potential, but people don\'t seem to understand it."',
                    '"I don\'t want brokers to undervalue my property."',
                    '"I want the selling process to be simple and hassle-free."'
                ],
                think: [
                    '"What if I set the wrong price and can\'t sell it?"',
                    '"Are the people contacting me serious buyers?"',
                    '"What can my land realistically be used for?"',
                    '"How should I manage multiple land listings?"',
                    '"I\'m afraid of being scammed or having weak bargaining power."'
                ],
                do: [
                    'Searches for land-selling channels on Facebook, groups, and websites',
                    'Lists the same property across multiple platforms using duplicated information',
                    'Contacts multiple agents to compare options',
                    'Responds to calls and messages from unknown-quality leads',
                    'Manually tracks buyer inquiries and sales status without a clear system'
                ],
                feel: [
                    'Anxious about not being able to sell or selling below market value',
                    'Confused by inconsistent information and advice',
                    'Tired of answering repetitive questions',
                    'Lacks confidence in the buying-selling process',
                    'Relieved and satisfied when finding a serious buyer'
                ]
            },
            layoutGrid: {
                description: "A design is only as strong as its invisible skeleton; our grid is the blueprint of luxury.",
                mobile: { deviceWidth: '375px', contentWidth: '343px', columns: 4, gutter: '16px' }
            },
            mainFeatures: ["Land Search & Map Integration", "Title Deed Management", "Legal Resources", "User Profile System"],
            gallery: [
                { src: '/Projects/Ruthi/1-Splash.png', title: 'Splash Screen' },
                { src: '/Projects/Ruthi/2-Login.png', title: 'Login' },
                { src: '/Projects/Ruthi/3-Home.png', title: 'Home' },
                { src: '/Projects/Ruthi/3.2-Search.png', title: 'Search' },
                { src: '/Projects/Ruthi/5-Map.png', title: 'Map View' },
                { src: '/Projects/Ruthi/4.2-Detail_Deed.png', title: 'Deed Details' },
                { src: '/Projects/Ruthi/6-law.png', title: 'Legal Info' },
                { src: '/Projects/Ruthi/7-Profile.png', title: 'Profile' }
            ]
        }
    },
    {
        id: 'project-3',
        title: 'Project 3 (Placeholder)',
        description: 'A brief description of your third project. Explain the key features and technologies used.',
        tags: ['Vue', 'Nuxt', 'Sass'],
        github: '#',
        live: '#',
        image: '/Projects/iBusiness-Corporation/Perform/1-1-Edit-Home.png',
        caseStudy: {
            overview: "This is a placeholder overview for Project 3.",
            problem: "Placeholder problem statement.",
            solution: "Placeholder solution description.",
            myRole: "Full Stack Developer",
            timeline: "3 Weeks",
            tools: ["Vue.js", "Firebase"],
            siteMap: null,
            designSystem: null,
            mainFeatures: ["Feature A", "Feature B"]
        }
    }
];
