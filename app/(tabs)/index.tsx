import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>Home Screen</Text>
      <Link style={styles.aboutLink} href={"/about"}>
        About
      </Link>
      {/* <Link style={styles.aboutLink} href={"/abc"}>
        Not Found
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
