"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-2xl font-bold font-[family-name:var(--font-heading)]"
        >
          MySite
        </Link>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 3.1a1 1 0 01.993.883L13 4v2a1 1 0 01-1.993.117L11 6V4a1 1 0 011-1zM5.636 5.636a1 1 0 01.117 1.41l-1.414 1.414A1 1 0 012.93 6.93l1.414-1.414a1 1 0 011.292-.117zM12 16a4 4 0 100-8 4 4 0 000 8zm6.364-9.95a1 1 0 011.41 1.41l-1.414 1.415a1 1 0 01-1.528-1.282l.118-.128 1.414-1.415zM19 11a1 1 0 01.117 1.993L19 13h-2a1 1 0 01-.117-1.993L17 11h2zM6 11a1 1 0 01.117 1.993L6 13H4a1 1 0 01-.117-1.993L4 11h2zm11.657 6.657a1 1 0 011.41 0l1.414 1.414a1 1 0 01-1.41 1.415l-1.415-1.415a1 1 0 010-1.414zM4.222 17.071a1 1 0 011.415 1.414L4.222 19.9a1 1 0 01-1.415-1.414l1.415-1.415zM13 18v2a1 1 0 01-1.993.117L11 20v-2a1 1 0 011.993-.117L13 18z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 2.076A9 9 0 1121.924 13.5 7 7 0 0010.5 2.076zM12 20a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:underline transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:underline transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hover:underline transition-colors">
            Projects
          </Link>
          <Link href="/podcast" className="hover:underline transition-colors">
            Podcast
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 3.1a1 1 0 01.993.883L13 4v2a1 1 0 01-1.993.117L11 6V4a1 1 0 011-1zM5.636 5.636a1 1 0 01.117 1.41l-1.414 1.414A1 1 0 012.93 6.93l1.414-1.414a1 1 0 011.292-.117zM12 16a4 4 0 100-8 4 4 0 000 8zm6.364-9.95a1 1 0 011.41 1.41l-1.414 1.415a1 1 0 01-1.528-1.282l.118-.128 1.414-1.415zM19 11a1 1 0 01.117 1.993L19 13h-2a1 1 0 01-.117-1.993L17 11h2zM6 11a1 1 0 01.117 1.993L6 13H4a1 1 0 01-.117-1.993L4 11h2zm11.657 6.657a1 1 0 011.41 0l1.414 1.414a1 1 0 01-1.41 1.415l-1.415-1.415a1 1 0 010-1.414zM4.222 17.071a1 1 0 011.415 1.414L4.222 19.9a1 1 0 01-1.415-1.414l1.415-1.415zM13 18v2a1 1 0 01-1.993.117L11 20v-2a1 1 0 011.993-.117L13 18z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 2.076A9 9 0 1121.924 13.5 7 7 0 0010.5 2.076zM12 20a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 border-t">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="hover:underline transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:underline transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="hover:underline transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/podcast"
              className="hover:underline transition-colors"
              onClick={closeMenu}
            >
              Podcast
            </Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 self-start transition-colors"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 3.1a1 1 0 01.993.883L13 4v2a1 1 0 01-1.993.117L11 6V4a1 1 0 011-1zM5.636 5.636a1 1 0 01.117 1.41l-1.414 1.414A1 1 0 012.93 6.93l1.414-1.414a1 1 0 011.292-.117zM12 16a4 4 0 100-8 4 4 0 000 8zm6.364-9.95a1 1 0 011.41 1.41l-1.414 1.415a1 1 0 01-1.528-1.282l.118-.128 1.414-1.415zM19 11a1 1 0 01.117 1.993L19 13h-2a1 1 0 01-.117-1.993L17 11h2zM6 11a1 1 0 01.117 1.993L6 13H4a1 1 0 01-.117-1.993L4 11h2zm11.657 6.657a1 1 0 011.41 0l1.414 1.414a1 1 0 01-1.41 1.415l-1.415-1.415a1 1 0 010-1.414zM4.222 17.071a1 1 0 011.415 1.414L4.222 19.9a1 1 0 01-1.415-1.414l1.415-1.415zM13 18v2a1 1 0 01-1.993.117L11 20v-2a1 1 0 011.993-.117L13 18z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 2.076A9 9 0 1121.924 13.5 7 7 0 0010.5 2.076zM12 20a8 8 0 100-16 8 8 0 000 16z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
