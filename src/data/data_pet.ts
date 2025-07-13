import logoPet from "../assets/images/logo2.png";
import { Image } from "react-native";
const petImage = Image.resolveAssetSource(logoPet).uri;

export const mascotas = [
  { id: 1, nombre: "Pancho", edad: "4 años", picture: petImage },
  { id: 2, nombre: "Luna", edad: "2 años", picture: petImage },
  { id: 3, nombre: "Rocky", edad: "6 años", picture: petImage },
  { id: 4, nombre: "Bella", edad: "3 años", picture: petImage },
];
