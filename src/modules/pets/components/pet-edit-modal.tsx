import type { FC } from "react";
import { Text } from "react-native";
import ModalLayout from "@/components/modal-layout";

interface Props {
  visible: boolean;
  onClose: (value: boolean) => void;
  pet: PetListModelI;
}
const PetEditModal: FC<Props> = ({ visible, onClose, pet }) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={() => onClose(false)}
      animationType="slide"
      title="Crear Publicación"
      transparent
    >
      <Text>PetCreatePostModal</Text>
      <Text>{pet.name}</Text>
    </ModalLayout>
  );
};
export default PetEditModal;
