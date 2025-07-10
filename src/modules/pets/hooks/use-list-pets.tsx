import type BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";

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
    handleCloseCreateModal,
    handleCloseEditModal,
    setSelectedPet,
  };
};

export default useListPets;
