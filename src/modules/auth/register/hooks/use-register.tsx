import { useState } from "react";
import { Image } from "react-native";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import noUser from "../../../../assets/images/no-user.jpg";
import { registerUserService } from "../services/register-service";
import { pickImage } from "@/libs/picker";
const noUserImage = Image.resolveAssetSource(noUser).uri;

const useRegister = () => {
  const [logoFile, setLogoFile] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [dataUser, setDataUser] = useState<UserModelI | null>(null);

  const onCloseActive = () => {
    setIsActive(false);
  };

  const [user, setUser] = useState({
    name: "diego cadena",
    phone: "3208429243",
    location: "piedecuesta",
    address: "carrear 8 #12-54",
    email: "diego@gmail.com",
    password: "Diego12.",
    picture: noUserImage,
  });

  const mutationRegister = useMutation({
    mutationFn: (data: RegisterModelI) => registerUserService(data),
  });

  type UserKey = keyof typeof user;
  const handleChange = (name: UserKey, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const imageRegister = async () => {
    const pick = await pickImage();

    if (pick) {
      setUser({
        ...user,
        picture: pick.logoImage,
      });
      setLogoFile(pick.base64);
    }
  };

  const handleSubmit = () => {
    const values = Object.values(user);

    if (values.some((value) => value.trim() === "")) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Todos los campos son obligatorios",
      });
      return;
    }

    const nameLength = user.name.length;
    if (nameLength < 6 && nameLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "El nombre debe tener entre 6 y 50 caracteres",
      });
      return;
    }

    const phoneLength = user.phone.length;
    if (phoneLength < 6 && phoneLength > 20) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "El teléfono debe tener entre 6 y 20 caracteres",
      });
      return;
    }

    if (isNaN(Number(user.phone))) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "El teléfono debe ser un número valido",
      });
      return;
    }

    const locationLength = user.location.length;
    if (locationLength < 3 && locationLength > 50) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "EL lugar debe tener entre 3 y 50 caracteres",
      });
      return;
    }

    const addressLength = user.address.length;
    if (addressLength < 6 && addressLength > 80) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "La dirección debe tener entre 6 y 80 caracteres",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "Correo electronico no valido",
      });
      return;
    }

    if (
      user.password.length < 6 ||
      !/[A-Z]/.test(user.password) ||
      !/[0-9]/.test(user.password)
    ) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2:
          "La contraseña debe tener al menos 6 caracteres, una mayúscula, un número",
      });
      return;
    }

    if (!logoFile) {
      Toast.show({
        type: "error",
        text1: "Error de validación",
        text2: "La foto es obligatoria",
      });
      return;
    }

    const dataRegister: RegisterModelI = {
      ...user,
      picture: logoFile,
    };

    console.log(" register", dataRegister);

    mutationRegister.mutate(dataRegister, {
      onError: () => {
        Toast.show({
          type: "error",
          text1: "Error al registrarse",
          text2: "Error al crear una cuenta intentelo nuevamente",
        });
      },
      onSuccess: (value) => {
        setIsActive(true);
        setDataUser(value.data.data);
        Toast.show({
          type: "success",
          text1: "Usuario creado",
          text2: "Usuario creado correctamente",
        });
      },
    });
  };

  return {
    user,
    handleChange,
    handleSubmit,
    imageRegister,
    isPending: mutationRegister.isPending,
    isError: mutationRegister.isError,
    isSuccess: mutationRegister.isSuccess,
    isActive,
    onCloseActive,
    dataUser,
  };
};

export default useRegister;
