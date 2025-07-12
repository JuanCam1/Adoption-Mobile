import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AlertTriangle, ArrowLeft } from "lucide-react-native";
import Divider from "@/components/divider";
import TextPoppins from "@/components/text-poppins";
import TextRoboto from "@/components/text-roboto";
import PostMap from "@/modules/posts/components/post-map";
import useTheme from "@/hooks/use-theme";
import useByIdFetchPet from "@/modules/pets/hooks/use-byId-fetch-pet";
import ErrorState from "@/components/message-state";

const PetId = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const router = useRouter();

  const screenWidth = Dimensions.get("window").width;
  const { data, isPending, isSuccess, isError, refetch } = useByIdFetchPet(id);

  if (isPending) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-zinc-900">
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  if (isError || !isSuccess) {
    return (
      <ErrorState
        customIcon={<AlertTriangle />}
        title="No se pudieron cargar los datos"
        message="Ocurrió un error al obtener la información de la mascota. Por favor, reintenta."
        onRetry={() => refetch()}
      />
    );
  }

  const pet = data.data.data;

  return (
    <View className="flex-1 bg-white dark:bg-zinc-900">
      <TouchableOpacity
        className="dark:bg-zinc-800 p-2 rounded-md size-12 ml-4 mb-2 flex justify-center items-center"
        onPress={() => router.back()}
      >
        <ArrowLeft size={24} color={theme === "dark" ? "gray" : "#767577"} />
      </TouchableOpacity>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: `${process.env.EXPO_PUBLIC_STATIC_DEV}/pet/${pet.pathPicture}`,
          }}
          style={{ width: screenWidth - 32, height: 300 }}
          className="rounded-xl object-cover mb-6"
        />

        <TextPoppins
          text={pet.name}
          className="text-3xl font-bold text-gray-900 dark:text-indigo-400 mb-2"
        />
        <TextRoboto
          text={pet.description}
          className="text-base text-gray-600 dark:text-zinc-300 mb-6"
        />

        <View className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl mb-6">
          <TextPoppins
            text="Información"
            className="text-2xl font-bold dark:text-indigo-400 mb-4"
          />
          <Divider className="mb-4" />

          {[
            { label: "Tipo", value: pet.type.type },
            { label: "Edad", value: pet.age },
            { label: "Sexo", value: pet.gender.gender },
            { label: "Raza", value: pet.breed },
          ].map(({ label, value }) => (
            <View key={label} className="flex-row justify-between mb-4">
              <TextPoppins
                text={label}
                className="text-lg font-semibold dark:text-indigo-300"
              />
              <TextRoboto text={value} className="text-lg dark:text-zinc-200" />
            </View>
          ))}
        </View>

        <TextPoppins
          text="Ubicación"
          className="text-2xl font-bold dark:text-indigo-400 mb-4"
        />
        <View className="w-full h-[300px] rounded-xl overflow-hidden">
          <PostMap
            latitude={pet.latitude}
            longitude={pet.longitude}
            location={pet.location}
          />
        </View>

        <View className="h-12" />
      </ScrollView>
    </View>
  );
};

export default PetId;
