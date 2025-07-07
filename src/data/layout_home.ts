import { HeartPlus, Home, Settings, User, PawPrint } from "lucide-react-native";

export const ValueDrawerUserItem = [
  {
    label: "Inicio",
    icon: Home,
    route: "/home/post",
    match: "/home/post",
  },
  {
    label: "Mascota",
    icon: PawPrint,
    route: "/home/(pet)/info",
    match: "/home/info",
  },
  {
    label: "Favoritos",
    icon: HeartPlus,
    route: "/home/favorite",
    match: "/home/favorite",
  },
];

export const ValueDrawerAdminItem = [
  {
    label: "Perfil",
    icon: User,
    route: "/home/profile",
    match: "/home/profile",
  },
  {
    label: "Configuración",
    icon: Settings,
    route: "/home/setting",
    match: "/home/setting",
  },
];
