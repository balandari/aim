"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "aim-theme";
const LIGHT_DEFAULT_MIGRATION_KEY = "aim-theme-light-default-v1";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    try {
      if (!localStorage.getItem(LIGHT_DEFAULT_MIGRATION_KEY)) {
        localStorage.removeItem(THEME_STORAGE_KEY);
        localStorage.setItem(LIGHT_DEFAULT_MIGRATION_KEY, "done");
      }
    } catch {
      // If storage is unavailable, keep the markup's light default.
    }

    // Sync state with what the inline script already set on <html>
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(LIGHT_DEFAULT_MIGRATION_KEY, "done");
    localStorage.setItem(THEME_STORAGE_KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
