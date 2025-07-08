import type { FC } from "react";
import { Image } from "react-native";
import ModalImageLayout from "@/components/modal-image-layout";

interface Props {
  story: StoryModelI;
  visible: boolean;
  onClose: () => void;
}
const StoryModal: FC<Props> = ({ story, onClose, visible }) => {
  return (
    <ModalImageLayout
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
    </ModalImageLayout>
  );
};
export default StoryModal;
