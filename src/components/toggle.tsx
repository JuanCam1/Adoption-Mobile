import useTheme from "@/hooks/use-theme";
import { Switch, View } from "react-native";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <View className="dark:bg-zinc-800 p-2 rounded-md">
      <Switch
        trackColor={{ false: "#767577", true: "#4f46e5" }}
        thumbColor="#f1f5f9"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={theme === "dark"}
      />
    </View>
  );
};
export default Toggle;
