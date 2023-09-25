import { useState, useEffect } from 'react';

export const lightTheme = {
  primaryColor: '#ffffff',
  backgroundColor: '#f0f0f0',
  // Add more properties as needed
};

export const darkTheme = {
  primaryColor: '#000000',
  backgroundColor: '#121212',
  // Add more properties as needed
};

// Custom hook to manage the theme
export function useCustomTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
