import { Link } from "expo-router";
import { Text, View } from "react-native";

const PetScreen = () => {
  return (
    <View>
      <Text>Pet Screen</Text>
      <Link href="/home/(pet)/info/1">Macota</Link>
    </View>
  );
};
export default PetScreen;
