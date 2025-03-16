import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon(props) {
            return <Ionicons name={props.focused ? "home-sharp" : "home-outline"} color={props.color} size={props.size} />;
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon(props) {
            return (
              <Ionicons
                name={props.focused ? "information-circle" : "information-circle-outline"}
                color={props.color}
                size={props.size}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
