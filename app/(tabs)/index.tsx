import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
import { ImageSource } from "expo-image";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import domtoimage from "dom-to-image";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (status === null) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ["images"],
    });
    if (!result.canceled) {
      setShowAppOptions(true);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("No images were selected");
    }
  }, []);

  const onSaveImageAsync = useCallback(async () => {
    if (!imageRef.current) return;
    try {
      if (Platform.OS === "web") {
        const dataUrl = await domtoimage.toJpeg(imageRef.current as any, {
          quality: 0.95,
          width: 320,
          height: 440,
        });
        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } else {
        const localUri = await captureRef(imageRef, { height: 440, quality: 1 });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      }
    } catch (e) {
      console.log("--- onSaveImageAsync error", e);
    }
  }, []);

  const addSticker = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View ref={imageRef} style={styles.imageContainer} collapsable={false}>
        <ImageViewer src={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={100} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsRow}>
          <IconButton
            icon={"filter"}
            label={"Reset"}
            onPress={function (): void {
              setShowAppOptions(false);
            }}
          />
          <CircleButton onPress={addSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button onPress={pickImageAsync} label="Choose a Photo" theme="primary" />
          <Button label="Use This Photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList
          onSelect={function (image: ImageSource): void {
            setPickedEmoji(image);
          }}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
    paddingTop: 40,
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
});
