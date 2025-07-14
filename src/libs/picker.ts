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
    const image = result.assets[0];

    const blobImage = await fetchBlob(image.uri);


    const file = {
      uri: image.uri,
      name: image.fileName ?? "profile.jpg",
      type: blobImage.type,
    };

    return {
      logoImage: image.uri,
      file,
    };
  }

  return undefined;
}