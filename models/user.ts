export type SimpleUser = {
  name: string | null;
  nickname: string | null;
  bio: string | null;
  work: string | null;
  createdAt: Date;
  image: string | null;
};

export type User = SimpleUser & {
  role: number;
  followerCount: number;
  followingCount: number;
  trendingPoint: number;
}
