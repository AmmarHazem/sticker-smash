import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string>();

  const pickImageAsync = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ["images"],
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("No images were selected");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer src={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button onPress={pickImageAsync} label="Choose a Photo" theme="primary" />
        <Button label="Use This Photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 3,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  aboutLink: {
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 4,
    color: "black",
    paddingHorizontal: 40,
    paddingVertical: 10,
    // padding: 8,
  },
});
