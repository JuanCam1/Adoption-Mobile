import { instance } from "@/libs/axios";

export const getPosts = async () => {
  return await instance.get("/pet");
};
