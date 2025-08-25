'use client';

import { useEffect, useState } from 'react';
import { TerminalLine as TerminalLineType } from '@/types/terminal';
import { useTheme } from '@/contexts/ThemeContext';

interface TerminalLineProps {
  line: TerminalLineType;
  isFromStorage?: boolean;
}

export function TerminalLine({ line, isFromStorage = false }: TerminalLineProps) {
  const { theme } = useTheme();
  const [displayedContent, setDisplayedContent] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (line.type === 'input' || line.content === 'clear') {
      setDisplayedContent(line.content);
      setIsComplete(true);
      return;
    }

    // Skip typing animation if this line is loaded from storage (page refresh)
    if (isFromStorage) {
      setDisplayedContent(line.content);
      setIsComplete(true);
      return;
    }

    // Typewriter effect for new output content (when commands are executed)
    setDisplayedContent('');
    setIsComplete(false);
    
    let currentIndex = 0;
    const content = line.content;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= content.length) {
        setDisplayedContent(content.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typeInterval);
      }
    }, 10); // Adjust speed as needed

    return () => clearInterval(typeInterval);
  }, [line.content, line.type, isFromStorage]);

  const getLineStyles = () => {
    const baseStyle = theme === 'dark' ? 'text-white' : 'text-black';
    
    switch (line.type) {
      case 'input':
        return `${baseStyle} opacity-60`;
      case 'error':
        return theme === 'dark' ? 'text-red-400' : 'text-red-600';
      case 'output':
        return baseStyle;
      default:
        return baseStyle;
    }
  };

  // Function to detect and make URLs clickable
  const renderContentWithLinks = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-800'
            }`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`${getLineStyles()} transition-all duration-200 ease-in-out`}>
      <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm leading-relaxed">
        {renderContentWithLinks(displayedContent)}
        {!isComplete && line.type === 'output' && (
          <span className="animate-pulse">|</span>
        )}
      </pre>
    </div>
  );
}
