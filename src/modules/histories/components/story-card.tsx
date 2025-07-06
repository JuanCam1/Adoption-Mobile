import type { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextRoboto from "@/components/text-roboto";

interface Props {
  item: StoryModelI;
  selectedStory: (value: StoryModelI) => void;
}
const StoryCard: FC<Props> = ({ item, selectedStory }) => {
  return (
    <Pressable
      onPress={() => selectedStory(item)}
      className="h-52 w-36 rounded-2xl overflow-hidden mr-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 relative"
    >
      <Image
        source={{ uri: item.pet_image }}
        className="w-full h-full"
        resizeMode="cover"
      />

      <View className="size-8 rounded-full overflow-hidden border-2 border-indigo-500 absolute top-1 left-1">
        <Image
          source={{ uri: item.user_image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <LinearGradient
        className="absolute bottom-0 left-0 w-full px-2 py-1"
        colors={["#ffffffee", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      >
        <TextRoboto
          text={item.pet_name}
          className="text-left pl-1 text-sm text-zinc-700 font-semibold"
        />
      </LinearGradient>
    </Pressable>
  );
};

export default StoryCard;
