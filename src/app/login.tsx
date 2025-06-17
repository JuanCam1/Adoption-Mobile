import InputIcon from "@/components/input-icon";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import { EyeOff, Eye, Mail } from "lucide-react-native";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full flex-1 flex items-center justify-center p-6 dark:bg-zinc-900 bg-white">
          <View className="flex flex-col justify-center items-center my-8">
            <TextPoppins
              text="Bienvenido a AdoptaYa"
              className="text-indigo-600 dark:tex-indigo-400 text-6xl text-center font-Roboto_ExtraBold mb-6"
            />
            <TextRoboto
              text="Inicia sesión para encontrar a tu nuevo amigo"
              className="dark:text-white text-center px-6 text-xl"
            />
          </View>

          <View className="w-full flex flex-col gap-8">
            <View className="flex flex-col gap-2">
              <Text className="text-zinc-800 dark:text-zinc-200">
                Correo Electronico
              </Text>
              <InputIcon
                value=""
                placeholder="Correo electrónico"
                onChangeText={(value) => console.log(value)}
                classNameInput="text-zinc-800 dark:text-zinc-200"
                classNameIcon="bg-white dark:bg-zinc-900"
              >
                <Mail color="white" size={20} />
              </InputIcon>
            </View>

            <View className="flex flex-col gap-2">
              <Text className="text-zinc-800 dark:text-zinc-200">
                Contraseña
              </Text>
              <InputIcon
                value=""
                placeholder="Correo electrónico"
                onChangeText={(value) => console.log(value)}
                classNameInput="text-zinc-800 dark:text-zinc-200"
                classNameIcon="bg-white dark:bg-zinc-900"
              >
                <Eye color="white" size={20} />
              </InputIcon>
            </View>
            <Pressable
              onPress={() => console.log("Presionado")}
              className="bg-indigo-600 w-full rounded-md h-12 flex items-center justify-center"
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                },
              ]}
            >
              <TextRoboto
                text="Iniciar Sesión"
                className="text-white text-center py-2 "
              />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
