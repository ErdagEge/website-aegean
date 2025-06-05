type Project = {
  title: string;
  description: string;
  link: string;
};

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects | Ege's Personal Site",
  description: "A selection of projects built by Ege.",
  path: "projects",
});

const projects: Project[] = [
  {
    title: "Project One",
    description: "Short description about the project.",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Short description about the project.",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "Short description about the project.",
    link: "https://example.com/project-three",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded p-6 bg-white dark:bg-gray-800 transition hover:shadow-lg hover:-translate-y-1"
          >
            <h2 className="font-semibold text-xl mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
