import { useCallback, type FC } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { AlertTriangle } from "lucide-react-native";
import { router, useFocusEffect } from "expo-router";

import useListFetchPet from "../hooks/use-list-fetch-pet";
import PetCardList from "../components/pet-card-list";
import PetListSkeleton from "../components/pet-list-skeleton";
import MessageState from "@/components/message-state";
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

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (status === "pending") {
    return <PetListSkeleton />;
  }

  if (status === "error") {
    return (
      <MessageState
        title="No se pudieron cargar las mascotas"
        message="Ocurrió un error al obtener las mascotas. Por favor, reintenta."
        onRetry={() => refetch()}
        customIcon={
          <AlertTriangle
            color={theme === "dark" ? "#818cf8" : "#4f46e5"}
            size={24}
          />
        }
      />
    );
  }

  const pets = data.pages.flatMap((page) => page.data.data.pets);
  return (
    <View className="flex flex-1">
      {pets.length > 0 ? (
        <FlatList
          data={pets}
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
                  color={theme === "dark" ? "#818cf8" : "#4f46e5"}
                />
              </View>
            ) : null
          }
        />
      ) : (
        <MessageState
          title="No hay mascotas registradas"
          message="Para visualizar, agrega una nueva mascota."
          onRetry={() => router.replace("/home/(pet)/create-pet")}
          retryText="Agregar mascota"
          customIcon={
            <AlertTriangle
              color={theme === "dark" ? "#818cf8" : "#4f46e5"}
              size={24}
            />
          }
        />
      )}
    </View>
  );
};

export default ListPets;
