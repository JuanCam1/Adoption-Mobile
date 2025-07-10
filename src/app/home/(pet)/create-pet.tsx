import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import useKeyboardVisible from "@/hooks/use-keyboard";
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
  const isKeyboardVisible = useKeyboardVisible();
  const { bottom } = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="dark:bg-zinc-900"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, paddingBottom: isKeyboardVisible ? bottom + 20 : 0 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View className="p-6">
            <TextPoppins
              text="Regístra la mascota"
              className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
            />
            <PetForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default CreatePet;
