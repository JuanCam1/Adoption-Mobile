import TextPoppins from "@/components/text-poppins";
import { useCallback, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CirclePlus, Eye, SquarePen, Trash2 } from "lucide-react-native";
import type BottomSheet from "@gorhom/bottom-sheet";

import TextRoboto from "@/components/text-roboto";
import BottomSheetComponent from "@/components/bottom-sheet";
import { mascotas } from "@/data/data_pet";
import PetCreatePostModal from "@/modules/pets/components/pet-create-post-modal";
import PetEditModal from "@/modules/pets/components/pet-edit-modal";

const PetScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const [selectedPet, setSelectedPet] = useState<null | (typeof mascotas)[0]>(
    null,
  );

  useFocusEffect(
    useCallback(() => {
      closeBottomSheet();
      setSelectedPet(null);
    }, []),
  );

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleOpenBottomSheet = (pet: (typeof mascotas)[0]) => {
    setSelectedPet(pet);
    bottomSheetRef.current?.expand();
  };

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setSelectedPet(null);
  }, []);

  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalVisible(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  return (
    <GestureHandlerRootView className="flex-1 p-4">
      <TextPoppins
        text="Mis Mascotas"
        className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
      />

      <ScrollView>
        <View className="flex flex-row flex-wrap justify-center gap-4 py-2">
          {mascotas.map((pet, index) => (
            <Pressable
              key={index}
              onPress={() => handleOpenBottomSheet(pet)}
              className="w-[45%] dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900"
            >
              <Image
                source={{ uri: pet.picture }}
                className="rounded-xl bg-zinc-200 dark:bg-zinc-700 w-full h-40"
                resizeMode="cover"
              />
              <View className="mt-4 space-y-2">
                <View className="flex flex-row justify-between items-center">
                  <TextPoppins
                    text="Nombre"
                    className="text-sm text-zinc-600 dark:text-indigo-400"
                  />
                  <TextRoboto
                    text={pet.nombre}
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  />
                </View>
                <View className="flex flex-row justify-between items-center">
                  <TextPoppins
                    text="Edad"
                    className="text-sm text-zinc-600 dark:text-indigo-400"
                  />
                  <TextRoboto
                    text={pet.edad}
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {selectedPet && (
        <BottomSheetComponent
          ref={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
        >
          {selectedPet ? (
            <>
              <TextRoboto
                className="text-3xl font-bold mb-4 text-indigo-400 text-center w-full"
                text={`Mascota: ${selectedPet.nombre}`}
              />

              <View className="flex flex-col gap-6">
                <View className="flex flex-row justify-between w-full items-center">
                  <TextRoboto
                    text="Visualizar"
                    className="text-white text-xl"
                  />
                  <TouchableOpacity
                    onPress={() =>
                      router.push(`/home/(pet)/info/${String(selectedPet.id)}`)
                    }
                    className="bg-indigo-400 p-3 rounded-2xl"
                  >
                    <Eye size={20} color="white" />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row justify-between w-full items-center">
                  <TextRoboto text="Editar" className="text-white text-xl" />
                  <TouchableOpacity
                    className="bg-green-500 p-3  rounded-2xl"
                    onPress={handleEditModal}
                  >
                    <SquarePen size={20} color="white" />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row justify-between w-full items-center">
                  <TextRoboto
                    text="Crear Post"
                    className="text-white text-xl"
                  />
                  <TouchableOpacity
                    className="bg-blue-400 p-3 rounded-2xl"
                    onPress={handleCreateModal}
                  >
                    <CirclePlus size={20} color="white" />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row justify-between w-full items-center">
                  <TextRoboto text="Eliminar" className="text-white text-xl" />
                  <TouchableOpacity className="bg-red-400 p-3 rounded-2xl">
                    <Trash2 size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <Text>Cargando...</Text>
          )}
        </BottomSheetComponent>
      )}

      {isCreateModalVisible && (
        <PetCreatePostModal
          visible={isCreateModalVisible}
          onClose={handleCloseCreateModal}
        />
      )}

      {isEditModalVisible && selectedPet && (
        <PetEditModal
          pet={selectedPet}
          visible={isEditModalVisible}
          onClose={handleCloseEditModal}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default PetScreen;
