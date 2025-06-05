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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet varius cursus, nunc nisi luctus nisi, euismod aliquam nisl nunc eu massa.",
  },
  {
    id: 2,
    slug: "another-post",
    title: "Another Post",
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    slug: "yet-another-post",
    title: "Yet Another Post",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
