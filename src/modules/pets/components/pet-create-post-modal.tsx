import type { FC } from "react";
import { Text } from "react-native";
import ModalLayout from "@/components/modal-layout";

interface Props {
  visible: boolean;
  onClose: () => void;
}
const PetCreatePostModal: FC<Props> = ({ visible, onClose }) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      animationType="slide"
      title="Crear Publicación"
      transparent
    >
      <Text>PetCreatePostModal</Text>
    </ModalLayout>
  );
};
export default PetCreatePostModal;
