export type LoginDta = {
  email: string;
  password: string;
};

export type LoginModel = {
  id: string;
  name: string | null;
  nickname: string | null;
  email: string;
  githubEmail: string | null;
  facebookEmail: string | null;
  googleEmail: string | null;
  accessToken: string;
};
