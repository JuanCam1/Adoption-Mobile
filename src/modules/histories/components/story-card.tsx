import type { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  item: StoryModelI;
  selectedStory: (value: StoryModelI) => void;
}
const StoryCard: FC<Props> = ({ item, selectedStory }) => {
  return (
    <Pressable
      onPress={() => selectedStory(item)}
      className="items-center mr-4 border h-52 w-32 rounded-md relative overflow-hidden"
    >
      <Image
        source={{ uri: item.pet_image }}
        className="w-full h-full object-contain"
      />
      <View className="size-8 rounded-full overflow-hidden border-2 border-blue-500 absolute top-0 left-0 ml-1 mt-1">
        <Image
          source={{ uri: item.user_image }}
          className="w-full h-full object-contain"
        />
      </View>
      <LinearGradient
        className="absolute bottom-0 left-0 w-full"
        colors={["#ffffff", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      >
        <Text className="text-left pl-1 text-sm text-gray-700  font-semibold ">
          {item.user_name}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default StoryCard;
