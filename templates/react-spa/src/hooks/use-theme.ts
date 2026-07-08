import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme";

export function useTheme() {
  const { theme, toggle } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return { theme, toggle, isDark: theme === "dark" };
}
