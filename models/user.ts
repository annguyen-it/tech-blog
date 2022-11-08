export type Author = {
  url: string;
  name: string;
  intro: string;
  work: string;
  joined: Date;
  image: string;
};

export type LoginUser = {
  id: string;
  image: string;
  name: string | null;
  nickname: string;
  email: string;
  birth: Date | null;
  gender: boolean | null;
  bio: string | null;
  work: string | null;
  education: string | null;
  codingSkills: string | null;
  role: number;
  followerCount: number;
  followingCount: number;
  trendingPoint: number;
  githubEmail: string | null;
  facebookEmail: string | null;
  googleEmail: string | null;
};
