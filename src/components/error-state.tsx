import type { FC, ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface Props {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  customIcon?: ReactNode;
}

const ErrorState: FC<Props> = ({
  title = "¡Algo salió mal!",
  message = "No pudimos cargar la información. Inténtalo nuevamente.",
  onRetry,
  retryText = "Reintentar",
  customIcon,
}) => {
  return (
    <View className="flex-1 justify-center items-center px-4 bg-white dark:bg-zinc-900">
      <Animated.View entering={FadeInDown} className="items-center mb-4">
        {customIcon && customIcon}
      </Animated.View>

      <Text className="text-lg font-bold text-zinc-800 dark:text-white mb-2 text-center">
        {title}
      </Text>
      <Text className="text-zinc-600 dark:text-zinc-300 text-center mb-4">
        {message}
      </Text>

      {onRetry && (
        <Pressable
          onPress={onRetry}
          className="mt-2 px-6 py-2 bg-indigo-500 rounded-full"
        >
          <Text className="text-white font-medium">{retryText}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ErrorState;
