import TextRoboto from "@/components/text-roboto";
import { Image, Pressable, View } from "react-native";
import logoUser from "@/assets/images/no-user.jpg";
const userImage = Image.resolveAssetSource(logoUser).uri;

const PostCreateBottom = () => {
  return (
    <View className="flex flex-row gap-4 bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden p-4 ">
      <Image
        source={{ uri: userImage }}
        className="size-10 rounded-full object-cover"
      />
      <Pressable className="border rounded-2xl border-zinc-300 dark:border-zinc-700 flex-1 flex justify-center items-center bg-indigo-400">
        <TextRoboto
          text="Crear Publicación"
          className="text-black dark:text-white text-center py-2 font-Roboto_Bold "
        />
      </Pressable>
    </View>
  );
};
export default PostCreateBottom;
