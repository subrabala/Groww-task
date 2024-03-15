"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { FiSun, FiMoon } from "react-icons/fi"; // Import sun and moon icons
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href={inter.url} />
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>
      <body className={`theme-${theme}`}>
        <button
          onClick={toggleTheme}
          className="toggle-theme absolute right-10 bottom-10 bg-primary text-white p-4 rounded-full"
        >
          {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
        {children}
        <style jsx global>{`
          :root {
            --primary-color: #692deb;
            --secondary-color: var(
              --secondary-color-light
            ); // Default to light secondary color
          }
          .theme-light {
            background-color: #ffffff;
            color: #000000;
          }
          .theme-dark {
            background-color: #222222;
            color: #ffffff;
          }
          body {
            margin: 0;
            --secondary-color: var(--secondary-color);
          }
        `}</style>
      </body>
    </html>
  );
};

export default Layout;
