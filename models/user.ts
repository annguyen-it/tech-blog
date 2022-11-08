export type SimpleUser = {
  name: string | null;
  nickname: string | null;
  bio: string | null;
  work: string | null;
  joined: Date; // TODO
  image: string | null;
};

export type User = SimpleUser & {
  role: number;
  followerCount: number;
  followingCount: number;
  trendingPoint: number;
}
