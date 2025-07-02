import { useState } from "react";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import noUser from "../../../../assets/images/no-user.jpg";
import { fetchBlob } from "@/utils/blob";
const noUserImage = Image.resolveAssetSource(noUser).uri;

const useRegister = () => {
  const [logoImage, setLogoImage] = useState(noUserImage);
  const [logoBlob, setLogoBlob] = useState<Blob | null>(null);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    location: "",
    address: "",
    email: "",
    password: "",
  });

  type UserKey = keyof typeof user;
  const handleChange = (name: UserKey, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(logoImage);
    console.log(user);
    console.log(logoBlob);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const blob = await fetchBlob(result.assets[0].uri);
      setLogoImage(result.assets[0].uri);
      setLogoBlob(blob);
    }
  };

  return {
    logoImage,
    user,
    handleChange,
    handleSubmit,
    pickImage,
  };
};

export default useRegister;
