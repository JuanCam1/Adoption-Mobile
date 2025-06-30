import TextPoppins from "@/components/text-poppins";
import useTheme from "@/hooks/use-theme";
import {
  Bell,
  Camera,
  Mail,
  MapPin,
  MapPinHouse,
  Palette,
  Phone,
} from "lucide-react-native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SettingScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const { theme } = useTheme();
  return (
    <ScrollView
      className="flex-1 p-4"
      contentContainerStyle={{
        paddingBottom: bottom + 20,
      }}
    >
      <View className="flex justify-center items-center mt-4 gap-5">
        <View className="relative">
          <Image
            className="rounded-full"
            source={{ uri: "https://picsum.photos/200" }}
            width={150}
            height={150}
          />
          <TouchableOpacity
            className="absolute bottom-0 right-2 z-0 bg-zinc-700 p-2 rounded-full"
            activeOpacity={0.7}
          >
            <Camera size={20} color={theme === "dark" ? "white" : "#767577"} />
          </TouchableOpacity>
        </View>
        <View className="flex flex-col gap-1 justify-center">
          <TextPoppins
            text="Juan Camilo Rojas"
            className="text-indigo-400 text-center text-2xl font-bold"
          />
          <TextPoppins
            text="jcdiaz1998@outlook.es"
            className="text-center text-indigo-200"
          />
          <TextPoppins
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni necessitatibus quibusdam quisquam doloribus delectus id ducimus, consectetur, iusto hic a ratione, modi quod itaque excepturi. Natus quisquam sunt totam voluptatem!"
            className="text-center text-neutral-400"
          />
        </View>
      </View>

      <View>
        <TextPoppins
          text="Cuenta"
          className="text-xl font-bold dark:text-indigo-400 mt-6 mb-5"
        />

        <View className="flex flex-col gap-6">
          <View className="flex flex-row items-center px-4 gap-6">
            <Mail size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <View>
              <TextPoppins
                text="Correo"
                className="text-white text-md font-semibold"
              />
              <TextPoppins
                text="jcdiaz1998@outlook.es"
                className="text-indigo-200 text-md"
              />
            </View>
          </View>

          <View className="flex flex-row items-center px-4 gap-6">
            <Phone size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <View>
              <TextPoppins
                text="Telefono"
                className="text-white text-md font-semibold"
              />
              <TextPoppins
                text="3166389048"
                className="text-indigo-200 text-md"
              />
            </View>
          </View>
          <View className="flex flex-row items-center px-4 gap-6">
            <MapPinHouse
              size={24}
              color={theme === "dark" ? "gray" : "#767577"}
            />
            <View>
              <TextPoppins
                text="Dirección"
                className="text-white text-md font-semibold"
              />
              <TextPoppins
                text="Carrera 18a #13c-50"
                className="text-indigo-200 text-md"
              />
            </View>
          </View>
          <View className="flex flex-row items-center px-4 gap-6">
            <MapPin size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <View>
              <TextPoppins
                text="Ubicación"
                className="text-white text-md font-semibold"
              />
              <TextPoppins
                text="Girón,Santander"
                className="text-indigo-200 text-md"
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <TextPoppins
          text="Preferencias"
          className="text-xl font-bold dark:text-indigo-400 mt-6 mb-5"
        />

        <View className="flex flex-col gap-6">
          <View className="flex flex-row items-center px-4 gap-6">
            <Mail size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <TextPoppins
              text="Favoritos"
              className="text-white text-md font-semibold"
            />
          </View>

          <View className="flex flex-row items-center px-4 gap-6">
            <Phone size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <View>
              <TextPoppins
                text="Aplicaciónes"
                className="text-white text-md font-semibold"
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <TextPoppins
          text="Configuración"
          className="text-xl font-bold dark:text-indigo-400 mt-6 mb-5"
        />

        <View className="flex flex-col gap-6">
          <View className="flex flex-row items-center px-4 gap-6">
            <Bell size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <TextPoppins
              text="Notificaciones"
              className="text-white text-md font-semibold"
            />
          </View>

          <View className="flex flex-row items-center px-4 gap-6">
            <Palette size={24} color={theme === "dark" ? "gray" : "#767577"} />
            <View>
              <TextPoppins
                text="Tema"
                className="text-white text-md font-semibold"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
