import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function PostLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
