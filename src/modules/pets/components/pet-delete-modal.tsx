import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ModalLayout from "@/components/modal-layout";
import TextRoboto from "@/components/text-roboto";

interface Props {
  visible: boolean;
  onClose: (value: boolean) => void;
  id: string;
  handleDeletePet: (id: string) => void;
}
const PetDeleteModal: FC<Props> = ({
  visible,
  onClose,
  id,
  handleDeletePet,
}) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={() => onClose(false)}
      animationType="slide"
      title="Eliminar Mascota"
      height="h-auto"
      transparent
    >
      <TextRoboto
        text="¿Estás seguro de que deseas eliminar está mascota?"
        className="dark:text-white text-xl mt-4"
      />
      <TextRoboto
        text="Esta acción no se puede deshacer"
        className="text-red-400 my-4"
      />
      <View className="flex flex-row justify-end gap-4 w-full items-center">
        <TouchableOpacity
          className="bg-red-400 p-3 rounded-2xl"
          onPress={() => handleDeletePet(id)}
        >
          <Text className="text-white">Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onClose(false)}
          className="bg-indigo-400 p-3 rounded-2xl"
        >
          <Text className="text-white">Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ModalLayout>
  );
};

export default PetDeleteModal;
