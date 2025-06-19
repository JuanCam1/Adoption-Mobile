import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { type FC, type Ref, useCallback } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  story: StoryModelI;
  onClose?: () => void;
  ref: Ref<BottomSheet>;
}
const StoryBottomSheet: FC<Props> = ({ story, ref }) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet ref={ref} onChange={handleSheetChanges}>
      <BottomSheetView className="flex-1 items-center ">
        <Text>{story.user_name} 🎉</Text>
        <Image
          source={{ uri: story.pet_image }}
          className="w-full h-full object-cover"
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default StoryBottomSheet;
