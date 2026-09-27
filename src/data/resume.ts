import type { Skill, Experience, Project, NavLink, SocialLink } from '@/types'

export const name = 'Syed Tanzim Wajih'
export const tagline = 'Full Stack Developer'
export const email = 'syedtanzimwajih@gmail.com'
export const phone = '+91-8279481609'

export const navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/SyedTanzim', icon: 'FiGithub' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/syedtanzimwajih', icon: 'FiLinkedin' },
    { label: 'Email', url: 'mailto:syedtanzimwajih@gmail.com', icon: 'FiMail' },
]

export const skills: Skill[] = [
    // Languages
    { name: 'Python', icon: 'SiPython', category: 'language', proficiency: 'advanced' },
    { name: 'JavaScript', icon: 'SiJavascript', category: 'language', proficiency: 'advanced' },
    { name: 'TypeScript', icon: 'SiTypescript', category: 'language', proficiency: 'advanced' },
    { name: 'Java', icon: 'SiJava', category: 'language', proficiency: 'intermediate' },

    // Frontend
    { name: 'React.js', icon: 'SiReact', category: 'frontend', proficiency: 'advanced' },
    { name: 'HTML5', icon: 'SiHtml5', category: 'frontend', proficiency: 'expert' },
    { name: 'CSS3', icon: 'SiCss3', category: 'frontend', proficiency: 'expert' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend', proficiency: 'advanced' },

    // Backend
    { name: 'FastAPI', icon: 'SiFastapi', category: 'backend', proficiency: 'advanced' },
    { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend', proficiency: 'advanced' },
    { name: 'Express.js', icon: 'SiExpress', category: 'backend', proficiency: 'advanced' },

    // Database
    { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database', proficiency: 'advanced' },
    { name: 'MySQL', icon: 'SiMysql', category: 'database', proficiency: 'intermediate' },
    { name: 'MongoDB', icon: 'SiMongodb', category: 'database', proficiency: 'intermediate' },

    // DevOps/Tools
    { name: 'Docker', icon: 'SiDocker', category: 'devops', proficiency: 'intermediate' },
    { name: 'Git', icon: 'SiGit', category: 'tools', proficiency: 'expert' },
    { name: 'Vercel', icon: 'SiVercel', category: 'tools', proficiency: 'advanced' },
]

export const experience: Experience[] = [
    {
        id: 1,
        company: 'EduSkills Academy (AICTE)',
        role: 'Full Stack Web Developer Intern',
        type: 'internship',
        startDate: 'Apr 2025',
        endDate: 'Jun 2025',
        current: false,
        location: 'Remote',
        highlights: [
            'Built reusable React components for responsive interfaces using HTML5, CSS3, and JavaScript, translating UI designs into functional frontend code.',
            'Integrated RESTful APIs to connect frontend and backend, reducing manual data handling by 40% and improving page load speed.',
            'Debugged issues across frontend and backend systems using Git and GitHub for version control and code reviews, following standard engineering practices.',
        ],
        techStack: ['React', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Git'],
    },
]

export const projects: Project[] = [
    {
        id: 1,
        title: 'TypeSprint',
        description:
            'A full-stack typing performance platform with a GraphQL API on Bun, React/TypeScript client, JWT auth with bcrypt, real-time scoring engine, global leaderboard, and automated test suites deployed on Vercel + Railway.',
        techStack: ['React', 'TypeScript', 'GraphQL', 'Bun', 'PostgreSQL', 'Prisma', 'JWT'],
        liveUrl: 'https://typing-speed-game-burdenoff.vercel.app',
        githubUrl: 'https://github.com/SyedTanzim/typesprint',
        imageUrl: '',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management Application',
        description:
            'A RESTful task management backend built with FastAPI and PostgreSQL. Features full CRUD, SQLAlchemy ORM, Pydantic validation, and a clean layered architecture with routers, controllers, models, and DTOs.',
        techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'uv'],
        githubUrl: 'https://github.com/SyedTanzim/task-management-api',
        imageUrl: '',
        featured: false,
    },
]

export const education = {
    university: 'Invertis University, Bareilly, India',
    degree: 'Bachelor of Computer Applications (BCA)',
    cgpa: '8.00 / 10',
    graduationYear: '2026',
}
