import TextRoboto from "@/components/text-roboto";
import useTheme from "@/hooks/use-theme";
import useTypeGenderPet from "@/hooks/use-type-gender-pet";
import { Picker } from "@react-native-picker/picker";
import { Camera } from "lucide-react-native";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUpdatePet from "../hooks/use-update-pet";

const PetUpdateForm = () => {
  const { theme } = useTheme();
  const { petUpdate, handleChange, imagePet, handleSubmit, isPending } =
    useUpdatePet();

  const { genders, types } = useTypeGenderPet();
  return (
    <>
      <View className=" flex justify-center items-center">
        <View className="relative">
          <Image
            className="rounded-full bg-zinc-200 dark:bg-zinc-700"
            source={{ uri: petUpdate.pictureUrl }}
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

      <View className="w-full flex flex-col gap-6 mt-6 ">
        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Nombre</Text>
          <View className="h-12 border border-zinc-600 rounded-md ">
            <TextInput
              value={petUpdate.name}
              onChangeText={(value) => handleChange("name", value)}
              className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            />
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Descripción</Text>
          <TextInput
            className="h-32 flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-600 rounded-md"
            value={petUpdate.description}
            multiline
            numberOfLines={4}
            onChangeText={(value) => handleChange("description", value)}
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Genero</Text>

          <View className="h-12 border border-zinc-600 rounded-md text-md flex justify-center  border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 ">
            <Picker
              mode="dialog"
              selectedValue={petUpdate.genderId}
              onValueChange={(itemValue) => {
                handleChange("genderId", itemValue);
              }}
            >
              <Picker.Item label="Seleccionar género" value="0" />
              {genders.map((gender) => (
                <Picker.Item
                  key={gender.id}
                  label={gender.gender}
                  value={String(gender.id)}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Tipo</Text>

          <View className="h-12 border border-zinc-600 rounded-md text-md flex justify-center  border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 ">
            <Picker
              mode="dialog"
              selectedValue={petUpdate.typeId}
              onValueChange={(itemValue) => {
                handleChange("typeId", itemValue);
              }}
            >
              <Picker.Item label="Seleccionar el tipo" value="0" />
              {types.map((type) => (
                <Picker.Item
                  key={type.id}
                  label={type.type}
                  value={String(type.id)}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Reza</Text>
          <View className="h-12 border border-zinc-600 rounded-md ">
            <TextInput
              value={petUpdate.breed}
              onChangeText={(value) => handleChange("breed", value)}
              className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            />
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Edad</Text>
          <View className="h-12 border border-zinc-600 rounded-md ">
            <TextInput
              value={petUpdate.age}
              onChangeText={(value) => handleChange("age", value)}
              className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            />
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Ciudad</Text>
          <View className="h-12 border border-zinc-600 rounded-md ">
            <TextInput
              value={petUpdate.location}
              onChangeText={(value) => handleChange("location", value)}
              className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white  dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-indigo-500 w-full rounded-md h-12 flex items-center justify-center"
          activeOpacity={0.7}
        >
          {isPending ? (
            <ActivityIndicator
              size="small"
              color={theme === "dark" ? "#818cf8" : "#4f46e5"}
            />
          ) : (
            <TextRoboto
              text="Actualizar Mascota"
              className="text-white text-center py-2 "
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PetUpdateForm;
