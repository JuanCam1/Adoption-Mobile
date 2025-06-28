import { useState } from "react";
import { FlatList, View } from "react-native";
import { dataStories } from "@/data/data_stories";
import StoryCreate from "./components/story-create";
import StoryCard from "./components/story-card";
import StoryModal from "./components/story-modal";

const Story = () => {
  const [story, setStory] = useState<StoryModelI | null>(null);
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(!visible);
  };

  const selectedStory = (value: StoryModelI) => {
    setStory(value);
    setVisible(true);
  };
  return (
    <View>
      <FlatList
        data={dataStories}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<StoryCreate />}
        renderItem={({ item }) => (
          <StoryCard item={item} selectedStory={selectedStory} />
        )}
      />
      {story && (
        <StoryModal story={story} visible={visible} onClose={onClose} />
      )}
    </View>
  );
};
export default Story;
