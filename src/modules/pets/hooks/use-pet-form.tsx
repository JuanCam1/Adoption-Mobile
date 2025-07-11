import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import noUser from "../../../assets/images/logo.png";
import { savePetService } from "../services/pet-service";
import { pickImage } from "@/libs/picker";
import { getGenderService } from "../services/gender-service";
import { getTypePetService } from "../services/type-pet-service";
import { messageError } from "../consts/message-pet";
const noUserImage = Image.resolveAssetSource(noUser).uri;

const usePetForm = () => {
  const [logoImage, setLogoImage] = useState(noUserImage);
  const [logoFile, setLogoFile] = useState<PickImageModelI | null>(null);
  const [genders, setGenders] = useState<GenderModelI[]>([]);
  const [types, setTypes] = useState<TypePetModelI[]>([]);

  const [pet, setPet] = useState<Omit<PetModelI, "picture">>({
    name: "Pancho",
    description: "gato amigable, jugueton y pequeño, perezoso y simpático",
    location: "Girón",
    typeId: "",
    genderId: "",
    age: "4 años",
    breed: "Criollo",
    userId: "e5ad63e0-d94d-4c84-8fd2-24e31c29c12a",
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

  const mutationPetCreate = useMutation({
    mutationFn: (data: PetModelI) => savePetService(data, "create"),
  });

  type UserKey = keyof typeof pet;
  const handleChange = (name: UserKey, value: string) => {
    setPet({
      ...pet,
      [name]: String(value),
    });
  };

  const imagePet = async () => {
    const pick = await pickImage();

    if (pick) {
      setLogoImage(pick.logoImage);
      setLogoFile(pick.file);
    }
  };

  const handleSubmit = () => {
    const values = Object.values(pet);

    if (values.some((value) => value.trim() === "")) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.todos.text,
      });
      return;
    }

    const nameLength = pet.name.length;
    if (nameLength < 6 && nameLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.name.text,
      });
      return;
    }

    const descLength = pet.description.length;
    if (descLength < 30 && descLength > 500) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.description.text,
      });
      return;
    }

    const locationLength = pet.location.length;
    if (locationLength < 3 && locationLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.location.text,
      });
      return;
    }

    if (pet.typeId === "" || pet.typeId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.type.text,
      });
      return;
    }

    if (pet.genderId === "" || pet.genderId === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.gender.text,
      });
      return;
    }

    if (pet.age === "" || pet.age === "0") {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: messageError.age.text,
      });
      return;
    }

    const breedLength = pet.breed.length;
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
      ...pet,
      picture: logoFile,
    };

    console.log("dataPet", dataPet);

    mutationPetCreate.mutate(dataPet, {
      onError: (error) => {
        console.log("error", error.message);
        Toast.show({
          type: "error",
          text1: messageError.onError.text,
          text2: messageError.onError.text2,
        });
      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: messageError.onSuccess.text,
          text2: messageError.onSuccess.text2,
        });
        resetValues();
      },
    });
  };

  const resetValues = () => {
    setPet({
      name: "",
      description: "",
      location: "",
      typeId: null,
      genderId: null,
      age: "",
      breed: "",
      userId: "914be76e-0dc8-491d-81d7-6224384ff948",
    });
    // setPet({
    //   name: "Pancho",
    //   description: "gato amigable, jugueton y pequeño, perezoso y simpático",
    //   location: "Girón",
    //   typeId: "",
    //   genderId: "",
    //   age: "4 años",
    //   breed: "Criollo",
    //   userId: "914be76e-0dc8-491d-81d7-6224384ff948",
    // });
    setLogoImage(noUserImage);
    setLogoFile(null);
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
    genders,
    types,
    resetValues,
  };
};

export default usePetForm;
