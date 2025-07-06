import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import PetForm from "@/modules/pets/sections/pet-form";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="dark:bg-zinc-900"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: bottom + 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
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
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default CreatePet;
