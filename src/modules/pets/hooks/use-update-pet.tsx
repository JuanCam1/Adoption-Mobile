import { useMutation } from "@tanstack/react-query";
import { savePetService } from "../services/pet-service";
import { useEffect, useState } from "react";
import { getGenderService } from "../services/gender-service";
import { getTypePetService } from "../services/type-pet-service";
import { pickImage } from "@/libs/picker";
import Toast from "react-native-toast-message";
import { messageError } from "../consts/message-pet";

const useUpdatePet = (pet: PetListModelI) => {
  const [logoFile, setLogoFile] = useState<PickImageModelI | null>(null);
  const [genders, setGenders] = useState<GenderModelI[]>([]);
  const [types, setTypes] = useState<TypePetModelI[]>([]);
  const [petUpdate, setPetUpdate] = useState({
    id: pet.id,
    name: pet.name,
    genderId: String(pet.genderId),
    description: pet.description,
    typeId: String(pet.typeId),
    age: pet.age,
    breed: pet.breed,
    location: pet.location,
    picture: `${process.env.EXPO_PUBLIC_STATIC_DEV}/pet/${pet.pathPicture}`,
    userId: "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a",
  });

  const mutatioUpdatePet = useMutation({
    mutationFn: (data: PetModelI) => savePetService(data, "update"),
  });

  useEffect(() => {
    const fetchDataInitial = async () => {
      try {
        const [genders, types] = await Promise.all([
          getGenderService(),
          getTypePetService(),
        ]);

        setGenders(genders.data.data);
        setTypes(types.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataInitial();
  }, []);

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
        picture: pick.logoImage,
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

    const dataPet: PetModelI = {
      ...petUpdate,
      picture: logoFile,
    };

    console.log("dataPet", dataPet);

    mutatioUpdatePet.mutate(dataPet, {
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
    petUpdate,
    handleChange,
    imagePet,
    handleSubmit,
    isPending: mutatioUpdatePet.isPending,
    isError: mutatioUpdatePet.isError,
    isSuccess: mutatioUpdatePet.isSuccess,
    genders,
    types,
  };
};

export default useUpdatePet;
