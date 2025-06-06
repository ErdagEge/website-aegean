import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center font-[family-name:var(--font-body)]">
      <h1 className="text-4xl font-extrabold mb-6">Page not found.</h1>
      <Link href="/" className="btn-gradient mt-4 px-6 py-2">
        Return Home
      </Link>
    </div>
  );
}
