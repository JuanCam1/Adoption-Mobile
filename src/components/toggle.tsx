import useTheme from "@/hooks/use-theme";
import { Switch } from "react-native";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch
      trackColor={{ false: "#767577", true: "#4f46e5" }}
      thumbColor="#f1f5f9"
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={theme === "dark"}
    />
  );
};
export default Toggle;
