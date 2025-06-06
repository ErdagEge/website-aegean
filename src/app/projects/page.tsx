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
    title: "Website Aegean",
    description: "THIS is website aegean.",
    link: "https://github.com/ErdagEge/website-aegean",
  },
  {
    title: "Podcast Archive",
    description: "A creative podcast archive platform to organize and share content.",
    link: "https://erdagege.github.io/podcast-archive/",
  },
  {
    title: "Basketball Tournament Tracker",
    description: "A web app that can help organizers for their tournament planning. Built with .NET MVC.",
    link: "https://github.com/ErdagEge/basketball-tournament-tracker",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 font-[family-name:var(--font-body)]">
      <h1 className="text-4xl font-extrabold mb-10">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded p-6 bg-white dark:bg-gray-800 transition hover:shadow-lg hover:-translate-y-1"
          >
            <h2 className="font-semibold text-2xl mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
