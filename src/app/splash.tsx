import { useEffect } from "react";
import { Dimensions, Image, type ImageStyle, Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import logo from "@/assets/images/logo2.png";
import TextRoboto from "@/components/text-roboto";

const logoImage = Image.resolveAssetSource(logo).uri;

const SplashScreen = () => {
  const router = useRouter();
  const direction: Direction = "top";
  const distance = 60;

  // Animaciones para imagen
  const logoOpacity = useSharedValue(0);
  const logoTranslate = useSharedValue(getInitialOffset(direction, distance));

  // Animaciones para texto + emoji
  const textOpacity = useSharedValue(0);
  const textTranslate = useSharedValue(getInitialOffset(direction, distance));

  useEffect(() => {
    logoOpacity.value = withTiming(1, { duration: 800 });
    logoTranslate.value = withTiming(0, { duration: 800 });

    textOpacity.value = withDelay(600, withTiming(1, { duration: 800 }));
    textTranslate.value = withDelay(
      600,
      withTiming(0, { duration: 800 }, (finished) => {
        if (finished) {
          runOnJS(router.push)("/");
        }
      }),
    );
  }, []);

  const logoAnimatedStyle = useAnimatedStyle<ImageStyle>(() => ({
    opacity: logoOpacity.value,
    transform: [{ translateY: logoTranslate.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslate.value }],
  }));

  return (
    <View className="bg-indigo-400 flex-1 justify-center items-center">
      <Animated.Image
        width={300}
        height={300}
        source={{ uri: logoImage }}
        style={logoAnimatedStyle}
      />

      <Animated.View style={textAnimatedStyle} className="items-center mt-8">
        <TextRoboto
          text="AdoptaYa"
          className="text-white text-6xl text-center font-Roboto_ExtraBold"
        />
        <Text className="mt-3 text-3xl">🐾🐾</Text>
      </Animated.View>
    </View>
  );
};

type Direction = "left" | "right" | "top" | "bottom";

function getInitialOffset(
  direction: Direction,
  distance: number = 100,
): number {
  switch (direction) {
    case "left":
      return -distance;
    case "right":
      return distance;
    case "top":
      return -distance;
    case "bottom":
    default:
      return distance;
  }
}

export default SplashScreen;
