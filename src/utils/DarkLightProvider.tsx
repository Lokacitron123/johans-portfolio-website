"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function DarkLightProvider({ children }: Props) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
