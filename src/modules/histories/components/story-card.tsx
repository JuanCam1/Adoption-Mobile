import type { dataStories } from "@/data/data_stories";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, type ListRenderItem, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInRight,
  FadeOutLeft,
  LinearTransition,
} from "react-native-reanimated";

const StoryCard: ListRenderItem<(typeof dataStories)[0]> = ({
  item,
  index,
}) => {
  return (
    <Animated.View
      entering={FadeIn.delay(index * 100)
        .withInitialValues({
          transform: [{ scale: 0.5 }],
          opacity: 0,
        })
        .springify()}
      exiting={FadeOutLeft} // Mantienes la salida a la izquierda
      layout={LinearTransition.springify()} // Mantienes las transiciones de layout
      className="items-center mr-4 border bg-red-400 h-48 w-32 rounded-md relative overflow-hidden"
    >
      <Image
        source={{ uri: Image.resolveAssetSource(item.pet_image).uri }}
        className="w-full h-full object-cover"
      />
      <View className="size-8 rounded-full overflow-hidden border-2 border-blue-500 absolute top-0 left-0 ml-1 mt-1">
        <Image
          source={{ uri: Image.resolveAssetSource(item.user_image).uri }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <LinearGradient
        className="absolute bottom-0 left-0 w-full"
        colors={["#ffffff", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      >
        <Text className="text-left pl-1 text-base text-gray-700  font-semibold ">
          {item.pet_name}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default StoryCard;
