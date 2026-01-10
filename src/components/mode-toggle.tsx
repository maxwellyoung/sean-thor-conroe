"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      [{theme === "dark" ? "light" : "dark"}]
    </button>
  );
}
