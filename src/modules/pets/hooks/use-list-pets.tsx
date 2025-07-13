import { useCallback, useRef, useState } from "react";
import { useRouter } from "expo-router";
import type BottomSheet from "@gorhom/bottom-sheet";

const useListPets = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const [selectedPet, setSelectedPet] = useState<null | PetListModelI>(null);

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleOpenBottomSheet = (pet: PetListModelI) => {
    setSelectedPet(pet);
    bottomSheetRef.current?.expand();
  };

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setSelectedPet(null);
  }, []);

  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleCreateModal = (value: boolean) => {
    setIsCreateModalVisible(value);
  };

  const handleEditModal = (value: boolean) => {
    setIsEditModalVisible(value);
  };

  return {
    bottomSheetRef,
    router,
    selectedPet,
    closeBottomSheet,
    handleOpenBottomSheet,
    handleSheetChanges,
    isCreateModalVisible,
    isEditModalVisible,
    handleCreateModal,
    handleEditModal,
    setSelectedPet,
  };
};

export default useListPets;
