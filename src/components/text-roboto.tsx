import type { ComponentProps, FC } from "react";
import { Text } from "react-native";

interface Props extends ComponentProps<typeof Text> {
  text: string;
}

const TextRoboto: FC<Props> = ({ text, ...props }) => {
  return (
    <Text className="font-Roboto_Medium text-xl" {...props}>
      {text}
    </Text>
  );
};
export default TextRoboto;
