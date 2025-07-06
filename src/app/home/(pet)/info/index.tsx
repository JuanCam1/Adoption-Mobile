import TextPoppins from "@/components/text-poppins";
import { Image, ScrollView, Text, View } from "react-native";
import logoPet from "@/assets/images/logo2.png";
import TextRoboto from "@/components/text-roboto";
const petImage = Image.resolveAssetSource(logoPet).uri;

const PetScreen = () => {
  return (
    <View className="flex-1 p-4">
      <TextPoppins
        text="Mis Mascotas"
        className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
      />
      {/* <Link href="/home/(pet)/info/1">Macota</Link> */}

      <ScrollView>
        <View className="flex flex-row flex-wrap justify-center gap-4  py-2">
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              className="w-[45%] dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900"
            >
              <Image
                source={{ uri: petImage }}
                className="rounded-xl bg-zinc-200 dark:bg-zinc-700 w-full h-40"
                resizeMode="cover"
              />
              <View className="mt-4 space-y-2">
                <View className="flex flex-row justify-between items-center">
                  <TextPoppins
                    text="Nombre"
                    className="text-sm text-zinc-600 dark:text-indigo-400"
                  />
                  <TextRoboto
                    text="Pancho"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  />
                </View>
                <View className="flex flex-row justify-between items-center">
                  <TextPoppins
                    text="Edad"
                    className="text-sm text-zinc-600 dark:text-indigo-400"
                  />
                  <TextRoboto
                    text="4 años"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default PetScreen;
