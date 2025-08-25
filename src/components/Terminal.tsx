'use client';

import { useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { TerminalLine } from '@/components/TerminalLine';
import { TerminalInput } from '@/components/TerminalInput';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export function Terminal() {
  const { theme } = useTheme();
  const {
    lines,
    currentInput,
    setCurrentInput,
    executeCommandLine,
    clearTerminal,
    handleKeyDown,
    isProcessing
  } = useTerminal();

  const terminalRef = useRef<HTMLDivElement>(null);

  // Smart scroll: command to top, result visible below
  useEffect(() => {
    if (terminalRef.current && lines.length > 0) {
      const container = terminalRef.current.closest('.overflow-y-auto') as HTMLElement;
      const lastLine = lines[lines.length - 1];
      
      if (container) {
        setTimeout(() => {
          if (lastLine.type === 'input') {
            // When a command is entered, find the command element and scroll it to top
            const allElements = terminalRef.current?.querySelectorAll('div');
            const commandElements = Array.from(allElements || []).filter(el => 
              el.textContent?.includes('nikhil $')
            );
            const lastCommandElement = commandElements[commandElements.length - 1];
            
            if (lastCommandElement) {
              const elementRect = lastCommandElement.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const scrollOffset = elementRect.top - containerRect.top + container.scrollTop - 80;
              container.scrollTop = Math.max(0, scrollOffset);
            }
          } else {
            // For output, ensure the result is visible
            container.scrollTop = container.scrollHeight;
          }
        }, 50);
      }
    }
  }, [lines]);

  // Handle clear command
  useEffect(() => {
    const lastLine = lines[lines.length - 1];
    if (lastLine?.type === 'output' && lastLine.content === 'clear') {
      setTimeout(() => clearTerminal(), 100);
    }
  }, [lines, clearTerminal]);

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Focus on terminal input when typing
      const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
      if (terminalInput && !terminalInput.contains(document.activeElement)) {
        if (e.key.length === 1 || e.key === 'Backspace') {
          terminalInput.focus();
        }
      }
      
      handleKeyDown(e);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyDown]);



  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Portfolio Link - Top Left */}
      <div className="fixed top-4 left-4 z-10">
        <a
          href="https://kssnikhil.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-mono transition-all duration-200 backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
          title="View Complete Portfolio"
        >
          {/* Hand-drawn arrow SVG */}
          <svg 
            width="18" 
            height="14" 
            viewBox="0 0 18 14" 
            fill="none" 
            className="rotate-6 flex-shrink-0"
          >
            <path 
              d="M2 7C5.5 5.5 9.5 8.5 16 6.5M16 6.5L13 4M16 6.5L13.5 9.5" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="opacity-80"
            />
          </svg>
          <span>check the complete portfolio</span>
        </a>
      </div>

      {/* Action Buttons & Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <a
          href="https://linkedin.com/in/nikhil-kruthiventi"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-200 backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
          title="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/nikhil-kruthiventi"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-200 backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
          title="GitHub Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <button
          onClick={() => {
            // Create a download link for resume
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Nikhil_Kruthiventi_Resume.pdf';
            link.click();
          }}
          className={`p-3 rounded-full transition-all duration-200 backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
          title="Download Resume"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </button>
        <ThemeToggle />
      </div>

      {/* Scrollable Terminal Content */}
      <div className="h-screen overflow-y-auto scroll-smooth">
        <div className={`min-h-screen flex justify-center pt-20 pb-20 px-6 ${
          lines.length <= 2 ? 'items-center' : 'items-start'
        }`}>
          <div className="w-full max-w-2xl mx-auto">
            <div 
              ref={terminalRef}
              className="space-y-3 font-mono text-sm leading-relaxed transition-all duration-300 ease-in-out"
              onClick={() => {
                const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
                terminalInput?.focus();
              }}
            >
              {lines.map((line, index) => (
                <TerminalLine key={`${line.id}-${index}`} line={line} />
              ))}
              
              {/* Current Input Line - Only show when not processing */}
              {!isProcessing && (
                <TerminalInput
                  value={currentInput}
                  onChange={setCurrentInput}
                  onExecute={executeCommandLine}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
