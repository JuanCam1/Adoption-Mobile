import { instance } from "@/libs/axios";

export const getTypePetService = async () => {
  return await instance.get<SendResponseModelI<TypePetModelI[]>>("/pet/type");
};
