import { View } from "react-native";
import Divider from "@/components/divider";
import Story from "@/modules/histories/story";
import Post from "@/modules/posts/post";

const PostScreen = () => {
  return (
    <View className="p-4 flex flex-col gap-4">
      <Story />
      <Divider />
      <Post />
    </View>
  );
};
export default PostScreen;
