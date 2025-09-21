import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext({
    theme: "system",
    setTheme: () => { }
})

export default function ThemeProvider({ children, defaultTheme, storageKey, ...props }) {
    const key = storageKey || "magic-stock-theme";
    const initialTheme = localStorage.getItem(key) || defaultTheme || "system";

    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme) => {
            localStorage.setItem(key, newTheme);
            setTheme(newTheme);
        },
    };

    return (
        <ThemeContext.Provider value={value} {...props}>
            {children}
        </ThemeContext.Provider>
    );
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };