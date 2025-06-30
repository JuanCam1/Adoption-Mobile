import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ScreenOrientation from "expo-screen-orientation";
import { useColorScheme } from "nativewind";
import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/context/theme-context";
import BackButton from "@/components/back-button";
import { query } from "@/libs/query";
import "../global.css";

SplashScreen.preventAutoHideAsync();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

export default function Layout() {
  const { colorScheme } = useColorScheme();
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.otf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.otf"),
    "Poppins-Extrabold": require("../assets/fonts/poppins/Poppins-ExtraBold.otf"),
    "Roboto-Bold": require("../assets/fonts/roboto/Roboto-Bold.otf"),
    "Roboto-ExtraBold": require("../assets/fonts/roboto/Roboto-ExtraBold.otf"),
    "Roboto-Medium": require("../assets/fonts/roboto/Roboto-Medium.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <QueryClientProvider client={query}>
      <ThemeProvider>
        <Stack
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              flex: 1,
              backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
            },
          }}
        >
          <Stack.Screen name="index" />

          <Stack.Screen
            name="login"
            options={{
              headerLeft: () => <BackButton />,
              headerShown: true,
              title: "",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
              },
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              headerLeft: () => <BackButton />,
              headerShown: true,
              title: "",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: colorScheme === "dark" ? "#18181b" : "#fafafa",
              },
            }}
          />
          <Stack.Screen
            name="home"
            options={{
              animation: "slide_from_right",
            }}
          />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
