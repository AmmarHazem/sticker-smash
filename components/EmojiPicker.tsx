import { MaterialIcons } from "@expo/vector-icons";
import { FC, PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const EmojiPicker: FC<EmojiPickerProps> = ({ isVisible, onClose, children }) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
};

type EmojiPickerProps = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

const styles = StyleSheet.create({
  modalContent: {
    height: 200,
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: 40,
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});

export default EmojiPicker;
