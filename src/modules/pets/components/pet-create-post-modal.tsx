import { useState, type FC } from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import ImagePicker, {
  type Image as ImagePickerImage,
} from "react-native-image-crop-picker";
import ModalLayout from "@/components/modal-layout";

interface Props {
  visible: boolean;
  onClose: (value: boolean) => void;
  selectedPet: PetListModelI;
}
const PetCreatePostModal: FC<Props> = ({ visible, onClose, selectedPet }) => {
  const [images, setImages] = useState<ImagePickerImage[]>([]);
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const imagePickerMultiple = async () => {
    try {
      const selectedImages = await ImagePicker.openPicker({
        multiple: true,
        includeBase64: true,
        maxFiles: 4,
      });

      setImages(selectedImages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, idx) => idx !== index);
    setImages(updatedImages);
  };

  const onSubmit = () => {
    const base64Images = images.map((img) => img.data);

    console.log("images4", images[0].data);
    console.log("post", post);
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
        <View className="w-full flex flex-col gap-4 mt-3 ">
          <View className="flex flex-col gap-2">
            <Text className="text-zinc-800 dark:text-zinc-200">Titulo</Text>
            <View className="h-12 border border-zinc-600 rounded-md overflow-hidden">
              <TextInput
                value={post.title}
                onChangeText={(text) => setPost({ ...post, title: text })}
                className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
              />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-zinc-800 dark:text-zinc-200">Contenido</Text>
            <View className="h-32 border border-zinc-600 rounded-md overflow-hidden">
              <TextInput
                value={post.content}
                onChangeText={(text) => setPost({ ...post, content: text })}
                textAlignVertical="top"
                className="flex-1 text-md p-2.5 h-full pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-600 rounded-md"
                multiline
                numberOfLines={4}
              />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-zinc-800 dark:text-zinc-200">Mascota</Text>
            <View className="h-12 border border-zinc-600 rounded-md overflow-hidden">
              <TextInput
                value={selectedPet.name}
                selectTextOnFocus={false}
                editable={false}
                className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
              />
            </View>
          </View>

          <View>
            <Text className="text-zinc-800 dark:text-zinc-200 mb-2">Fotos</Text>
            {images.length > 0 ? (
              <View className="flex flex-row gap-4 ">
                {images.map((image, idx) => (
                  <View key={idx} className="relative">
                    <Image
                      source={{ uri: image.path }}
                      className="w-20 h-20 rounded-2xl"
                    />
                    <Pressable
                      onPress={() => handleRemoveImage(idx)}
                      className="absolute -top-2 -right-2 bg-red-400 rounded-full size-6 items-center justify-center"
                    >
                      <Text className="text-white text-xs font-bold">X</Text>
                    </Pressable>
                  </View>
                ))}
              </View>
            ) : (
              <Pressable
                className="flex-row items-center justify-center bg-indigo-500 rounded-full p-2 "
                onPress={imagePickerMultiple}
              >
                <Text className="text-zinc-800 dark:text-zinc-200 ">
                  Subir Fotos
                </Text>
              </Pressable>
            )}
          </View>
        </View>
        <Pressable
          className="flex-row items-center justify-center bg-indigo-500 rounded-full p-2 mt-6"
          onPress={onSubmit}
        >
          <Text className="text-zinc-800 dark:text-zinc-200 ">Crear Post</Text>
        </Pressable>
      </View>
    </ModalLayout>
  );
};
export default PetCreatePostModal;
