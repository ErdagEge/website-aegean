import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center font-[family-name:var(--font-body)]">
      <h1 className="text-4xl font-extrabold mb-6">Page not found.</h1>
      <Link
        href="/"
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
}
