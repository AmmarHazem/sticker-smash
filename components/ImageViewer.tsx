import { Image, ImageSource } from "expo-image";
import { FC } from "react";
import { StyleSheet } from "react-native";

const ImageViewer: FC<ImageViewerProps> = ({ src }) => {
  return <Image source={src} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

interface ImageViewerProps {
  src: ImageSource;
}

export default ImageViewer;
