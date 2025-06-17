import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import useTheme from "@/hooks/use-theme";

const BackButton = () => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <TouchableOpacity
      className="dark:bg-zinc-800 p-2 rounded-md"
      onPress={() => router.back()}
    >
      <ArrowLeft size={24} color={theme === "dark" ? "gray" : "#767577"} />
    </TouchableOpacity>
  );
};
export default BackButton;
