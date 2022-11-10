import { User } from "./user";

export type EditPost = {
  coverImage: File | null;
  title: string;
  content: string;
  tags: string[];
};

export type Post = {
  id: number;
  coverImage: string;
  title: string;
  content: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  viewCount: number;
  likeCount: number;
  shareCount: number;
  timeToRead: number;
  userInteraction: boolean | null;
};
