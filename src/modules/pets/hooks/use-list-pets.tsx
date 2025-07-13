import { useCallback, useRef, useState } from "react";
import { useRouter } from "expo-router";
import type BottomSheet from "@gorhom/bottom-sheet";
import { usePetContext } from "../contexts/pet-update-context";

const useListPets = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const { selectedPet, setSelectedPet } = usePetContext();

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

  const handleCreateModal = (value: boolean) => {
    setIsCreateModalVisible(value);
  };

  return {
    bottomSheetRef,
    router,
    selectedPet,
    closeBottomSheet,
    handleOpenBottomSheet,
    handleSheetChanges,
    isCreateModalVisible,
    handleCreateModal,
    setSelectedPet,
  };
};

export default useListPets;
