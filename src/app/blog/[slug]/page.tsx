import { notFound } from "next/navigation";
import { blogPosts } from "../posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post!.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post!.content}</p>
    </div>
  );
}
