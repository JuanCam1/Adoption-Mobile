import { useState, type FC } from "react";
import { Text, View, TextInput } from "react-native";
import ModalLayout from "@/components/modal-layout";
import ImagePicker, { type ImageOrVideo } from "react-native-image-crop-picker";

interface Props {
  visible: boolean;
  onClose: (value: boolean) => void;
}
const PetCreatePostModal: FC<Props> = ({ visible, onClose }) => {
  const [images, setImages] = useState<ImageOrVideo[]>([]);

  const imagePickerMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
    }).then((images) => {
      setImages(images);
    });
  };

  return (
    <ModalLayout
      visible={visible}
      onClose={() => onClose(false)}
      animationType="slide"
      title="Crear Publicación"
      transparent
    >
      <View className="flex-1 ">
        <View className="w-full flex flex-col gap-6 mt-6 ">
          <View className="flex flex-col gap-2">
            <Text className="text-zinc-800 dark:text-zinc-200">Titulo</Text>
            <View className="h-12 border border-zinc-600 rounded-md overflow-hidden">
              <TextInput className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200" />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-zinc-800 dark:text-zinc-200">Contenido</Text>
            <View className="h-32 border border-zinc-600 rounded-md overflow-hidden">
              <TextInput
                textAlignVertical="top"
                className="flex-1 text-md p-2.5 h-full pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-600 rounded-md"
                multiline
                numberOfLines={4}
              />
            </View>
          </View>
        </View>
      </View>
    </ModalLayout>
  );
};
export default PetCreatePostModal;
