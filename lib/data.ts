export interface ExperienceItem {
  title: string
  organization: string
  date: string
  details: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
}

export const personal = {
  name: 'Uzoma Chukwubunkem Columbus',
  title: 'Software Developer',
  email: 'uzomachukwubunkem@gmail.com',
  phone: ['+234 902 687 5184', '+234 903 648 7503'],
  location: 'Lagos, Nigeria',
  linkedin: 'https://www.linkedin.com/in/columbus-uzoma',
  github: 'https://github.com/uzomachukwubunkem-pixel',
}

export const about = {
  intro:
    "I'm a Mechanical Engineering graduate with hands-on experience in engineering design, process optimization, and prototyping, now pivoting into software development through intensive training at GoMyCode.",
  bridge:
    'I combine strong analytical and problem-solving skills from engineering with newly acquired full-stack development capabilities. Through GoMyCode, I have built a solid software development foundation, allowing me to bridge physical systems with digital solutions.',
  interests:
    'I am particularly interested in roles involving IoT, automation, data-driven engineering, and full-stack development for industrial or product-based applications.',
}

export const skills = {
  programming: [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'Next.js',
    'HTML/CSS',
    'Git/GitHub',
  ],
  engineering: ['AutoCAD', 'SolidWorks', 'Microsoft Office Suite'],
  software: ['Analytical Thinking', 'Problem Solving', 'Team Collaboration'],
}

export const experiences: ExperienceItem[] = [
     {
    title: 'B.Eng in Mechanical Engineering',
    organization: 'Federal University of Technology, Owerri',
    date: 'Graduated',
    details: [
      'Comprehensive engineering education with focus on design, thermodynamics, and mechanical systems.',
    ],
  },
 
  {
    title: 'Engineering Intern',
    organization: 'Nigerian Stored Products Research Institute, Lagos',
    date: 'Jan 2024 – Jun 2024',
    details: [
      'Improved production line workflows, reducing downtime by 15%',
      'Designed mechanical components using CAD, shortening lead time by 20%',
      'Participated in continuous improvement projects, increasing productivity by 10%',
      'Collaborated with cross‑functional teams to align mechanical design with software needs',
    ],
  },
  {
    title: 'Software Development Bootcamp',
    organization: 'GoMyCode',
    date: '2025-2026',
    details: [
      'Front‑end Development (HTML, CSS, JavaScript, React)',
      'Back‑end Development (Node.js, Express, Databases)',
      'Version Control (Git, GitHub)',
      'Responsive Web Design & Deployment',
    ],
  },
]

export const featuredProjects: Project[] = [
  {
    title: 'TaskFlow – Task Management App',
    description: 'A React and Node.js application for managing tasks with features like user authentication, real-time updates, and a sleek UI, Built responsive web apps using React and Node.js. ',
    tech: ['JavaScript', 'React', 'Node.js', 'HTML/CSS'],
  },
  {
    title: 'Solar‑Powered Quick Return Mechanism',
    description:
      'Engineered a solar‑powered pumping system with 45% efficiency improvement. Programmed monitoring logic and data tracking.',
    tech: ['Mechanical Design', 'Solar Power', 'System Integration'],
  },
  {
    title: 'Post‑Harvest Engineering Solutions',
    description:
      'Designed machine components using AutoCAD and SolidWorks, reducing prototype development time by 25%. Applied thermodynamics principles.',
    tech: ['AutoCAD', 'SolidWorks', 'Thermodynamics'],
  },
]

// 👇 GitHub repositories to show – edit this list
export const selectedGitHubRepos = [
  'expenseTracker',
  'taskFlow',
  'cine-verse',
  'todoApp',
  'movieRecommendation',
  'portfolio',
]

export const references = [
  {
    name: 'Mr. Sammy',
    title: 'Senior Software Engineer',
    phone: '+234 803 247 5585',
    note: 'Additional references and project links available upon request.',
  },
  {
    name: 'Mr. Tosin',
    title: 'Senior Software Engineer',
    phone: '+234 801 535 9082',
    note: 'Additional references and project links available upon request.',
  }
]