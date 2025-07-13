import { useCallback } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFocusEffect } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CirclePlus, Eye, SquarePen, Trash2 } from "lucide-react-native";

import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import BottomSheetComponent from "@/components/bottom-sheet";
import PetCreatePostModal from "@/modules/pets/components/pet-create-post-modal";
import useListPets from "@/modules/pets/hooks/use-list-pets";
import ListPets from "@/modules/pets/sections/list-pets";
import PetDeleteModal from "@/modules/pets/components/pet-delete-modal";
import useTheme from "@/hooks/use-theme";
import useDeletePet from "@/modules/pets/hooks/use-delete-pet";
import PetSwicthState from "@/modules/pets/components/pet-swicth-state";

const PetScreen = () => {
  const { theme } = useTheme();
  const {
    bottomSheetRef,
    router,
    selectedPet,
    closeBottomSheet,
    handleOpenBottomSheet,
    handleSheetChanges,
    isCreateModalVisible,
    handleCreateModal,
    setSelectedPet,
  } = useListPets();

  const { handleDeleteModal, handleDeletePet, isDeleteModalVisible } =
    useDeletePet(closeBottomSheet);

  useFocusEffect(
    useCallback(() => {
      closeBottomSheet();
      setSelectedPet(null);
    }, []),
  );

  console.log("selectedPet", selectedPet);

  return (
    <GestureHandlerRootView className="flex-1 p-4">
      <TextPoppins
        text="Mis Mascotas"
        className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold m-4"
      />

      <ListPets handleOpenBottomSheet={handleOpenBottomSheet} />

      <BottomSheetComponent
        ref={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
      >
        {selectedPet ? (
          <View className="dark:bg-zinc-900 w-full p-6 rounded-2xl ">
            <TextRoboto
              className="text-3xl font-bold mb-4 text-indigo-400 text-center w-full"
              text={`Mascota: ${selectedPet.name}`}
            />

            <View className="flex flex-col gap-6">
              <View className="flex flex-row justify-between w-full items-center">
                <TextRoboto text="Visualizar" className="text-white text-xl" />
                <TouchableOpacity
                  className="bg-indigo-400 p-3 rounded-2xl"
                  onPress={() =>
                    router.push(`/home/(pet)/info/${String(selectedPet.id)}`)
                  }
                >
                  <Eye size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row justify-between w-full items-center">
                <TextRoboto text="Editar" className="text-white text-xl" />
                <TouchableOpacity
                  className="bg-green-500 p-3  rounded-2xl"
                  onPress={() => router.push("/home/(pet)/info/update")}
                >
                  <SquarePen size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row justify-between w-full items-center">
                <TextRoboto text="Crear Post" className="text-white text-xl" />
                <TouchableOpacity
                  className="bg-blue-400 p-3 rounded-2xl"
                  onPress={() => handleCreateModal(true)}
                >
                  <CirclePlus size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row justify-between w-full items-center">
                <TextRoboto text="Estado" className="text-white text-xl" />
                <PetSwicthState
                  id={selectedPet.id}
                  stateId={selectedPet.stateId}
                />
              </View>

              <View className="flex flex-row justify-between w-full items-center">
                <TextRoboto text="Eliminar" className="text-white text-xl" />
                <TouchableOpacity
                  className="bg-red-400 p-3 rounded-2xl"
                  onPress={() => handleDeleteModal(true)}
                >
                  <Trash2 size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <ActivityIndicator
            size="small"
            color={theme === "dark" ? "#818cf8" : "#4f46e5"}
          />
        )}
      </BottomSheetComponent>

      {isCreateModalVisible && (
        <PetCreatePostModal
          visible={isCreateModalVisible}
          onClose={handleCreateModal}
        />
      )}

      {isDeleteModalVisible && selectedPet && (
        <PetDeleteModal
          visible={isDeleteModalVisible}
          onClose={handleDeleteModal}
          handleDeletePet={handleDeletePet}
          id={selectedPet.id}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default PetScreen;
