import type { FC, ReactNode, RefObject } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import useTheme from "@/hooks/use-theme";

interface Props {
  handleSheetChanges: (index: number) => void;
  children: ReactNode;
  ref: RefObject<BottomSheet>;
}
const BottomSheetComponent: FC<Props> = ({
  handleSheetChanges,
  children,
  ref,
}) => {
  const { theme } = useTheme();
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={["50%"]}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: theme === "dark" ? "#27272a" : "#fafafa",
      }}
    >
      <BottomSheetView className="flex flex-1 py-4 px-12 items-start">
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetComponent;
