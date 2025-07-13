import * as ImagePicker from "expo-image-picker";
import { fetchBlob } from "@/utils/blob";

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const logoImage = result.assets[0];

    const blob = await fetchBlob(logoImage.uri);

    const file = {
      uri: logoImage.uri,
      name: "profile.jpg",
      type: blob.type || "image/jpeg",
    };

    return {
      file,
      logoImage: logoImage.uri,
    };
  }

  return undefined;
};
