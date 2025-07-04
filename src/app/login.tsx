import { Link, useRouter } from "expo-router";
import { Eye, Mail } from "lucide-react-native";
import InputIcon from "@/components/input-icon";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="p-6">
            <View className="flex flex-col justify-center items-center my-8">
              <TextPoppins
                text="Bienvenido a AdoptaYa"
                className="text-indigo-600 dark:text-indigo-400 text-6xl text-center font-Roboto_ExtraBold mb-6"
              />
              <TextRoboto
                text="Inicia sesión para encontrar a tu nuevo amigo"
                className="dark:text-zinc-400 text-center px-6 text-xl"
              />
            </View>

            <View className="w-full flex flex-col gap-8">
              <View className="flex flex-col gap-2">
                <Text className="text-zinc-800 dark:text-zinc-200">
                  Correo Electronico
                </Text>
                <InputIcon
                  icon={Mail}
                  value=""
                  placeholder="Correo electrónico"
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
                  placeholder="Contraseña"
                  onChangeText={(value) => console.log(value)}
                  classNameInput="text-zinc-800 dark:text-zinc-200"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                onPress={() => router.push("home/post")}
                className="bg-indigo-500 w-full rounded-md h-12 flex items-center justify-center"
                activeOpacity={0.7}
              >
                <TextRoboto
                  text="Iniciar Sesión"
                  className="text-white text-center py-2 "
                />
              </TouchableOpacity>
            </View>
            <View className="flex gap-3 flex-row mt-12 justify-center">
              <Text className="dark:text-zinc-400 text-lg">
                ¿Aún no tienes cuenta?
              </Text>
              <Link
                href="/register"
                className="text-indigo-500 font-bold text-lg"
              >
                Registrate
              </Link>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
