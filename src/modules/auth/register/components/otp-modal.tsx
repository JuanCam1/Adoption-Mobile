import AnimatedStripeOTPInput from "@/components/input-otp";
import ModalLayout from "@/components/modal-image-layout";
import TextRoboto from "@/components/text-roboto";
import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  user: UserModelI;
  visible: boolean;
  onClose: () => void;
}
const OTPModal: FC<Props> = ({ user, onClose, visible }) => {
  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      animationType="slide"
      title="Activar Cuenta"
      image={user.pathPicture}
      height="h-[60%]"
      transparent
    >
      <TextRoboto
        className="dark:text-white text-2xl font-Roboto_Bold my-6"
        text={`Hola ${user.name}`}
      />
      <TextRoboto
        className="dark:text-neutral-400 leading-6 text-pretty "
        text={`Digita el código enviado a tu correo electronico ${user.email}  para activar la cuenta en AdoptaYa.`}
      />
      <View className="w-full items-center justify-center mt-6 mb-8">
        <AnimatedStripeOTPInput />
      </View>
      <TouchableOpacity className="bg-indigo-500 w-full rounded-md h-12 flex items-center justify-center">
        <TextRoboto text="Activar" className="text-white text-center py-2 " />
      </TouchableOpacity>
    </ModalLayout>
  );
};

export default OTPModal;
