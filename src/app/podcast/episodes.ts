export type Episode = {
  id: number;
  title: string;
  description: string;
};

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Episode 1: Getting Started",
    description: "An introduction to the podcast and what to expect in future episodes.",
  },
  {
    id: 2,
    title: "Episode 2: Deep Dive",
    description: "We discuss a fascinating topic in depth and share insights.",
  },
  {
    id: 3,
    title: "Episode 3: Special Guest",
    description: "An interview with an expert who brings a new perspective.",
  },
];
