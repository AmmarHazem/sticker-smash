import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer src={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a Photo" theme="primary" />
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
