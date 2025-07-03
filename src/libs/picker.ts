import { fetchBlob } from "@/utils/blob";
import * as ImagePicker from "expo-image-picker";

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const logoImage = result.assets[0].uri;
    const blob = await fetchBlob(result.assets[0].uri);

    const file = {
      uri: logoImage,
      name: "profile.jpg",
      type: blob.type,
    };
    return {
      file,
      logoImage,
    };
  }
  return undefined;
};
