export type Response<T> = {
  status: number;
  code: number;
  message: string;
  data: T;
};
