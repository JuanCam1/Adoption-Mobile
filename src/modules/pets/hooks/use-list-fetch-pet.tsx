import { KeysQuery } from "@/consts/keys-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { listPetsByIdService } from "../services/pet-service";

const useListFetchPet = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: [KeysQuery.LIST_PET_FETCH],
    queryFn: listPetsByIdService,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data?.data?.currentPage;
      const totalPages = lastPage?.data?.data?.totalPages;

      if (currentPage && totalPages && currentPage < totalPages) {
        return currentPage + 1;
      }

      return undefined;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  };
};

export default useListFetchPet;
