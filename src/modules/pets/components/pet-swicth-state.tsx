import type { FC } from "react";
import { Switch, View } from "react-native";
import useStatePet from "../hooks/use-state-pet";

interface Props {
  stateId: number;
  id: string;
}

const PetSwitchState: FC<Props> = ({ stateId, id }) => {
  const { handleToggleState, stateSwitch } = useStatePet(stateId, id);

  return (
    <View className="h-12 w-12 flex justify-center items-center rounded-2xl ">
      <Switch
        trackColor={{ false: "#767577", true: "#4f46e5" }}
        thumbColor="#f1f5f9"
        ios_backgroundColor="#3e3e3e"
        value={stateSwitch}
        onValueChange={handleToggleState}
      />
    </View>
  );
};

export default PetSwitchState;
