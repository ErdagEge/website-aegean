export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "introducing-my-blog",
    title: "Introducing My Blog",
    excerpt: "Welcome to my blog where I share ideas and projects.",
    content: `# Introducing My Blog

Welcome to **my blog**. This is a short post written in Markdown.

## Why a blog?

- Share ideas
- Document projects
- Learn in public
`,
  },
  {
    id: 2,
    slug: "another-post",
    title: "Another Post",
    excerpt: "More thoughts written in markdown format.",
    content: `# Another Post

Here is some more _markdown_ content for a second post.

## Features

1. Dynamic routes
2. Markdown support
`,
  },
  {
    id: 3,
    slug: "yet-another-post",
    title: "Yet Another Post",
    excerpt: "Showing code blocks and more.",
    content: `# Yet Another Post

This post shows more sample content.

### Code Example

\`\`\`ts
console.log('Hello, world!');
\`\`\`
`,
  },
];
