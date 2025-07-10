import Skeleton from "@/components/skeleton";
import { View } from "react-native";

const PetListSkeleton = () => {
  return (
    <View className="flex flex-row flex-wrap justify-center gap-4 py-2 px-4 flex-1">
      <Skeleton className="w-[48%] h-64 dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900" />
      <Skeleton className="w-[48%] h-64 dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900" />
      <Skeleton className="w-[48%] h-64 dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900" />
      <Skeleton className="w-[48%] h-64 dark:bg-zinc-800 bg-white rounded-2xl p-4 shadow-md dark:shadow-zinc-900" />
    </View>
  );
};
export default PetListSkeleton;
