import { PersonalInfo, Technology, Experience, Project } from '@/types/terminal';

export const personalInfo: PersonalInfo = {
  name: 'Nikhil Kruthiventi',
  title: 'AI/ML Engineer & Full Stack Developer',
  bio: `I'm a first-year Master's student in Computer Science at UW-Madison, specializing in Artificial Intelligence and Machine Learning. With a strong foundation in full-stack development, I have hands-on experience with frontend technologies like React.js and React Native, as well as backend technologies including Node.js, Express.js, Flask, and databases like MySQL and PostgreSQL. My passion for machine learning drives my work in developing algorithms using Python and PyTorch, blending my expertise in software development with cutting-edge AI techniques.`,
  education: `M.Sc in Computer Science @UW-Madison (2024 - Present) - CGPA: 4.0/4.0, Specialization: Artificial Intelligence
B.Sc in Computer Science @UW-Madison (2022 - 2024) - CGPA: 3.9/4.0
Awards: Graduating Class Distinction (Top 15%), NCAA National Champion in Cricket (Spring 2024), Dean's List Honors (Fall 2022, Spring 2023)`,
  location: 'Madison, WI',
  email: 'skruthiventi@wisc.edu',
  linkedin: 'https://linkedin.com/in/nikhil-kruthiventi',
  github: 'https://github.com/KssNikhil2002',
  interests: ['Artificial Intelligence', 'Machine Learning', 'Full Stack Development', 'Robotics', 'Cricket', 'Research']
};

export const technologies: Technology[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', proficiency: 'Expert' },
      { name: 'JavaScript/TypeScript', proficiency: 'Expert' },
      { name: 'C#', proficiency: 'Advanced' },
      { name: 'SQL', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', proficiency: 'Expert' },
      { name: 'Next.js', proficiency: 'Expert' },
      { name: 'React Native', proficiency: 'Expert' },
      { name: 'TailwindCSS', proficiency: 'Expert' }
    ]
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js/Express.js', proficiency: 'Expert' },
      { name: 'Flask', proficiency: 'Expert' },
      { name: 'PostgreSQL', proficiency: 'Expert' },
      { name: 'MySQL', proficiency: 'Advanced' },
      { name: 'Firebase', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'AI/ML & Data Science',
    items: [
      { name: 'PyTorch', proficiency: 'Expert' },
      { name: 'OpenCV', proficiency: 'Advanced' },
      { name: 'Apache Spark', proficiency: 'Advanced' },
      { name: 'HuggingFace', proficiency: 'Advanced' },
      { name: 'LLMs/NLP', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git/GitHub', proficiency: 'Expert' },
      { name: 'Docker', proficiency: 'Advanced' },
      { name: 'Unity', proficiency: 'Advanced' },
      { name: 'Blender', proficiency: 'Intermediate' },
      { name: 'Postman', proficiency: 'Expert' },
      { name: 'JIRA', proficiency: 'Advanced' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'Amazon',
    role: 'Incoming Software Engineer Intern',
    duration: 'Sept 2025 – Dec 2025',
    location: 'Austin, TX',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'Nutanix',
    role: 'Member of Technical Staff(Data/GenAI) - Intern',
    duration: 'Jun 2025 – Aug 2025',
    location: 'San Jose, CA',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'People and Robotics Lab',
    role: 'Research Software Engineer Intern',
    duration: 'June 2024 – Dec 2024',
    location: 'Madison, WI',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'Holos',
    role: 'Software Engineer Intern(Capstone)',
    duration: 'Jan 2024 – May 2024',
    location: 'Madison, WI',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'Demic',
    role: 'Student Software Engineer',
    duration: 'Oct 2023 – May 2024',
    location: 'Madison, WI',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'University of Wisconsin Madison',
    role: 'Machine Learning Research Assistant',
    duration: 'Oct 2023 – Jan 2024',
    location: 'Madison, WI',
    responsibilities: [],
    achievements: []
  },
  {
    company: 'Microsoft Teals',
    role: 'Teaching Assistant',
    duration: 'Oct 2023 – Feb 2024',
    location: 'Madison, WI',
    responsibilities: [],
    achievements: []
  }
];

export const projects: Project[] = [
  {
    title: 'GitFlowAI',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PrismaORM', 'Clerk', 'NeonDB'],
    githubUrl: 'https://github.com/KssNikhil2002/GitFlowAI'
  },
  {
    title: 'Quick Bite',
    technologies: ['React Native', 'JavaScript', 'Firebase', 'TailwindCSS', 'Redux'],
    githubUrl: 'https://github.com/KssNikhil2002/Quick-Bite'
  },
  {
    title: 'Loan Approval Predictor',
    technologies: ['Python', 'Apache Spark', 'Docker', 'Machine Learning'],
    githubUrl: 'https://github.com/KssNikhil2002/Loan-Approval-Predictor'
  },
  {
    title: 'Generative Vision Model',
    technologies: ['PyTorch', 'Python', 'Jupyter Notebook', 'Computer Vision'],
    githubUrl: 'https://github.com/KssNikhil2002/Generative-Vision-Model'
  }
];
