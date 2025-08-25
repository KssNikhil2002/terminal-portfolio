'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { TerminalLine, CommandOutput } from '@/types/terminal';
import { useCommands } from '@/hooks/useCommands';

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState('');
  const [lineCounter, setLineCounter] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const hasInitialized = useRef(false);
  const { executeCommand, getAvailableCommands, getCommandSuggestions } = useCommands();

  // Load terminal state from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLines = sessionStorage.getItem('terminal-lines');
      const savedHistory = sessionStorage.getItem('terminal-history');
      const savedCounter = sessionStorage.getItem('terminal-counter');

      if (savedLines) {
        try {
          const parsedLines = JSON.parse(savedLines);
          // Convert timestamp strings back to Date objects
          const linesWithDates = parsedLines.map((line: any) => ({
            ...line,
            timestamp: new Date(line.timestamp)
          }));
          setLines(linesWithDates);
          hasInitialized.current = true; // Mark as initialized if we have saved lines
        } catch (error) {
          console.warn('Failed to parse saved terminal lines');
        }
      }

      if (savedHistory) {
        try {
          setCommandHistory(JSON.parse(savedHistory));
        } catch (error) {
          console.warn('Failed to parse saved command history');
        }
      }

      if (savedCounter) {
        try {
          setLineCounter(parseInt(savedCounter, 10));
        } catch (error) {
          console.warn('Failed to parse saved line counter');
        }
      }
    }
  }, []);

  // Save terminal state to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && lines.length > 0) {
      sessionStorage.setItem('terminal-lines', JSON.stringify(lines));
    }
  }, [lines]);

  useEffect(() => {
    if (typeof window !== 'undefined' && commandHistory.length > 0) {
      sessionStorage.setItem('terminal-history', JSON.stringify(commandHistory));
    }
  }, [commandHistory]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('terminal-counter', lineCounter.toString());
    }
  }, [lineCounter]);

  const addLine = useCallback((type: TerminalLine['type'], content: string) => {
    const newLine: TerminalLine = {
      id: `line-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      content,
      timestamp: new Date()
    };
    setLines(prev => [...prev, newLine]);
    setLineCounter(prev => prev + 1);
  }, []);

  const clearTerminal = useCallback(() => {
    setLines([]);
    setCommandHistory([]);
    setLineCounter(0);
    hasInitialized.current = false; // Reset to allow welcome message again
    
    // Clear sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('terminal-lines');
      sessionStorage.removeItem('terminal-history');
      sessionStorage.removeItem('terminal-counter');
    }
    
    // Add welcome message after clearing
    setTimeout(() => {
      if (!hasInitialized.current) {
        addLine('output', 'Welcome, Nikhil! Type \'help\' to see available commands.');
        hasInitialized.current = true;
      }
    }, 100);
  }, [addLine]);

  const executeCommandLine = useCallback((command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand || isProcessing) return;

    setIsProcessing(true);
    setCurrentInput('');
    
    // Add command to history
    setCommandHistory(prev => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // Add command line at the top
    addLine('input', `nikhil $ ${trimmedCommand}`);

    // Execute command with a delay for typewriter effect
    setTimeout(() => {
      const result = executeCommand(trimmedCommand);
      
      // Handle clear command specially
      if (result.success && result.content === 'clear') {
        // Smooth clear animation
        setTimeout(() => {
          clearTerminal();
          setIsProcessing(false);
          // Focus back on input
          const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
          if (terminalInput) {
            terminalInput.focus();
          }
        }, 150);
        return;
      }
      
      // Add result below the command for other commands
      if (result.success) {
        addLine('output', result.content);
      } else {
        addLine('error', result.error || 'Command failed');
      }

      // Reset processing state after content is added
      setTimeout(() => {
        setIsProcessing(false);
        // Focus back on input
        const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
        if (terminalInput) {
          terminalInput.focus();
        }
      }, 300);
    }, 200);
  }, [addLine, executeCommand, isProcessing, clearTerminal]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const suggestions = getCommandSuggestions(currentInput);
      if (suggestions.length === 1) {
        setCurrentInput(suggestions[0]);
      }
    }
  }, [commandHistory, historyIndex, currentInput, getCommandSuggestions]);

  // Initialize with welcome message - only once
  useEffect(() => {
    if (!hasInitialized.current) {
      addLine('output', `Welcome, Nikhil! Type 'help' to see available commands.`);
      hasInitialized.current = true;
    }
  }, [addLine]);

  return {
    lines,
    currentInput,
    setCurrentInput,
    executeCommandLine,
    clearTerminal,
    handleKeyDown,
    getAvailableCommands,
    getCommandSuggestions,
    isProcessing
  };
}
