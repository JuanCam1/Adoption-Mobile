import { instance } from "@/libs/axios";


export const savePetService = async (pet: PetModelI) => {
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

  return instance.post<SendResponseModelI<PetRequestModelI>>("/pet", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const listPetsByIdService = async ({ pageParam = 1 }) => {
  const id = "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a";
  return instance.get<SendResponseModelI<ListPetByUserModelI>>(`/pet/${id}?page=${pageParam}`);
};