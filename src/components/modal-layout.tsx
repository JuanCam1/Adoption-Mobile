import { CircleX } from "lucide-react-native";
import type { FC, ReactNode } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import Divider from "./divider";

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  image: string;
  ubication: string;
  children: ReactNode;
  transparent?: boolean;
  animationType?: "fade" | "none" | "slide";
}
const ModalLayout: FC<Props> = ({
  onClose,
  visible,
  children,
  title,
  image,
  ubication,
  transparent,
  animationType = "none",
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/80 items-center justify-center">
        <View className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-[95%] h-[80%]">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row gap-3 itemc-center">
              <Image
                source={{ uri: image }}
                className="size-10 rounded-full object-contain"
              />

              <View className="flex flex-col ">
                <Text className="text-base font-bold text-black dark:text-white ">
                  {title}
                </Text>
                <Text className="text-sm text-gray-700 dark:text-gray-400  font-semibold ">
                  {ubication}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={onClose}
              className=" border dark:border-gray-500 rounded-md p-2 "
            >
              <CircleX size={25} color="white" />
            </TouchableOpacity>
          </View>

          <Divider className="my-3" />

          {children}
        </View>
      </View>
    </Modal>
  );
};
export default ModalLayout;
