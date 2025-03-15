import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Route not found" }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>+++ Route not found +++</Text>
        <Link
          href={"/"}
          style={{ marginTop: 60, backgroundColor: "white", paddingHorizontal: 40, paddingVertical: 20, color: "black" }}
        >
          Home
        </Link>
      </View>
    </>
  );
}
