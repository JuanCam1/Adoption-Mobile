import { useState } from "react";
import { View, FlatList, Pressable, Image, Text } from "react-native";
import { dataStories } from "@/data/data_stories";
import StoryCard from "@/modules/histories/components/story-card";
import StoryModal from "@/modules/histories/components/story-modal";
import { Heart, MessageCircle, Plus } from "lucide-react-native";
import logo from "../../assets/images/no-user.jpg";
import logoPet from "../../assets/images/logo.jpg";
import Divider from "@/components/divider";
import TextRoboto from "@/components/text-roboto";
const LOGO = Image.resolveAssetSource(logo).uri;

const PageScreen = () => {
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
    <View className="p-4 flex flex-col gap-4">
      <View>
        <FlatList
          data={dataStories}
          horizontal
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<CreateStory />}
          renderItem={({ item }) => (
            <StoryCard item={item} selectedStory={selectedStory} />
          )}
        />
      </View>

      <Divider />

      <View>
        <FlatList
          data={dataStories}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="min-h-[300px] max-h-[500px] bg-white dark:bg-zinc-800 rounded-md overflow-hidden ">
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

              <View className="px-4 mb-2">
                <TextRoboto
                  className="dark:text-white text-base text-justify"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi excepturi dolor recusandae, repellat aliquid voluptatum fugiat consectetur animi enim."
                />
              </View>

              <View className="h-48 w-full px-4 mb-2">
                <Image
                  source={{ uri: item.pet_image }}
                  className="w-full h-full rounded-md object-cover"
                />
              </View>

              <View className="flex-row items-center gap-6 px-4 py-2">
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
              </View>
            </View>
          )}
        />
      </View>

      {story && (
        <StoryModal story={story} visible={visible} onClose={onClose} />
      )}
    </View>
  );
};

const CreateStory = () => {
  return (
    <Pressable className="items-center mr-4 border h-52 w-32 rounded-md relative overflow-hidden">
      <View className="absolute top-[70%] -translate-y-1/2 left-[40%] z-10">
        <View className="size-8 rounded-full overflow-hidden border-2 border-blue-500 bg-blue-500 items-center justify-center">
          <Plus color="white" />
        </View>
      </View>

      <View className="h-[70%] w-full">
        <Image
          source={{ uri: LOGO }}
          className="w-full h-full object-contain"
        />
      </View>
      <View className="h-[30%] bg-zinc-700 w-full">
        <Text className="absolute bottom-0 text-sm text-white font-semibold text-center w-full">
          Crear Historia
        </Text>
      </View>
    </Pressable>
  );
};

export default PageScreen;
