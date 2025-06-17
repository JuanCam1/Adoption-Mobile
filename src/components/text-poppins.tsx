import type { ComponentProps, FC } from "react";
import { Text } from "react-native";

interface Props extends ComponentProps<typeof Text> {
  text: string;
}

const TextPoppins: FC<Props> = ({ text, ...props }) => {
  return (
    <Text className="font-Poppins_Medium text-xl" {...props}>
      {text}
    </Text>
  );
};
export default TextPoppins;
