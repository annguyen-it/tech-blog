import { Author } from "./user";

export type EditPost = {
  coverImage: File | null;
  title: string;
  body: string;
  tags: string[];
};

export type Post = {
  id: number;
  coverImage: string;
  title: string;
  body: string;
  author: Author;
  createdAt: Date;
  tags: string[];
  likes: number;
  comments: number;
  timeToRead: number;
};
