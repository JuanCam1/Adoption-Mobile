import { instance } from "@/libs/axios";

export const getGenderService = async () => {
  return await instance.get<SendResponseModelI<GenderModelI[]>>("/pet/gender");
};
