import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ScreenOrientation from "expo-screen-orientation";

import { ThemeProvider } from "@/context/theme-context";
import "../global.css";

SplashScreen.preventAutoHideAsync();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

export default function Layout() {
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
    <ThemeProvider>
      <Stack
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />

        <Stack.Screen
          name="login"
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen name="register" />
        <Stack.Screen name="splash" />
      </Stack>
      <StatusBar style="inverted" />
    </ThemeProvider>
  );
}
