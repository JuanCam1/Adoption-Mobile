import type { ComponentProps, FC, ReactNode } from "react";
import { TextInput, View } from "react-native";
import type { LucideIcon } from "lucide-react-native";
import useTheme from "@/hooks/use-theme";
import { cn } from "@/libs/merge";

interface Props extends ComponentProps<typeof TextInput> {
  value: string;
  onChangeText: (value: string) => void;
  classNameInput?: ReactNode;
  classNameIcon?: ReactNode;
  children?: ReactNode;
  icon: LucideIcon;
}
const InputIcon: FC<Props> = ({
  classNameInput,
  classNameIcon,
  value,
  onChangeText,
  children,
  icon: Icon,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <View className="flex flex-row items-center h-12 border border-zinc-600 rounded-md overflow-hidden">
      <View
        className={cn(
          "flex justify-center items-center px-3 py-2 h-full rounded-l-md bg-red-00 bg-neutral-100 dark:bg-zinc-900",
          classNameIcon,
        )}
      >
        <Icon color={theme === "dark" ? "gray" : "#767577"} size={20} />
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9CA3AF"
        className={cn(
          "h-full flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
          classNameInput,
        )}
        {...props}
      />
    </View>
  );
};
export default InputIcon;
