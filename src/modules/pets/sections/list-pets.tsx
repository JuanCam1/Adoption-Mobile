import type { FC } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { AlertTriangle } from "lucide-react-native";

import useListFetchPet from "../hooks/use-list-fetch-pet";
import PetCardList from "../components/pet-card-list";
import PetListSkeleton from "../components/pet-list-skeleton";
import ErrorState from "@/components/error-state";
import useTheme from "@/hooks/use-theme";

interface Props {
  handleOpenBottomSheet: (pet: PetListModelI) => void;
}
const ListPets: FC<Props> = ({ handleOpenBottomSheet }) => {
  const { theme } = useTheme();
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    status,
    refetch,
  } = useListFetchPet();

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View className="flex flex-1">
      {status === "pending" ? (
        <PetListSkeleton />
      ) : status === "error" ? (
        <ErrorState
          customIcon={<AlertTriangle />}
          title="No se pudieron cargar las mascotas"
          message="Ocurrió un error al obtener las mascotas. Por favor, reintenta."
          onRetry={() => refetch()}
        />
      ) : (
        <FlatList
          data={data.pages.flatMap((page) => page.data.data.pets)}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          numColumns={2}
          columnWrapperClassName="justify-between px-2 py-3"
          renderItem={({ item }) => (
            <PetCardList
              pet={item}
              handleOpenBottomSheet={handleOpenBottomSheet}
            />
          )}
          ListFooterComponent={
            isFetchingNextPage && hasNextPage ? (
              <View className="flex-1 flex justify-center items-center mt-6">
                <ActivityIndicator
                  size="small"
                  color={theme === "dark" ? "white" : "black"}
                />
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};

export default ListPets;
