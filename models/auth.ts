import { LoginUser } from "./user";

export type LoginDta = {
  email: string;
  password: string;
};

export type LoginModel = {
  user: LoginUser;
  accessToken: string;
};
