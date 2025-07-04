import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Divider from "@/components/divider";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import { dataStories } from "@/data/data_stories";
import PostMap from "@/modules/posts/components/post-map";
import { ArrowLeft } from "lucide-react-native";
import useTheme from "@/hooks/use-theme";

const PetId = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const screenWidth = Dimensions.get("window").width;
  const idValue = id ?? "No id";

  const dataPet = dataStories.find((item) => item.id === Number(idValue));
  const router = useRouter();
  return (
    <View className="flex flex-1">
      <TouchableOpacity
        className="dark:bg-zinc-800 p-2 rounded-md size-12 ml-4 mb-2 flex justify-center items-center"
        onPress={() => router.back()}
      >
        <ArrowLeft size={24} color={theme === "dark" ? "gray" : "#767577"} />
      </TouchableOpacity>
      <ScrollView className=" flex-1 px-4 pt-2 mb-8">
        <Image
          source={{ uri: dataPet.pet_image }}
          width={screenWidth - 32}
          height={300}
          className="rounded-md object-cover"
        />
        <TextPoppins
          text={dataPet.pet_name}
          className="text-4xl font-bold dark:text-indigo-400 mt-6"
        />
        <TextRoboto
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi excepturi dolor recusandae, repellat aliquid voluptatum fugiat consectetur animi enim."
          className="text-left dark:text-zinc-400 text-xl mt-2"
        />
        <TextPoppins
          text="Información"
          className="text-2xl font-bold dark:text-indigo-400 mt-6"
        />
        <Divider className="my-4" />
        <View className="space-y-3">
          <View className="flex flex-row justify-between px-4">
            <TextPoppins
              className="text-xl font-semibold dark:text-indigo-500 "
              text="Tipo"
            />
            <TextRoboto
              className="text-xl font-normal dark:text-zinc-400"
              text="Perro"
            />
          </View>
          <Divider className="my-4" />

          <View className="flex flex-row justify-between px-4">
            <TextPoppins
              className="text-xl font-semibold dark:text-indigo-500 "
              text="Edad"
            />
            <TextRoboto
              className="text-xl font-normal dark:text-zinc-400"
              text="3 años"
            />
          </View>

          <Divider className="my-4" />

          <View className="flex flex-row justify-between px-4">
            <TextPoppins
              className="text-xl font-semibold dark:text-indigo-500 "
              text="Sexo"
            />
            <TextRoboto
              className="text-xl font-normal dark:text-zinc-400"
              text="Masculino"
            />
          </View>

          <Divider className="my-4" />

          <View className="flex flex-row justify-between px-4">
            <TextPoppins
              className="text-xl font-semibold dark:text-indigo-500 "
              text="Raza"
            />
            <TextRoboto
              className="text-xl font-normal dark:text-zinc-400"
              text="Criollo"
            />
          </View>
        </View>
        <Divider className="my-4" />
        <TextPoppins
          text="Ubicación"
          className="text-2xl font-bold dark:text-indigo-400 mt-6"
        />
        <View className="w-full h-[400px] bg-red-400">
          <PostMap />
        </View>
        <Text>{idValue}</Text>
      </ScrollView>
    </View>
  );
};
export default PetId;
