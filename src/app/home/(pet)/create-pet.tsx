import TextPoppins from "@/components/text-poppins";
import PetForm from "@/modules/pets/sections/pet-form";
import { View, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreatePet = () => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={Platform.OS === "ios" ? 20 : 30}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      className="dark:bg-zinc-900"
    >
      <View className="p-6 flex-1">
        <TextPoppins
          text="Regístra la mascota"
          className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
        />
        <PetForm />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default CreatePet;
