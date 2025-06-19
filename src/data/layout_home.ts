import { HeartPlus, Home, Settings, User } from "lucide-react-native";

export const ValueDrawerUserItem = [
  {
    label: "Inicio",
    icon: Home,
    route: "index",
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