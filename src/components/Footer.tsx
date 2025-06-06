"use client";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t py-8 mt-16">
      <div className="container mx-auto px-4 text-center flex flex-col items-center space-y-6 font-[family-name:var(--font-body)]">
        <div className="flex space-x-6">
          <a
            href="https://github.com/ErdagEge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 00-3.162 19.495c.5.092.683-.217.683-.483v-1.704c-2.782.604-3.369-1.343-3.369-1.343-.454-1.15-1.11-1.458-1.11-1.458-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.914.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.5.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.099 2.65.64.7 1.029 1.594 1.029 2.688 0 3.849-2.338 4.695-4.566 4.943.359.31.679.921.679 1.856v2.753c0 .269.181.58.688.481A10.001 10.001 0 0012 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/egeerdag"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h14.04A2.5 2.5 0 0021.5 18V6a2.5 2.5 0 00-2.48-2.5H4.98zM8 18H5.5V9H8v9zm-1.25-10.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18.5 18h-2.5v-4.5c0-1.24-.51-2-1.56-2-.85 0-1.28.57-1.49 1.12-.08.2-.1.47-.1.74V18h-2.5V9H13v1.24c.36-.55 1.01-1.34 2.46-1.34 1.79 0 3.04 1.17 3.04 3.69V18z" />
            </svg>
          </a>
          <a
            href="mailto:egeerdag@gmail.com"
            aria-label="Email"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 4.5h21v15h-21v-15zM12 13.5l10.5-7.5h-21l10.5 7.5z" />
            </svg>
          </a>
        </div>
        <button onClick={scrollToTop} className="text-sm underline link-accent">
          Back to top
        </button>
      </div>
    </footer>
  );
}
