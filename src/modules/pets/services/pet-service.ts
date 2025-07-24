import { instance } from "@/libs/axios";

export const savePetService = async (pet: PetModelI) => {
  return await instance.post<SendResponseModelI<PetModelI>>("/pet", pet);
};

export const updatePetService = async (pet: PetModelI, id: string) => {
  return await instance.post<SendResponseModelI<PetModelI>>(`/pet/${id}`, pet);
};

export const listPetsByIdService = async ({ pageParam = 1 }) => {
  const id = "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a";
  return await instance.get<SendResponseModelI<ListPetByUserModelI>>(
    `/pet/${id}?page=${pageParam}`
  );
};

export const getByIdPetService = async (id: string) => {
  return await instance.get<SendResponseModelI<PetListModelI>>(
    `/pet/by-id/${id}`
  );
};

export const stateChangePetService = async (id: string) => {
  return await instance.get<SendResponseModelI<PetListModelI>>(
    `/pet/state/${id}`
  );
};

export const deletePetService = async (id: string) => {
  return await instance.delete<SendResponseModelI<PetListModelI>>(`/pet/${id}`);
};

// https://t4xr926q-8080.use2.devtunnels.ms/api/v1/pet/e5ad63e0-d94d-4c84-8fd2-24e31c29c12a?page=1
