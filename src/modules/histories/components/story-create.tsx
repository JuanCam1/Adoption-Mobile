import { Plus } from "lucide-react-native";
import { Image, Pressable, View } from "react-native";
import logo from "../../../assets/images/no-user.jpg";
import TextPoppins from "@/components/text-poppins";

const LOGO = Image.resolveAssetSource(logo).uri;

const StoryCreate = () => {
  return (
    <Pressable className="items-center mr-4 border h-52 w-36 rounded-2xl relative overflow-hidden">
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
        <TextPoppins
          text="Crear Historia"
          className="absolute bottom-2 text-sm text-white font-semibold text-center w-full"
        />
      </View>
    </Pressable>
  );
};
export default StoryCreate;
