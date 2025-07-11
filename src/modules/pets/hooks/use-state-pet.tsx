import { useMutation } from "@tanstack/react-query";
import { stateChangePetService } from "../services/pet-service";
import Toast from "react-native-toast-message";

const useStatePet = (id: string) => {
  const mutationStatePet = useMutation({
    mutationFn: (id: string) => stateChangePetService(id),
  });

  const handleSubmit = () => {
    mutationStatePet.mutate(id, {
      onError: (error) => {
        console.log("error", error.message);
        Toast.show({
          type: "error",
          text1: "Error al actualizar la mascota",
          text2: "Error al actualizar la mascota intentelo nuevamente",
        });
      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Mascota actualizada",
          text2: "Mascota actualizada correctamente",
        });
      },
    });
  };

  return {
    handleSubmit,
    isPending: mutationStatePet.isPending,
    isError: mutationStatePet.isError,
    isSuccess: mutationStatePet.isSuccess,
  };
};
export default useStatePet;
