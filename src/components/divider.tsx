import { View } from "react-native";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <View
      className={`w-full h-px bg-gray-300 dark:bg-zinc-600 ${className ?? ""}`}
    />
  );
};

export default Divider;
