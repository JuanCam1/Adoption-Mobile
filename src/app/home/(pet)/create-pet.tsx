import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import PetForm from "@/modules/pets/sections/pet-form";
import { Stack } from "expo-router";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CreatePet = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      className="dark:bg-zinc-900"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
                text="Regístrate la mascota"
                className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
              />
              <TextRoboto
                text="Registra tu mascota para que puedan publicar y la puedan adoptar"
                className="dark:text-zinc-400 text-center px-6 text-xl"
              />
            </View>

            <PetForm />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CreatePet;
