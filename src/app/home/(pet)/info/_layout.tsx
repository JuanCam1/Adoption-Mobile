import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function InfoLayout() {
  const { colorScheme } = useColorScheme();
  return (
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
    </Stack>
  );
}
