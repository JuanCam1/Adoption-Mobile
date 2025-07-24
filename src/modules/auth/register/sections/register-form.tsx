import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera, House, Mail, MapPin, Phone, User } from "lucide-react-native";
import InputIcon from "@/components/input-icon";
import TextRoboto from "@/components/text-roboto";
import useTheme from "@/hooks/use-theme";
import useRegister from "../hooks/use-register";
import InputPassword from "@/components/input-password";
import OTPModal from "../components/otp-modal";

const RegisterForm = () => {
  const { theme } = useTheme();
  const {
    user,
    handleChange,
    handleSubmit,
    imageRegister,
    isPending,
    isSuccess,
    dataUser,
    isActive,
    onCloseActive,
  } = useRegister();
  return (
    <>
      <View className=" flex justify-center items-center">
        <View className="relative">
          <Image
            className="rounded-full"
            source={{ uri: user.picture }}
            width={150}
            height={150}
          />
          <TouchableOpacity
            className="absolute bottom-0 right-2 z-0 bg-zinc-700 p-2 rounded-full"
            activeOpacity={0.7}
            onPress={imageRegister}
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
            value={user.name}
            onChangeText={(value) => handleChange("name", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Telefono</Text>
          <InputIcon
            icon={Phone}
            value={user.phone}
            onChangeText={(value) => handleChange("phone", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Ciudad</Text>
          <InputIcon
            icon={House}
            value={user.location}
            onChangeText={(value) => handleChange("location", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Dirección</Text>
          <InputIcon
            icon={MapPin}
            value={user.address}
            onChangeText={(value) => handleChange("address", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">
            Correo Electronico
          </Text>
          <InputIcon
            icon={Mail}
            value={user.email}
            onChangeText={(value) => handleChange("email", value)}
            classNameInput="text-zinc-800 dark:text-zinc-200"
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-zinc-800 dark:text-zinc-200">Contraseña</Text>
          <InputPassword
            value={user.password}
            onChangeText={(value) => handleChange("password", value)}
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

      {isSuccess && dataUser && (
        <OTPModal user={dataUser} visible={isActive} onClose={onCloseActive} />
      )}
    </>
  );
};

export default RegisterForm;
