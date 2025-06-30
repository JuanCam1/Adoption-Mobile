import InputIcon from "@/components/input-icon";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import useTheme from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { Camera, Eye, House, Mail, Phone, User } from "lucide-react-native";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const RegisterScreen = () => {
  const { theme } = useTheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="p-6">
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
                <Camera
                  size={20}
                  color={theme === "dark" ? "white" : "#767577"}
                />
              </TouchableOpacity>
            </View>
            <View className="flex flex-col justify-center items-center mt-3 mb-5">
              <TextPoppins
                text="Regístrate en AdoptaYa"
                className="text-indigo-600 dark:text-indigo-400 text-6xl text-center font-Roboto_ExtraBold mb-6"
              />
              <TextRoboto
                text="Crea una cuenta para encontrar a tu nuevo amigo"
                className="dark:text-zinc-400 text-center px-6 text-xl"
              />
            </View>

            <View className="w-full flex flex-col gap-6">
              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">Nombre</Text>
                <InputIcon
                  icon={User}
                  value=""
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  keyboardType="email-address"
                />
              </View>

              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">
                  Telefono
                </Text>
                <InputIcon
                  icon={Phone}
                  value=""
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  keyboardType="email-address"
                />
              </View>

              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">Ciudad</Text>
                <InputIcon
                  icon={House}
                  value=""
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  keyboardType="email-address"
                />
              </View>

              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">
                  Correo Electronico
                </Text>
                <InputIcon
                  icon={Mail}
                  value=""
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  keyboardType="email-address"
                />
              </View>

              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">
                  Contraseña
                </Text>
                <InputIcon
                  icon={Eye}
                  value=""
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                onPress={() => console.log("Presionado")}
                className="bg-indigo-500 w-full rounded-md h-12 flex items-center justify-center"
                activeOpacity={0.7}
              >
                <TextRoboto
                  text="Crear Cuenta"
                  className="text-white text-center py-2 "
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
