
const blogPosts = [
  { id: 1, title: "Introducing My Blog", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Another Post", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, title: "Yet Another Post", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-lg md:text-2xl mb-6">Building things for the web</p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-blue-700"
        >
          View My Work
        </a>
      </header>

      <main className="flex-1">
        {/* About Section */}
        <section id="about" className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod, nunc vel convallis suscipit, lacus justo sodales risus,
            vitae fermentum lectus dui at sapien.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">Project One</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Short description about the project.
                </p>
              </div>
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">Project Two</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Short description about the project.
                </p>
              </div>
              <div className="border rounded p-6 bg-white dark:bg-gray-700">
                <h3 className="font-semibold mb-2">Project Three</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Short description about the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Podcast</h2>
          <div className="aspect-video">
            <iframe
              src="https://open.spotify.com/embed/episode/7iHf3U6uxne52Z8n2Nbn6R?utm_source=generator"
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section id="blog" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">
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

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 mb-4">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M8 19c11 0 16-9 16-16v-.7A11.3 11.3 0 0 0 26 0a11 11 0 0 1-3.1 1A5.4 5.4 0 0 0 25 0a11 11 0 0 1-3.4 1.3A5.5 5.5 0 0 0 12 6.5a15.7 15.7 0 0 1-11-6 5.5 5.5 0 0 0 1.7 7.4A5.3 5.3 0 0 1 1 7v.1a5.5 5.5 0 0 0 4.4 5.4 5.2 5.2 0 0 1-1.4.2 4.6 4.6 0 0 1-1-.1 5.5 5.5 0 0 0 5.1 3.8A11 11 0 0 1 0 18.6a15.7 15.7 0 0 0 8 2.4" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-3 .7-3.7-1.5-3.7-1.5a2.9 2.9 0 0 0-1.2-1.5c-1-.8.1-.8.1-.8a2.3 2.3 0 0 1 1.7 1.2 2.3 2.3 0 0 0 3 1 2.3 2.3 0 0 1 .7-1.4c-2.4-.3-5-1.2-5-5.3a4.1 4.1 0 0 1 1.1-2.8 3.9 3.9 0 0 1 .1-2.8s.9-.3 2.8 1a9.7 9.7 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.9 3.9 0 0 1 .1 2.8 4 4 0 0 1 1.1 2.8c0 4.1-2.6 5-5 5.3a2.6 2.6 0 0 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p>Contact: email@example.com</p>
      </footer>
    </div>
  );
}
