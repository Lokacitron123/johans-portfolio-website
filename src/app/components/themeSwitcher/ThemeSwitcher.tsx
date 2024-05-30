"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // To avoid hydration error - Suggested in the next-themes docs

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='w-[500px] h-[200px] relative block bg-slate-50 rounded shadow-sm cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500'>
      <label htmlFor='darmode-toggle' className='sr-only'>
        Toggle darkmode
      </label>
      <input id='darkmode-toggle' type='text' />
    </div>
  );
}
