import { Image, Pressable, View } from "react-native";
import Divider from "@/components/divider";
import Story from "@/modules/histories/story";
import Post from "@/modules/posts/post";
import logoUser from "../../../assets/images/no-user.jpg";
import TextRoboto from "@/components/text-roboto";
const userImage = Image.resolveAssetSource(logoUser).uri;

const PostScreen = () => {
  return (
    <View className="p-4 flex flex-col gap-4">
      <Story />
      <Divider />
      <View className="flex flex-row gap-4 bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden p-4 ">
        <Image
          source={{ uri: userImage }}
          className="size-10 rounded-full object-cover"
        />
        <Pressable className="border rounded-2xl border-zinc-300 dark:border-zinc-700 flex-1 flex justify-center items-center ">
          <TextRoboto
            text="Crear Publicación"
            className="text-black dark:text-white text-center py-2 "
          />
        </Pressable>
      </View>
      <Post />
    </View>
  );
};
export default PostScreen;
