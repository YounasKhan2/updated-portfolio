import type { Experience, Project, Skill, Stat } from '../lib/types';

export const STATS: Stat[] = [
  { id: 1, value: 2, suffix: '+', label: 'Years Experience' },
  { id: 2, value: 16, suffix: '+', label: 'Projects Shipped' },
  { id: 3, value: 10, suffix: '+', label: 'Happy Clients' },
  { id: 4, value: 99, suffix: '%', label: 'Code Quality & CSAT' },
];

export const SKILLS: Skill[] = [
  // Frontend
  { id: 1, name: 'React', category: 'Frontend', level: 95, sort_order: 1 },
  { id: 2, name: 'Next.js', category: 'Frontend', level: 90, sort_order: 2 },
  { id: 3, name: 'TypeScript', category: 'Frontend', level: 92, sort_order: 3 },
  { id: 4, name: 'Tailwind CSS', category: 'Frontend', level: 95, sort_order: 4 },
  { id: 5, name: 'JavaScript', category: 'Frontend', level: 95, sort_order: 5 },
  { id: 6, name: 'Redux / Zustand', category: 'Frontend', level: 88, sort_order: 6 },

  // Backend
  { id: 7, name: 'Node.js', category: 'Backend', level: 90, sort_order: 7 },
  { id: 8, name: 'Express.js', category: 'Backend', level: 90, sort_order: 8 },
  { id: 9, name: 'PostgreSQL / Supabase', category: 'Backend', level: 88, sort_order: 9 },
  { id: 10, name: 'MongoDB', category: 'Backend', level: 85, sort_order: 10 },
  { id: 11, name: 'Prisma ORM', category: 'Backend', level: 86, sort_order: 11 },
  { id: 12, name: 'REST & GraphQL APIs', category: 'Backend', level: 92, sort_order: 12 },

  // Mobile
  { id: 13, name: 'Flutter', category: 'Mobile', level: 92, sort_order: 13 },
  { id: 14, name: 'Dart', category: 'Mobile', level: 90, sort_order: 14 },
  { id: 15, name: 'Firebase', category: 'Mobile', level: 88, sort_order: 15 },
  { id: 16, name: 'Android Studio', category: 'Mobile', level: 85, sort_order: 16 },

  // Tools & DevOps
  { id: 17, name: 'Git & GitHub', category: 'Tools & DevOps', level: 94, sort_order: 17 },
  { id: 18, name: 'Docker', category: 'Tools & DevOps', level: 82, sort_order: 18 },
  { id: 19, name: 'CI/CD & Vercel', category: 'Tools & DevOps', level: 90, sort_order: 19 },
  { id: 20, name: 'Postman', category: 'Tools & DevOps', level: 92, sort_order: 20 },
  { id: 21, name: 'Figma', category: 'Tools & DevOps', level: 85, sort_order: 21 },
  { id: 22, name: 'Linux / Bash', category: 'Tools & DevOps', level: 84, sort_order: 22 },
];

