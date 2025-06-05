"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold">
          MySite
        </Link>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
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
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/podcast" className="hover:underline">
            Podcast
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 border-t">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" className="hover:underline" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="hover:underline" onClick={closeMenu}>
              About
            </Link>
            <Link href="/blog" className="hover:underline" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/projects" className="hover:underline" onClick={closeMenu}>
              Projects
            </Link>
            <Link href="/podcast" className="hover:underline" onClick={closeMenu}>
              Podcast
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
