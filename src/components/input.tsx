import { cn } from "@/libs/merge";
import type { FC, ReactNode } from "react";
import { TextInput, type TextInputProps } from "react-native";

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
    <TextInput
      className={cn(
        "h-full flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
        classNameInput,
      )}
      value={value}
      placeholder={placeholder || ""}
      onChangeText={onChangeText}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
};
export default Input;
