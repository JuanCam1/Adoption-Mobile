import { dataStories } from "@/data/data_stories";
import { FlatList, View } from "react-native";
import PostCard from "./components/post-card";

const Post = () => {
  return (
    <View>
      <FlatList
        data={dataStories}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PostCard item={item} />}
      />
    </View>
  );
};
export default Post;
