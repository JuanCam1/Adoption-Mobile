import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PetLayout() {
  const { colorScheme } = useColorScheme();
  const inset = useSafeAreaInsets();

  const tabBarClass =
    colorScheme === "dark"
      ? "bg-zinc-900 border-zinc-700 border-t-[1px]"
      : "bg-white border-b-2";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          height: 70 + inset.bottom,
          borderTopWidth: 0,
          paddingBottom: inset.bottom,
        },
        tabBarBackground: () => (
          <View
            className={tabBarClass}
            style={{ flex: 1, paddingBottom: inset.bottom }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="info"
        options={{
          title: "Mascotas",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="create-pet"
        options={{
          title: "Agregar Mascota",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
