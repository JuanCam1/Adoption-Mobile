import { cn } from "@/libs/merge";
import type { FC, ReactNode } from "react";
import { TextInput, View, type TextInputProps } from "react-native";

interface Props extends TextInputProps {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  classNameInput?: ReactNode;
}
const Input: FC<Props> = ({
  value,
  placeholder,
  onChangeText,
  classNameInput,
  ...props
}) => {
  return (
    <View className="h-12 border border-zinc-600 rounded-md ">
      <TextInput
        value={value}
        placeholder={placeholder || ""}
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
export default Input;
