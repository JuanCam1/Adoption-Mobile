import { Platform, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ArrowLeft } from "lucide-react-native";

import TextPoppins from "@/components/text-poppins";
import PetUpdateForm from "@/modules/pets/components/pet-update-form";
import useTheme from "@/hooks/use-theme";

const UpdatePet = () => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <>
      <TouchableOpacity
        className="dark:bg-zinc-800 p-2 rounded-md size-12 ml-4 mb-2 flex justify-center items-center"
        onPress={() => router.back()}
      >
        <ArrowLeft size={24} color={theme === "dark" ? "gray" : "#767577"} />
      </TouchableOpacity>

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
            text="Actualiza la mascota"
            className="text-indigo-600 dark:text-indigo-400 text-5xl text-center font-Roboto_ExtraBold mb-6"
          />
          <PetUpdateForm />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default UpdatePet;
