'use client';

import { useCallback, useMemo } from 'react';
import { Command, CommandOutput } from '@/types/terminal';
import { personalInfo, technologies, experiences, projects } from '@/data/portfolio';
import { useTheme } from '@/contexts/ThemeContext';

export function useCommands() {
  const { theme, toggleTheme } = useTheme();

  const formatAbout = useCallback(() => {
    return `Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}

Education:
${personalInfo.education}`;
  }, []);

  const formatTechnologies = useCallback(() => {
    let output = '';

    technologies.forEach((category, index) => {
      if (index > 0) output += '\n';
      output += `${category.category}:\n`;
      category.items.forEach(item => {
        output += `  • ${item.name.padEnd(20)} [${item.proficiency}]\n`;
      });
    });

    return output.trim();
  }, []);

  const formatExperience = useCallback(() => {
    let output = '';

    experiences.forEach((exp, index) => {
      if (index > 0) output += '\n\n';
      
      output += `${exp.company} | ${exp.role}
${exp.duration} | ${exp.location}`;
    });

    return output.trim();
  }, []);

  const formatProjects = useCallback(() => {
    let output = '';

    projects.forEach((project, index) => {
      if (index > 0) output += '\n\n';
      
      output += `${project.title}
Technologies: ${project.technologies.join(', ')}`;

      if (project.liveUrl) {
        output += `\nLive Demo: ${project.liveUrl}`;
      }
      if (project.githubUrl) {
        output += `\nGitHub: ${project.githubUrl}`;
      }
    });

    return output.trim();
  }, []);

  const formatContact = useCallback(() => {
    return `Email: ${personalInfo.email}
Phone: +1 608-867-3345
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

Feel free to reach out for collaborations, opportunities, or just to chat!`;
  }, []);

  const formatHelp = useCallback(() => {
    return `Navigation Commands:
  about         Display personal information and bio
  technologies  Show technical skills and tools
  experience    List work experience and achievements
  projects      Display portfolio projects
  contact       Show contact information

Utility Commands:
  clear         Clear the terminal screen
  help          Display this help message
  theme         Toggle between dark and light themes

Tips:
• Use arrow keys (↑/↓) to navigate command history
• Press Tab for command auto-completion
• Commands are case-insensitive
• Click anywhere in the terminal to focus input
• Use buttons in top-right for quick access to LinkedIn, GitHub, Resume`;
  }, []);

  const commands: Record<string, Command> = useMemo(() => ({
    about: {
      name: 'about',
      description: 'Display personal information and bio',
      usage: 'about',
      execute: () => ({ success: true, content: formatAbout() })
    },
    technologies: {
      name: 'technologies',
      description: 'Show technical skills and tools',
      usage: 'technologies',
      execute: () => ({ success: true, content: formatTechnologies() })
    },
    experience: {
      name: 'experience',
      description: 'List work experience and achievements',
      usage: 'experience',
      execute: () => ({ success: true, content: formatExperience() })
    },
    projects: {
      name: 'projects',
      description: 'Display portfolio projects',
      usage: 'projects',
      execute: () => ({ success: true, content: formatProjects() })
    },
    contact: {
      name: 'contact',
      description: 'Show contact information',
      usage: 'contact',
      execute: () => ({ success: true, content: formatContact() })
    },
    help: {
      name: 'help',
      description: 'Display available commands',
      usage: 'help',
      execute: () => ({ success: true, content: formatHelp() })
    },
    clear: {
      name: 'clear',
      description: 'Clear the terminal screen',
      usage: 'clear',
      execute: () => ({ success: true, content: 'clear' })
    },
    theme: {
      name: 'theme',
      description: 'Toggle between dark and light themes',
      usage: 'theme',
      execute: () => {
        toggleTheme();
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        return { success: true, content: `Theme switched to ${newTheme} mode` };
      }
    },
    portfolio: {
      name: 'portfolio',
      description: 'View original portfolio website',
      usage: 'portfolio',
      execute: () => {
        // Open the original portfolio in a new tab
        window.open('https://kssnikhil.vercel.app/', '_blank');
        return { success: true, content: `Opening original portfolio: https://kssnikhil.vercel.app/\n\nThis terminal portfolio is v3.0 - a minimal, interactive experience.\nThe original portfolio (v2.0) features a more visual, comprehensive design.` };
      }
    }
  }), [formatAbout, formatTechnologies, formatExperience, formatProjects, formatContact, formatHelp, theme, toggleTheme]);

  const executeCommand = useCallback((input: string): CommandOutput => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) {
      return { success: false, content: '', error: 'Please enter a command. Type "help" for available commands.' };
    }

    const command = commands[trimmedInput];
    if (command) {
      return command.execute();
    }

    // Handle unknown commands
    const availableCommands = Object.keys(commands);
    const suggestions = availableCommands.filter(cmd => 
      cmd.includes(trimmedInput) || trimmedInput.includes(cmd)
    );

    let errorMessage = `Command '${input}' not found.`;
    if (suggestions.length > 0) {
      errorMessage += ` Did you mean: ${suggestions.join(', ')}?`;
    }
    errorMessage += ` Type 'help' for available commands.`;

    return { success: false, content: '', error: errorMessage };
  }, [commands]);

  const getAvailableCommands = useCallback(() => {
    return Object.keys(commands);
  }, [commands]);

  const getCommandSuggestions = useCallback((input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return [];

    return Object.keys(commands).filter(cmd => 
      cmd.startsWith(trimmedInput)
    );
  }, [commands]);

  return {
    executeCommand,
    getAvailableCommands,
    getCommandSuggestions
  };
}
