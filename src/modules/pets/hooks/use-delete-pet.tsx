import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deletePetService } from "../services/pet-service";
import Toast from "react-native-toast-message";
import { query } from "@/libs/query";
import { KeysQuery } from "@/consts/keys-query";

const useDeletePet = (closeBottomSheet: () => void) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const mutatioDeletePet = useMutation({
    mutationFn: (id: string) => deletePetService(id),
  });

  const handleDeleteModal = (value: boolean) => {
    setIsDeleteModalVisible(value);
  };

  const handleDeletePet = (id: string) => {
    mutatioDeletePet.mutate(id, {
      onError: (error) => {
        console.log("error", error.message);
        Toast.show({
          type: "error",
          text1: "Error al eliminar la mascota",
          text2: "No se pudo eliminar la mascota, intenta de nuevo",
        });
      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Mascota eliminada",
          text2: "Mascota eliminada correctamente",
        });

        setIsDeleteModalVisible(false);
        closeBottomSheet();
        query.invalidateQueries({
          queryKey: [KeysQuery.LIST_PET_FETCH],
        });
      },
    });
  };

  return {
    isDeleteModalVisible,
    handleDeleteModal,
    handleDeletePet,
  };
};

export default useDeletePet;
