import logoUser from "../assets/images/no-user.jpg";
import logoPet from "../assets/images/logo.jpg";
import { Image } from "react-native";

export const dataStories = [
  {
    id: 1,
    user_name: "Diego Fernando",
    user_ubication: "Girón",
    date: new Date(),
    pet_name: "Pancho",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
  {
    id: 2,
    user_name: "Laura Martínez",
    user_ubication: "Bucaramanga",
    date: new Date(),
    pet_name: "Luna",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
  {
    id: 3,
    user_name: "Carlos Andrés",
    user_ubication: "Floridablanca",
    date: new Date(),
    pet_name: "Rocky",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
  {
    id: 4,
    user_name: "María Camila",
    user_ubication: "Piedecuesta",
    date: new Date(),
    pet_name: "Maya",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
  {
    id: 5,
    user_name: "Andrés Felipe",
    user_ubication: "Barrancabermeja",
    date: new Date(),
    pet_name: "Toby",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
  {
    id: 6,
    user_name: "Sofía Ramírez",
    user_ubication: "Cúcuta",
    date: new Date(),
    pet_name: "Nina",
    user_image: Image.resolveAssetSource(logoUser).uri,
    pet_image: Image.resolveAssetSource(logoPet).uri,
  },
]