# Nikhil Kruthiventi - Terminal Portfolio

A modern, interactive terminal-style portfolio website showcasing AI/ML engineering and full-stack development expertise. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a clean, minimal design with authentic terminal aesthetics.

![Terminal Portfolio Demo](https://your-demo-gif-url.com)

## ✨ Features

### 🖥️ Terminal Interface
- **Interactive Command Line**: Authentic terminal experience with command prompt
- **Command History**: Navigate through previous commands using arrow keys (↑/↓)
- **Auto-completion**: Tab completion for available commands
- **Command Validation**: Intelligent error handling with suggestions
- **Responsive Design**: Seamlessly works on desktop, tablet, and mobile devices

### 🎯 Available Commands
- `about` - Display personal information, bio, and education
- `technologies` - Show technical skills, programming languages, and tools
- `experience` - List work experience, roles, and achievements
- `projects` - Display portfolio projects with descriptions and links
- `contact` - Show contact information and social media links
- `clear` - Clear the terminal screen
- `help` - Display list of available commands and usage instructions
- `theme` - Toggle between dark and light themes

### 🎨 Theme System
- **Dark Mode**: Default terminal-style theme (dark background, green text)
- **Light Mode**: Clean, minimal light theme (light background, dark text)
- **Theme Toggle**: Button in header or command-based switching
- **Persistence**: Remembers user's theme preference using localStorage

### ⚡ Animations & Effects
- **Typewriter Effect**: Content appears with realistic terminal text streaming
- **Blinking Cursor**: Authentic terminal cursor behavior
- **Smooth Transitions**: Subtle animations between theme changes
- **Auto-scroll**: Automatically scrolls to show new content

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useContext)
- **Fonts**: Geist Mono for authentic terminal feel
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Customization

### Personal Information
Edit the portfolio data in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  education: 'Your education...',
  location: 'Your location',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  interests: ['Interest 1', 'Interest 2', ...]
};
```

### Technologies
Update your skills and proficiency levels:

```typescript
export const technologies: Technology[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript/TypeScript', proficiency: 'Expert' },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### Experience & Projects
Add your work experience and projects in the same file.

### Metadata & SEO
Update site metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Terminal Portfolio",
  description: "Your description...",
  // Update other metadata...
};
```

## 📱 Mobile Optimization

- **Touch-friendly**: Optimized for mobile touch interactions
- **Responsive Typography**: Scales appropriately for different screen sizes
- **Virtual Keyboard**: Proper input handling for mobile keyboards
- **Auto-focus**: Intelligent focus management for better mobile experience

## 🎨 Design Philosophy

### Notion-Inspired Minimalism
- Clean typography with excellent readability
- Generous whitespace and proper spacing
- Subtle animations and transitions
- Consistent color palette
- Minimal visual clutter
- Focus on content hierarchy

### Terminal Aesthetics
- Monospace font for authentic feel
- Consistent prompt styling (`user@portfolio:~$`)
- Terminal-style text formatting
- Proper command syntax highlighting
- Realistic terminal behaviors

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

```bash
npm run build
npm run start
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS
- DigitalOcean
- Railway

## 📝 Commands Usage

```bash
# Navigation
about           # Learn about me
technologies    # View my technical skills
experience      # See my work history
projects        # Browse my projects
contact         # Get in touch

# Utilities
clear           # Clear terminal screen
help            # Show all commands
theme           # Toggle dark/light mode
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic terminal interfaces
- Design philosophy influenced by Notion's minimalism
- Built with modern web technologies

## 📞 Support

If you have any questions or run into issues:
- Create an issue on GitHub
- Reach out via email: your.email@example.com
- Connect on LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Made with ❤️ and ☕ by [Your Name](https://your-portfolio-url.com)**