import { episodes } from "./episodes";

export default function Podcast() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Podcast</h1>
      <div className="mb-8 aspect-video">
        <iframe
          src="https://open.spotify.com/embed/episode/7iHf3U6uxne52Z8n2Nbn6R?utm_source=generator"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className="space-y-6">
        {episodes.map((episode) => (
          <div key={episode.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-1">{episode.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{episode.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
