'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onExecute: (command: string) => void;
}

export function TerminalInput({ value, onChange, onExecute }: TerminalInputProps) {
  const { theme } = useTheme();
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onExecute(value);
    }
  };

  return (
    <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <span className="mr-2 md:mr-3 font-mono text-xs md:text-sm opacity-60">nikhil $</span>
      <div className="flex-1 relative">
        <input
          id="terminal-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`w-full bg-transparent border-none outline-none font-mono text-xs md:text-sm caret-transparent ${
            theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-black placeholder-gray-400'
          }`}
          placeholder="Type a command..."
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          inputMode="text"
        />
        <span 
          className={`absolute top-0 left-0 font-mono text-xs md:text-sm pointer-events-none ${
            showCursor ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          style={{ left: `${value.length * 0.6}em` }}
        >
          |
        </span>
      </div>
    </div>
  );
}
