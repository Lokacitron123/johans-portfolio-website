import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import DarkLightProvider from "@/utils/DarkLightProvider";

// Fonts
const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johan | Personal Portfolio",
  description: "Johan is a fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${firaCode.className}  bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <DarkLightProvider>
          <Header />
          <main className='mx-auto max-w-5xl px-6 flex flex-col justify-center items-center'>
            {children}
          </main>
          <Footer />
        </DarkLightProvider>
      </body>
    </html>
  );
}
