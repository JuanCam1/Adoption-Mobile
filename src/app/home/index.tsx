import { dataStories } from "@/data/data_stories";
import StoryCard from "@/modules/histories/components/story-card";
import { View, Text, FlatList } from "react-native";

const PageScreen = () => {
  return (
    <View>
      <Text>PageScreen</Text>
      <FlatList
        data={dataStories}
        horizontal
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        showsHorizontalScrollIndicator={false}
        renderItem={StoryCard}
      />
    </View>
  );
};

export default PageScreen;
