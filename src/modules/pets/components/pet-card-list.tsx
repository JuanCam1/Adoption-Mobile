import type { FC } from "react";
import { View, Pressable, Image } from "react-native";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";

interface Props {
  pet: PetListModelI;
  handleOpenBottomSheet: (pet: PetListModelI) => void;
}
const PetCardList: FC<Props> = ({ handleOpenBottomSheet, pet }) => {
  const urlPicure = `${process.env.EXPO_PUBLIC_STATIC_DEV}/pet/${pet.pathPicture}`;
  console.log("urlPicure", urlPicure);
  return (
    <Pressable
      onPress={() => handleOpenBottomSheet(pet)}
      className="w-[48%] dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900"
    >
      <Image
        source={{ uri: urlPicure }}
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
            text={pet.name}
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
          />
        </View>
        <View className="flex flex-row justify-between items-center">
          <TextPoppins
            text="Edad"
            className="text-sm text-zinc-600 dark:text-indigo-400"
          />
          <TextRoboto
            text={pet.age}
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
          />
        </View>
      </View>
    </Pressable>
  );
};
export default PetCardList;
