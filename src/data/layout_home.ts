import { HeartPlus, Home, Settings, User, PawPrint } from "lucide-react-native";

export const ValueDrawerUserItem = [
  {
    label: "Inicio",
    icon: Home,
    route: "post",
  },
  {
    label: "Mascota",
    icon: PawPrint,
    route: "(pet)",
  },
  {
    label: "Favoritos",
    icon: HeartPlus,
    route: "favorite",
  },
];

export const ValueDrawerAdminItem = [
  {
    label: "Perfil",
    icon: User,
    route: "profile",
  },
  {
    label: "Configuración",
    icon: Settings,
    route: "setting",
  },
];
