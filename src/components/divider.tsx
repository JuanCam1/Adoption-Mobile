import { cn } from "@/libs/merge";
import { View } from "react-native";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <View
      className={cn("w-full h-px bg-gray-300 dark:bg-zinc-600", className)}
    />
  );
};

export default Divider;
