import Link from "next/link";
import { blogPosts } from "./posts";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog | Ege's Personal Site",
  description: "Articles and tutorials written by Ege.",
  path: "blog",
});

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 font-[family-name:var(--font-body)]">
      <h1 className="text-4xl font-extrabold mb-10">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="link-accent">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="link-accent">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
