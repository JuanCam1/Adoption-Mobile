import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import InputIcon from "@/components/input-icon";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import RegisterForm from "@/modules/auth/register/register-form";

const RegisterScreen = () => {
  const { bottom } = useSafeAreaInsets();

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
          paddingBottom: bottom + 20,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="p-6">
            <View className="flex flex-col justify-center items-center mt-3 mb-5">
              <TextPoppins
                text="Regístrate en AdoptaYa"
                className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
              />
              <TextRoboto
                text="Crea una cuenta para encontrar a tu nuevo amigo"
                className="dark:text-zinc-400 text-center px-6 text-xl"
              />
            </View>

            <RegisterForm />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
