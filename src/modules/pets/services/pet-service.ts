import { instance } from "@/libs/axios";

export const savePetService = async (pet: PetModelI) => {
  const formData = new FormData();

  Object.entries(pet).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (key === "picture") {
        formData.append("picture", {
          uri: value.uri,
          name: value.name,
          type: value.type,
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        } as any);
      } else {
        formData.append(key, value);
      }
    }
  });

  return await instance.post<SendResponseModelI<PetModelI>>(
    "/pet",
    formData,
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

export const updatePetService = async (pet: PetModelI, id: string) => {
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
  return await instance.post<SendResponseModelI<PetModelI>>(`/pet/${id}`, formData, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};


export const listPetsByIdService = async ({ pageParam = 1 }) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL_DEV}/pet/e5ad63e0-d94d-4c84-8fd2-24e31c29c12a?page=${pageParam}`;
  console.log("url", url)
  const id = "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a";
  return await instance.get<SendResponseModelI<ListPetByUserModelI>>(
    `/pet/${id}?page=${pageParam}`,
  );
};

export const getByIdPetService = async (id: string) => {
  return await instance.get<SendResponseModelI<PetListModelI>>(
    `/pet/by-id/${id}`,
  );
};

export const stateChangePetService = async (id: string) => {
  return await instance.get<SendResponseModelI<PetListModelI>>(
    `/pet/state/${id}`,
  );
};

export const deletePetService = async (id: string) => {
  return await instance.delete<SendResponseModelI<PetListModelI>>(`/pet/${id}`);
};


// https://t4xr926q-8080.use2.devtunnels.ms/api/v1/pet/e5ad63e0-d94d-4c84-8fd2-24e31c29c12a?page=1