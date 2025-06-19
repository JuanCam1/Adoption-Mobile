import type { FC } from "react";
import { Image } from "react-native";
import ModalLayout from "@/components/modal-layout";

interface Props {
  story: StoryModelI;
  visible: boolean;
  onClose: () => void;
}
const StoryModal: FC<Props> = ({ story, onClose, visible }) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      animationType="slide"
      title={story.user_name}
      image={story.user_image}
      ubication={story.user_ubication}
      transparent
    >
      <Image
        source={{ uri: story.pet_image }}
        className="w-full h-[90%] object-cover rounded-md"
      />
    </ModalLayout>
  );
};
export default StoryModal;
