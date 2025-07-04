import { useState } from "react";
import { Image } from "react-native";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import noUser from "../../../assets/images/logo.png";
import { savePetService } from "../services/pet-service";
import { pickImage } from "@/libs/picker";
const noUserImage = Image.resolveAssetSource(noUser).uri;

const usePetForm = () => {
  const [logoImage, setLogoImage] = useState(noUserImage);
  const [logoBlob, setLogoBlob] = useState<PickImageModelI | null>(null);

  const [pet, setPet] = useState({
    name: "",
    description: "",
    location: "",
    typeId: "",
    genderId: "",
    age: "",
    breed: "",
    userId: "",
  });

  const mutationPetCreate = useMutation({
    mutationFn: (data: PetModelI) => savePetService(data),
  });

  type UserKey = keyof typeof pet;
  const handleChange = (name: UserKey, value: string) => {
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const imagePet = async () => {
    const pick = await pickImage();

    if (pick) {
      setLogoImage(pick.logoImage);
      setLogoBlob(pick.file);
    }
  };

  const handleSubmit = () => {
    const values = Object.values(pet);
    if (values.some((value) => value.trim() === "")) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Todos los campos son obligatorios",
      });
      return;
    }

    const nameLength = pet.name.length;
    if (nameLength < 6 && nameLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "El nombre debe tener entre 6 y 50 caracteres",
      });
      return;
    }

    const descLength = pet.description.length;
    if (descLength < 30 && descLength > 500) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "LA descripción debe tener entre 30 y 500 caracteres",
      });
      return;
    }

    const locationLength = pet.location.length;
    if (locationLength < 3 && locationLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "La ubicación debe tener entre 3 y 50 caracteres",
      });
      return;
    }

    if (pet.typeId === "" || pet.typeId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Seleccione el tipo de mascota",
      });
      return;
    }

    if (pet.genderId === "" || pet.genderId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Seleccione el género de la mascota",
      });
      return;
    }

    if (isNaN(Number(pet.age))) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Digite un número válido",
      });
      return;
    }

    const breedLength = pet.breed.length;
    if (breedLength < 6 && breedLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "La raza debe tener entre 6 y 50 caracteres",
      });
      return;
    }

    if (!logoBlob) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "La foto es obligatoria",
      });
      return;
    }

    const dataRegister: PetModelI = {
      ...pet,
      picture: logoBlob,
    };

    mutationPetCreate.mutate(dataRegister, {
      onError: () => {
        Toast.show({
          type: "error",
          text1: "Error al guardar la mascota",
          text2: "Error al guardar la mascota intentelo nuevamente",
        });
      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Mascota guardada",
          text2: "Mascota guardada correctamente",
        });
      },
    });
  };

  return {
    logoImage,
    pet,
    handleChange,
    imagePet,
    handleSubmit,
    isPending: mutationPetCreate.isPending,
    isError: mutationPetCreate.isError,
    isSuccess: mutationPetCreate.isSuccess,
  };
};

export default usePetForm;
