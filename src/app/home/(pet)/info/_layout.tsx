import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { PetProvider } from "@/modules/pets/contexts/pet-update-context";

export default function InfoLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <PetProvider>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            flex: 1,
            backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="update"
          options={{
            animation: "fade",
            title: "Actualizar",
          }}
        />
      </Stack>
    </PetProvider>
  );
}
