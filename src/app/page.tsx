import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Ege's Personal Site | Developer, Engineer, Podcaster",
  description:
    "Personal site of Ege showcasing projects, blog posts, and podcast.",
});

const blogPosts = [
  {
    id: 1,
    title: "Introducing My Blog",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Another Post",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Yet Another Post",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-body)]">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Ege Erdağ</h1>
        <p className="text-xl md:text-2xl mb-8">
          Designing and building things for the web
        </p>
        <a href="#projects" className="btn-gradient px-6 md:px-8 py-3 md:py-4">
          View My Work
        </a>
      </header>

      <main className="flex-1">
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I&apos;m a driven software developer with experience in .NET,
            HTML/CSS, JavaScript, TypeScript and Python. I love creating
            intuitive, engaging web experiences and am interested in blending
            technology with thoughtful design. When I&apos;m not coding, I
            record a great podcast named Açık Büfe Diyalog.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">Website Aegean</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This very site! Look around.
                </p>
              </div>
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">Podcast Archive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A creative podcast archive platform to organize and share
                  content.
                </p>
              </div>
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">
                  Basketball Tournament Tracker
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A web app that can help organizers for their tournament
                  planning. Built with .NET MVC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Podcast</h2>
          <div className="h-[232px]">
            <iframe
              src="https://open.spotify.com/embed/show/5IkatgeB5ZBbbAADZC9Tty?utm_source=generator"
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section
          id="blog"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Latest Blog Posts
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded p-6 bg-white dark:bg-gray-700"
                >
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
