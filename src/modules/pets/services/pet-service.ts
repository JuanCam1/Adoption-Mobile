import { instance } from "@/libs/axios";
type request = "create" | "update";

export const savePetService = async (pet: PetModelI, type: request) => {
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

  if (type === "create") {
    return await instance.post<SendResponseModelI<PetModelI>>("/pet", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } else {
    return await instance.put<SendResponseModelI<PetModelI>>("/pet", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }


};

export const listPetsByIdService = async ({ pageParam = 1 }) => {
  const id = "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a";
  return await instance.get<SendResponseModelI<ListPetByUserModelI>>(`/pet/${id}?page=${pageParam}`);
};

export const getByIdPetService = async (id: string) => {
  return await instance.get<SendResponseModelI<PetListModelI>>(`/pet/by-id/${id}`);
};

export const stateChangePetService = async (id: string) => {
  return await instance.post<SendResponseModelI<PetListModelI>>(`/pet/state/${id}`);
}

export const deletePetService = async (id: string) => {
  return await instance.delete<SendResponseModelI<PetListModelI>>(`/pet/${id}`);
}