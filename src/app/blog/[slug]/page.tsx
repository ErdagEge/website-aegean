import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return createMetadata({
    title: `${post.title} | Ege's Personal Site`,
    description: post.excerpt,
    path: `blog/${post.slug}`,
    type: "article",
    date: post.date,
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPost({ params }: any) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post!.title}</h1>
      <ReactMarkdown
        className="text-gray-700"
        components={{
          h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
          h2: (props) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
          h3: (props) => <h3 className="text-xl font-semibold mb-2" {...props} />,
          p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          li: (props) => <li className="mb-2" {...props} />,
          pre: (props) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded mb-4 overflow-x-auto" {...props} />
          ),
          code: (props) => (
            <code className="bg-gray-100 text-pink-600 p-1 rounded" {...props} />
          ),
        }}
      >
        {post!.content}
      </ReactMarkdown>
    </div>
  );
}
