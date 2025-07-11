import { KeysQuery } from "@/consts/keys-query";
import { useQuery } from "@tanstack/react-query";
import { getByIdPetService } from "../services/pet-service";

const useByIdFetchPet = (id: string) => {
  const { data, isPending, isSuccess, isError, refetch } = useQuery({
    queryKey: [KeysQuery.GET_PET_BY_ID],
    queryFn: () => getByIdPetService(id),
  });

  return {
    data,
    isPending,
    isSuccess,
    isError,
    refetch,
  };
};

export default useByIdFetchPet;
