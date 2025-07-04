import { instance } from "@/libs/axios";


export const savePetService = (pet: PetModelI) => {
  const formData = new FormData();

  Object.entries(pet).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (key === "picture") {
        formData.append("picture", value);
      } else {
        formData.append(key, value);
      }
    }
  });

  return instance.post<SendResponseModelI<PetRequestModelI>>(
    "/pet",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
}