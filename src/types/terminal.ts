export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

export interface CommandOutput {
  success: boolean;
  content: string;
  error?: string;
}

export interface Command {
  name: string;
  description: string;
  usage: string;
  execute: () => CommandOutput;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  education: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  interests: string[];
}

export interface Technology {
  category: string;
  items: { name: string; proficiency: string; }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
