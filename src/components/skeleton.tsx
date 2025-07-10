import { View } from "react-native";
import type { FC } from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ width, height, rounded, className }) => {
  return (
    <View
      className={`bg-zinc-300 dark:bg-zinc-700 animate-pulse ${width} ${height} ${rounded} ${className}`}
    />
  );
};

export default Skeleton;
