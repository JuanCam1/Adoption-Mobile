import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: false, // no es necesario aquí ya que usamos FileSystem
  });

  if (!result.canceled) {
    const image = result.assets[0];

    // const fileType = image.uri.split('.').pop();
    // const mimeType = fileType === "png"
    //   ? "image/png"
    //   : fileType === "jpg" || fileType === "jpeg"
    //     ? "image/jpeg"
    //     : "application/octet-stream";

    const base64 = await FileSystem.readAsStringAsync(image.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // const file = {
    //   uri: image.uri,
    //   name: image.fileName ?? "profile.jpg",
    //   type: mimeType,
    // };

    return {
      logoImage: image.uri,
      // file,
      base64,
    };
  }

  return undefined;
};
