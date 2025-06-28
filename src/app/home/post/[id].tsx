import Divider from "@/components/divider";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import { dataStories } from "@/data/data_stories";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

const PostId = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const screenWidth = Dimensions.get("window").width;
  const idValue = id ?? "No id";

  const dataPet = dataStories.find((item) => item.id === Number(idValue));

  return (
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

      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="w-full h-[300px]"
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Título"
          description="Descripción"
        />
      </MapView>

      <Text>{idValue}</Text>
    </ScrollView>
  );
};
export default PostId;
