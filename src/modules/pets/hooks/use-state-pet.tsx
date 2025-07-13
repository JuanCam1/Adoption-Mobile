import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { stateChangePetService } from "../services/pet-service";

const useStatePet = (initialStateId: number, petId: string) => {
  const [stateSwitch, setStateSwitch] = useState(initialStateId === 1);

  const mutation = useMutation({
    mutationFn: () => stateChangePetService(petId),
    onMutate: async () => {
      const previousState = stateSwitch;
      setStateSwitch(!stateSwitch); // Optimistically update
      return { previousState };
    },
    onError: (err, _, context) => {
      console.log("err", err);
      setStateSwitch(context?.previousState ?? stateSwitch);
      Toast.show({
        type: "error",
        text1: "Error al actualizar la mascota",
        text2: "Intenta nuevamente más tarde",
      });
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Mascota actualizada",
        text2: "Se actualizó el estado correctamente",
      });
    },
  });

  const handleToggleState = () => {
    mutation.mutate();
  };

  return {
    handleToggleState,
    stateSwitch,
  };
};

export default useStatePet;