export const PROJECTS: Project[] = [
  // Top Selected Projects (Featured)
  {
    id: 1,
    title: 'AI-Powered Resume Generator',
    tagline: 'Intelligent resume builder & ATS optimizer',
    description:
      'An AI-driven platform that generates, formats, and tailors professional resumes based on job descriptions to maximize ATS match score and applicant success.',
    category: 'Full Stack',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    demo_url: 'https://ai-powered-resume-generator-ecru.vercel.app/',
    github_url: 'https://github.com/YounasKhan2/ai-powered-resume-generator',
    year: '2025',
    featured: true,
    sort_order: 1,
  },
  {
    id: 2,
    title: 'Meridian',
    tagline: 'Modern scalable web platform',
    description:
      'A feature-rich application designed with clean modular architecture, intuitive navigation, real-time data handling, and responsive cross-platform performance.',
    category: 'Full Stack',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'PWA'],
    demo_url: 'https://meridian-wheat-phi.vercel.app/',
    github_url: 'https://github.com/YounasKhan2/meridian',
    year: '2025',
    featured: true,
    sort_order: 2,
  },
  {
    id: 3,
    title: 'OTA Platform',
    tagline: 'Online travel agency booking & management system',
    description:
      'Full-stack travel booking and reservation engine integrating multi-service aggregation, real-time inventory management, and secure transactions.',
    category: 'Full Stack',
    tech: ['React', 'Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    demo_url: 'https://ota-platform-five.vercel.app/',
    github_url: 'https://github.com/YounasKhan2/OTA-Platform',
    year: '2024',
    featured: true,
    sort_order: 3,
  },

  // Other GitHub Projects (No Live Preview)
  {
    id: 4,
    title: 'E-Commerce Admin Panel',
    tagline: 'Store management, inventory & analytics dashboard',
    description:
      'An end-to-end administration dashboard for managing product catalogs, customer orders, stock levels, and real-time sales performance metrics.',
    category: 'Full Stack',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
    demo_url: null,
    github_url: 'https://github.com/YounasKhan2/E-Commerce-Admin-Panel',
    year: '2024',
    featured: false,
    sort_order: 4,
  },
  {
    id: 5,
    title: 'RedTeam Security',
    tagline: 'Offensive security tools & vulnerability assessment',
    description:
      'Security automation scripts and penetration testing utilities designed to evaluate web application attack surfaces, endpoints, and authentication flows.',
    category: 'Full Stack',
    tech: ['Python', 'Node.js', 'Security Auditing', 'REST APIs', 'Linux'],
    demo_url: null,
    github_url: 'https://github.com/YounasKhan2/redteam-security',
    year: '2024',
    featured: false,
    sort_order: 5,
  },
  {
    id: 6,
    title: 'BlogsWorld',
    tagline: 'Interactive blogging & content publishing platform',
    description:
      'Modern blogging platform featuring markdown support, author management, category tagging, discussion threads, and responsive reading layouts.',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    demo_url: null,
    github_url: 'https://github.com/YounasKhan2/BlogsWorld',
    year: '2023',
    featured: false,
    sort_order: 6,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Web & Enterprise Solutions',
    period: '2024 — 2026',
    location: 'On-site',
    description:
      'Architecting and delivering scalable end-to-end web applications with React, Next.js, Node.js, Express, and PostgreSQL/Supabase.',
    highlights: [
      'Engineered high-performance web apps, AI-powered tools, and administrative platforms with React, TypeScript, and modern styling.',
      'Designed RESTful APIs, database schemas, and secure authentication flows for fast, reliable data processing.',
      'Collaborated on-site with cross-functional teams to build, test, and deploy production systems with automated CI/CD pipelines.',
    ],
    sort_order: 1,
  },
  {
    id: 2,
    role: 'Flutter Android Developer & Freelance Full Stack',
    company: 'Mobile Apps & Freelance Solutions',
    period: '2023 — 2024',
    location: 'Hybrid',
    description:
      'Built cross-platform Android mobile applications using Flutter & Dart alongside delivering freelance full-stack web solutions for global clients.',
    highlights: [
      'Developed native and cross-platform Android mobile apps with Flutter, Dart, and Firebase backend integration.',
      'Delivered client web projects from Figma design handoff to functional production deployment.',
      'Implemented reactive state management and optimized UI rendering for smooth 60fps performance.',
    ],
    sort_order: 2,
  },
  {
    id: 3,
    role: 'Senior Sales Agent',
    company: 'Client Operations & Sales',
    period: '2022 — 2023',
    location: 'On-site',
    description:
      'Led on-site client engagement, sales strategy, negotiation, and relationship management, consistently exceeding performance targets.',
    highlights: [
      'Managed high-value client accounts, negotiations, and end-to-end communication pipelines.',
      'Collaborated with sales and operations teams to align customer needs with product and service offerings.',
      'Honed communication, problem-solving, and client discovery skills that directly enhance full-stack product building.',
    ],
    sort_order: 3,
  },
];
