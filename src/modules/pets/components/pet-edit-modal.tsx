import type { FC } from "react";
import { Text } from "react-native";
import ModalLayout from "@/components/modal-layout";
import type { mascotas } from "@/data/data_pet";

interface Props {
  visible: boolean;
  onClose: () => void;
  pet: (typeof mascotas)[0];
}
const PetEditModal: FC<Props> = ({ visible, onClose, pet }) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      animationType="slide"
      title="Crear Publicación"
      transparent
    >
      <Text>PetCreatePostModal</Text>
      <Text>{pet.nombre}</Text>
    </ModalLayout>
  );
};
export default PetEditModal;
