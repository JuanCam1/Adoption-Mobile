import * as ImagePicker from "expo-image-picker";
import { ImageManipulator } from 'expo-image-manipulator';

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    return undefined;
  }

  const logoImage = result.assets[0];
  const compressed = await ImageManipulator.manipulateAsync(
    logoImage.uri,
    [
      { resize: { width: 500, height: 500 } },
    ],
    {
      compress: 0.6,
      format: ImageManipulator.SaveFormat.JPEG,
    }
  );

  const file = {
    uri: compressed.uri,
    name: "profile.jpg",
    type: ImageManipulator.SaveFormat.JPEG,
  };
  return {
    file,
    logoImage: logoImage.uri,
  };

};
