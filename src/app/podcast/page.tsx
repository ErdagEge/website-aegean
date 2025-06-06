import { episodes } from "./episodes";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Podcast | Ege's Personal Site",
  description: "Conversations and audio content from Ege.",
  path: "podcast",
});

export default function Podcast() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 font-[family-name:var(--font-body)]">
      <h1 className="text-4xl font-extrabold mb-10">Podcast</h1>
      <div className="mb-8 h-[232px]">
        <iframe
          src="https://open.spotify.com/embed/show/5IkatgeB5ZBbbAADZC9Tty?utm_source=generator"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className="space-y-6">
        {episodes
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((episode) => (
          <div key={episode.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-1">{episode.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{episode.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
