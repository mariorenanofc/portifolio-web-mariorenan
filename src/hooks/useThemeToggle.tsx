
import { useState, useEffect } from 'react';

export function useThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Log para debug
    console.log('Theme loaded:', savedTheme, 'Dark class applied:', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // Log para debug
    console.log('Theme toggled to:', newTheme, 'Dark class applied:', newTheme === 'dark');
  };

  return { theme, toggleTheme };
}
