/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

function ThemeProvider({ children }: { children: ReactElement }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    handleChangeTheme();
  }, []);
  const handleChangeTheme = () => {
    console.log("change", theme);
    setTheme((t) => (t === "light" ? "dark" : "light"));
    document.documentElement.setAttribute("data-theme", theme);
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
