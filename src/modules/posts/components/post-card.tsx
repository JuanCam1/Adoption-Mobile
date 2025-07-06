import type { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Gift, Heart, MessageCircle } from "lucide-react-native";
import TextRoboto from "@/components/text-roboto";

interface Props {
  item: StoryModelI;
}
const PostCard: FC<Props> = ({ item }) => {
  return (
    <Link href={`/home/post/${item.id.toString()}`}>
      <View className="min-h-[300px] max-h-[500px] bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden ">
        <View className="h-[15%] flex flex-row items-center justify-between px-4 py-3">
          <View className="flex flex-row items-center gap-3">
            <Image
              source={{ uri: item.user_image }}
              className="size-10 rounded-full object-cover"
            />
            <View>
              <Text className="text-base font-bold text-black dark:text-white">
                {item.user_name}
              </Text>
              <Text className="text-sm text-gray-700 dark:text-gray-400 font-medium">
                {item.user_ubication}
              </Text>
            </View>
          </View>
        </View>

        <View className="h-48 w-full px-4 mb-2">
          <Image
            source={{ uri: item.pet_image }}
            className="w-full h-full rounded-2xl object-cover"
          />
        </View>

        <View className="px-4 mb-2">
          <TextRoboto
            className="dark:text-white text-base text-justify"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi excepturi dolor recusandae, repellat aliquid voluptatum fugiat consectetur animi enim."
          />
        </View>

        <View className="flex-row items-center justify-between gap-6 px-4 py-2">
          <Pressable className="flex-row items-center gap-2">
            <Heart color="white" size={20} />
            <Text className="text-sm text-black dark:text-white font-semibold">
              Favorito
            </Text>
          </Pressable>

          <Pressable className="flex-row items-center gap-2">
            <MessageCircle color="white" size={20} />
            <Text className="text-sm text-black dark:text-white font-semibold">
              Contactar
            </Text>
          </Pressable>

          <Pressable className="flex-row items-center gap-2">
            <Gift color="white" size={20} />
            <Text className="text-sm text-black dark:text-white font-semibold">
              Adoptar
            </Text>
          </Pressable>
        </View>
      </View>
    </Link>
  );
};
export default PostCard;
