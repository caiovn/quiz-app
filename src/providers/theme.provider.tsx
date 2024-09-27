/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext, ReactElement, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: () => void;
};

const defaultValue: Theme = "light";
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultValue,
  setTheme: () => {},
});

function ThemeProvider({ children }: { children: ReactElement }) {
  const [theme, setTheme] = useState(defaultValue);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme;
    if (!storedTheme) return;
    setTheme(storedTheme);
    setThemeInDOM(theme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    setThemeInDOM(theme);
  }, [theme]);

  const handleChangeTheme = () => {
    console.log("change", theme);
    setTheme((t) => (t === "light" ? "dark" : "light"));
    setThemeInDOM(theme);
  };

  const setThemeInDOM = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <ThemeContext.Provider
        value={{ theme: theme, setTheme: handleChangeTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeProvider, ThemeContext };
