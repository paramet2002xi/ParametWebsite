export type Lang = 'en' | 'th';

export const translations = {
    // ===== Navbar =====
    nav: {
        home: { en: 'Home', th: 'หน้าแรก' },
        about: { en: 'About', th: 'เกี่ยวกับ' },
        education: { en: 'Education', th: 'การศึกษา' },
        experience: { en: 'Experience', th: 'ประสบการณ์' },
        portfolio: { en: 'Portfolio', th: 'ผลงาน' },
        contact: { en: 'Contact', th: 'ติดต่อ' },
    },

    // ===== Hero =====
    hero: {
        badge: { en: 'Available for new projects', th: 'พร้อมรับโปรเจกต์ใหม่' },
        greeting: { en: "Hi, I'm", th: 'สวัสดี, ผม' },
        name: { en: 'PARAMET', th: 'ปารเมศ' },
        lastName: { en: 'KUMPAPUN', th: 'คำภาพันธ์' },
        subtitle: { en: 'UX/UI Designer', th: 'นักออกแบบ UX/UI' },
        description: {
            en: "I design intuitive and beautiful digital experiences. Focused on user-centered design, responsive layouts, and creating interfaces that solve real problems.",
            th: "ผมออกแบบประสบการณ์ดิจิทัลที่ใช้งานง่ายและสวยงาม มุ่งเน้นการออกแบบที่ผู้ใช้เป็นศูนย์กลาง, Responsive Layout และสร้าง Interface ที่แก้ปัญหาได้จริง"
        },
        letsTalk: { en: "Let's Talk", th: 'พูดคุยกัน' },
        resume: { en: 'Resume', th: 'เรซูเม่' },
    },

    // ===== About =====
    about: {
        title: { en: 'About Me', th: 'เกี่ยวกับผม' },
        role: { en: 'UX/UI Designer', th: 'นักออกแบบ UX/UI' },
        desc1: {
            en: "I am a UX/UI Designer with experience in designing responsive websites and applications, focusing on user-centered design aligned with business objectives. I work across UX research, wireframing, and UI design, with a foundational understanding of frontend development that supports effective collaboration with development teams.",
            th: "ผมเป็นนักออกแบบ UX/UI ที่มีประสบการณ์ในการออกแบบเว็บไซต์และแอปพลิเคชันแบบ Responsive โดยเน้นการออกแบบที่ผู้ใช้เป็นศูนย์กลางสอดคล้องกับเป้าหมายธุรกิจ ทำงานครอบคลุมทั้ง UX Research, Wireframing และ UI Design พร้อมความเข้าใจพื้นฐานด้าน Frontend Development ที่ช่วยให้ทำงานร่วมกับทีมพัฒนาได้อย่างมีประสิทธิภาพ"
        },
        desc2: {
            en: "I aim to deliver practical, high-quality design solutions through clear workflows and teamwork.",
            th: "ผมมุ่งมั่นส่งมอบผลงานออกแบบที่ใช้งานได้จริงและมีคุณภาพผ่านกระบวนการทำงานที่ชัดเจนและการทำงานเป็นทีม"
        },
        skillCategories: {
            'Design & UX': { en: 'Design & UX', th: 'การออกแบบ & UX' },
            'Tools & AI': { en: 'Tools & AI', th: 'เครื่องมือ & AI' },
            'Technical': { en: 'Technical', th: 'เทคนิค' },
            'Soft Skills': { en: 'Soft Skills', th: 'ทักษะด้านอื่นๆ' },
            'Languages': { en: 'Languages', th: 'ภาษา' },
        },
        skills: {
            'Design & UX': [
                { en: 'UX Research', th: 'วิจัย UX' },
                { en: 'Wireframing & Prototyping', th: 'Wireframe & Prototype' },
                { en: 'Design Systems', th: 'ระบบออกแบบ' },
                { en: 'UI Components', th: 'คอมโพเนนต์ UI' },
                { en: 'UI Design', th: 'ออกแบบ UI' },
            ],
            'Tools & AI': [
                { en: 'Figma', th: 'Figma' },
                { en: 'Adobe Photoshop', th: 'Adobe Photoshop' },
                { en: 'Canva', th: 'Canva' },
                { en: 'Chat GPT', th: 'Chat GPT' },
                { en: 'Gemini', th: 'Gemini' },
                { en: 'Perplexity', th: 'Perplexity' },
                { en: 'Stitch', th: 'Stitch' },
                { en: 'NotebookLM', th: 'NotebookLM' },
            ],
            'Technical': [
                { en: 'HTML', th: 'HTML' },
                { en: 'CSS', th: 'CSS' },
                { en: 'JavaScript', th: 'JavaScript' },
                { en: 'Next.js', th: 'Next.js' },
                { en: 'Tailwind CSS', th: 'Tailwind CSS' },
                { en: 'MySQL', th: 'MySQL' },
            ],
            'Soft Skills': [
                { en: 'Cross-team Collaboration', th: 'การทำงานร่วมกันข้ามทีม' },
                { en: 'Analytical & Systematic Thinking', th: 'การคิดเชิงวิเคราะห์และเป็นระบบ' },
                { en: 'Problem Solving', th: 'การแก้ปัญหา' },
                { en: 'Active Learning & Adaptability', th: 'การเรียนรู้เชิงรุกและปรับตัว' },
                { en: 'Attention to Detail', th: 'ความใส่ใจในรายละเอียด' },
            ],
            'Languages': [
                { en: 'Thai (Native)', th: 'ไทย (ภาษาแม่)' },
                { en: 'English (Intermediate)', th: 'อังกฤษ (ระดับกลาง)' },
            ],
        },
    },

    // ===== Education =====
    education: {
        title: { en: 'Education', th: 'การศึกษา' },
        items: [
            {
                role: {
                    en: 'Faculty of Science and Technology, Major of Computer Science',
                    th: 'คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์'
                },
                institution: {
                    en: 'Rajamangala University of Technology Thanyaburi',
                    th: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี'
                },
                period: '2021 - 2025',
                description: 'GPA 3.20',
            },
            {
                role: {
                    en: 'Science-Mathematic',
                    th: 'วิทย์-คณิต'
                },
                institution: {
                    en: 'Thanyaburi School',
                    th: 'โรงเรียนธัญบุรี'
                },
                period: '2018 - 2021',
                description: 'GPA 3.04',
            },
        ],
    },

    // ===== Experience =====
    experience: {
        title: { en: 'Work Experience', th: 'ประสบการณ์ทำงาน' },
        items: [
            {
                role: { en: 'UX UI Designer', th: 'นักออกแบบ UX UI' },
                company: { en: 'Kaset AI Co., Ltd.', th: 'บริษัท เกษตร เอไอ จำกัด' },
                period: 'Aug 2025 - Present',
                description: {
                    en: 'Designed user experiences for responsive web and application interfaces based on business objectives and user needs. Collaborated with Project Managers, stakeholders, and development teams to define design direction. Analyzed user flows, pain points, and user behavior, created wireframes (low-fidelity to high-fidelity), and iterated UX based on feedback. Designed UI aligned with approved wireframes and brand guidelines. Utilized and prepared Design Systems and reusable UI components. Supported frontend implementation using Next.js, Tailwind CSS, and TypeScript.',
                    th: 'ออกแบบประสบการณ์ผู้ใช้สำหรับ Web และ Application Interface แบบ Responsive ตามเป้าหมายธุรกิจและความต้องการของผู้ใช้ ร่วมมือกับ Project Manager, ผู้มีส่วนได้ส่วนเสีย และทีมพัฒนาเพื่อกำหนดทิศทางการออกแบบ วิเคราะห์ User Flow, Pain Points และพฤติกรรมผู้ใช้ สร้าง Wireframe (Low-Fidelity ถึง High-Fidelity) และปรับปรุง UX ตาม Feedback ออกแบบ UI ตาม Wireframe และ Brand Guidelines ที่อนุมัติแล้ว จัดทำ Design System และ UI Component ที่ใช้ซ้ำได้ สนับสนุนการพัฒนา Frontend ด้วย Next.js, Tailwind CSS และ TypeScript'
                },
            },
            {
                role: { en: 'UX UI Designer (Intern)', th: 'นักออกแบบ UX UI (ฝึกงาน)' },
                company: { en: 'iBusiness Corporation Co., Ltd.', th: 'บริษัท ไอบิสซิเนส คอร์ปอเรชั่น จำกัด' },
                period: 'July 2024 - Oct 2024',
                description: {
                    en: "Redesigned the company's existing website into a new interface. Designed responsive UX/UI for web applications based on business objectives and user needs. Collaborated with the Lead UX/UI Designer and development team. Created low- to high-fidelity wireframes and designed UI based on existing Design Systems. Designed visual assets and marketing banners for special campaigns and seasonal events using Adobe Photoshop.",
                    th: 'ออกแบบเว็บไซต์ของบริษัทใหม่ทั้งหมด ออกแบบ UX/UI แบบ Responsive สำหรับ Web Application ตามเป้าหมายธุรกิจและความต้องการของผู้ใช้ ร่วมงานกับ Lead UX/UI Designer และทีมพัฒนา สร้าง Wireframe ตั้งแต่ Low-Fidelity ถึง High-Fidelity และออกแบบ UI ตาม Design System ที่มีอยู่ ออกแบบ Visual Asset และ Banner โฆษณาสำหรับแคมเปญพิเศษและเทศกาลต่างๆ ด้วย Adobe Photoshop'
                },
            },
        ],
    },

    // ===== Certification =====
    certification: {
        title: { en: 'Certifications', th: 'ใบรับรอง' },
    },

    // ===== Portfolio =====
    portfolio: {
        title: { en: 'Portfolio', th: 'ผลงาน' },
        viewCaseStudy: { en: 'View Case Study', th: 'ดูกรณีศึกษา' },
    },

    // ===== Contact =====
    contact: {
        title: { en: 'Get In Touch', th: 'ติดต่อ' },
        subtitle: {
            en: "Starting a new project or just want to chat? Feel free to reach out. I'm currently available for freelance projects and open to new opportunities.",
            th: "เริ่มโปรเจกต์ใหม่หรืออยากพูดคุย? อย่าลังเลที่จะติดต่อมา ผมพร้อมรับงานฟรีแลนซ์และเปิดรับโอกาสใหม่ๆ"
        },
        info: { en: 'Contact Information', th: 'ข้อมูลการติดต่อ' },
        emailMe: { en: 'Email Me', th: 'อีเมล' },
        callMe: { en: 'Call Me', th: 'โทรศัพท์' },
        location: { en: 'Location', th: 'ที่ตั้ง' },
        locationValue: { en: 'Pathum Thani, Thailand', th: 'ปทุมธานี, ประเทศไทย' },
        followMe: { en: 'Follow Me', th: 'ติดตามผม' },
        nameLabel: { en: 'Name', th: 'ชื่อ' },
        namePlaceholder: { en: 'John Doe', th: 'ชื่อ-นามสกุล' },
        emailLabel: { en: 'Email', th: 'อีเมล' },
        emailPlaceholder: { en: 'john@example.com', th: 'example@email.com' },
        messageLabel: { en: 'Message', th: 'ข้อความ' },
        messagePlaceholder: { en: 'Tell me about your project...', th: 'เล่าเกี่ยวกับโปรเจกต์ของคุณ...' },
        sendBtn: { en: 'Send Message', th: 'ส่งข้อความ' },
    },

    // ===== Footer =====
    footer: {
        rights: { en: 'All rights reserved.', th: 'สงวนลิขสิทธิ์ทั้งหมด' },
    },
} as const;

// Helper type for translation keys
export type TranslationValue = { en: string; th: string };
