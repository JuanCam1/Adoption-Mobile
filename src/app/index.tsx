import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import logo from "../assets/images/logo.jpg";
const LOGO = Image.resolveAssetSource(logo).uri;

const Page = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <View className="flex-1 items-center justify-center p-6 gap-8 bg-indigo-400">
      <Image
        width={200}
        height={200}
        source={{ uri: LOGO }}
        className="rounded-full"
      />

      <View className="flex gap-2 items-center">
        <TextPoppins
          text="AdoptaYa"
          className="text-white text-6xl text-center font-Roboto_ExtraBold"
        />
        <TextRoboto
          text="Encuentra a tu nuevo mejor amigo. Adopta con un toque. 🐾"
          className="dark:text-zinc-800 text-center px-6 text-xl font-Roboto_Bold"
        />
      </View>
      <View className="flex gap-3 flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleNavigate("/login")}
        >
          <TextRoboto
            text="Comenzar"
            className="text-white text-lg font-Roboto_Bold bg-indigo-600 px-6 py-3 rounded-md "
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleNavigate("/register")}
        >
          <TextRoboto
            text="Registrarse"
            className="text-indigo-600 text-lg font-Roboto_Bold bg-white px-6 py-3 rounded-md"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
