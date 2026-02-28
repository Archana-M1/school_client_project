import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'default' | 'bw' | 'maroon';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeLabel: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeLabels: Record<Theme, string> = {
  default: 'Teal & White',
  bw: 'Black & White',
  maroon: 'Maroon & White',
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('school-theme');
    return (saved as Theme) || 'default';
  });

  useEffect(() => {
    localStorage.setItem('school-theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove('theme-bw', 'theme-maroon');
    
    // Add the appropriate theme class
    if (theme === 'bw') {
      document.documentElement.classList.add('theme-bw');
    } else if (theme === 'maroon') {
      document.documentElement.classList.add('theme-maroon');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeLabel: themeLabels[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
