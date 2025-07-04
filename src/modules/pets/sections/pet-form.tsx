import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera, House, Mail, MapPin, Phone, User } from "lucide-react-native";
import InputIcon from "@/components/input-icon";
import TextRoboto from "@/components/text-roboto";
import useTheme from "@/hooks/use-theme";
import usePetForm from "../hooks/use-pet-form";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const PetForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { theme } = useTheme();
  const { logoImage, pet, handleChange, imagePet, handleSubmit, isPending } =
    usePetForm();
  return (
    <>
      <View className=" flex justify-center items-center">
        <View className="relative">
          <Image
            className="rounded-full"
            source={{ uri: logoImage }}
            width={150}
            height={150}
          />
          <TouchableOpacity
            className="absolute bottom-0 right-2 z-0 bg-zinc-700 p-2 rounded-full"
            activeOpacity={0.7}
            onPress={imagePet}
          >
            <Camera size={20} color={theme === "dark" ? "white" : "#767577"} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full flex flex-col gap-6">
        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Nombre</Text>
          <InputIcon
            icon={User}
            value={pet.name}
            onChangeText={(value) => handleChange("name", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Descripción</Text>
          <TextInput
            className="h-32 flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-600 rounded-md"
            value={pet.description}
            multiline
            numberOfLines={4}
            onChangeText={(value) => handleChange("description", value)}
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Ciudad</Text>
          <InputIcon
            icon={House}
            value={pet.location}
            onChangeText={(value) => handleChange("location", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Edad</Text>
          <InputIcon
            icon={MapPin}
            value={pet.age}
            onChangeText={(value) => handleChange("age", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-indigo-500 w-full rounded-md h-12 flex items-center justify-center"
          activeOpacity={0.7}
        >
          {isPending ? (
            <ActivityIndicator />
          ) : (
            <TextRoboto
              text="Crear Cuenta"
              className="text-white text-center py-2 "
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PetForm;
