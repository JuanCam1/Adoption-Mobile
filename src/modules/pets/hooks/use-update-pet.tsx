import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import { savePetService } from "../services/pet-service";
import { pickImage } from "@/libs/picker";
import { messageError } from "../consts/message-pet";
import { usePetContext } from "../contexts/pet-update-context";
import { useRouter } from "expo-router";
import { KeysQuery } from "@/consts/keys-query";
import { query } from "@/libs/query";

const useUpdatePet = () => {
  const { selectedPet } = usePetContext();
  const router = useRouter();

  const [logoFile, setLogoFile] = useState<PickImageModelI>({
    name: "progile-pet.jpg",
    uri: selectedPet.pathPicture,
    type: "image/jpeg",
  });
  const [petUpdate, setPetUpdate] = useState({
    id: selectedPet?.id,
    name: selectedPet?.name,
    genderId: String(selectedPet?.genderId),
    description: selectedPet?.description,
    typeId: String(selectedPet?.typeId),
    age: selectedPet?.age,
    breed: selectedPet?.breed,
    location: selectedPet?.location,
    pictureUrl: `${process.env.EXPO_PUBLIC_STATIC_DEV}/pet/${selectedPet.pathPicture}`,
    userId: "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a",
  });

  const mutatioUpdatePet = useMutation({
    mutationFn: (data: PetModelI) => savePetService(data, "update"),
  });

  type petKey = keyof typeof petUpdate;
  const handleChange = (name: petKey, value: string) => {
    setPetUpdate({
      ...petUpdate,
      [name]: String(value),
    });
  };

  const imagePet = async () => {
    const pick = await pickImage();

    if (pick) {
      setPetUpdate({
        ...petUpdate,
        pictureUrl: pick.logoImage,
      });
      setLogoFile(pick.file);
    }
  };

  const handleSubmit = () => {
    const values = Object.values(petUpdate);

    if (values.some((value) => value.trim() === "")) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.todos.text,
      });
      return;
    }

    const nameLength = petUpdate.name.length;
    if (nameLength < 6 && nameLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.name.text,
      });
      return;
    }

    const descLength = petUpdate.description.length;
    if (descLength < 30 && descLength > 500) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.description.text,
      });
      return;
    }

    const locationLength = petUpdate.location.length;
    if (locationLength < 3 && locationLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.location.text,
      });
      return;
    }

    if (petUpdate.typeId === "" || petUpdate.typeId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.type.text,
      });
      return;
    }

    if (petUpdate.genderId === "" || petUpdate.genderId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.gender.text,
      });
      return;
    }

    if (petUpdate.age === "" || petUpdate.age === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.age.text,
      });
      return;
    }

    const breedLength = petUpdate.breed.length;
    if (breedLength < 6 && breedLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.breed.text,
      });
      return;
    }

    if (!logoFile) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.picture.text,
      });
      return;
    }

    const { pictureUrl, ...petUpdateData } = petUpdate;

    const dataPet: PetModelI = {
      ...petUpdateData,
      picture: logoFile,
    };

    console.log("dataPet", dataPet);

    mutatioUpdatePet.mutate(dataPet, {
      onError: (error) => {
        console.log("error", error);
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
        router.replace("/home/(pet)/info");
        query.invalidateQueries({
          queryKey: [KeysQuery.LIST_PET_FETCH],
        });
      },
    });
  };
  return {
    petUpdate,
    handleChange,
    imagePet,
    handleSubmit,
    isPending: mutatioUpdatePet.isPending,
    isError: mutatioUpdatePet.isError,
    isSuccess: mutatioUpdatePet.isSuccess,
  };
};

export default useUpdatePet;
