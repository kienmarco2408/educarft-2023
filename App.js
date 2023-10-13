import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootStack from "./src/router/RootStack";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            width: 58,
            height: 58,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            backgroundColor: "#1940B6",
            borderRadius: 59,
            top: 620,
            left: 320,
            shadowColor: "black",
            shadowOffset: {
              width: 5,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          }}
        >
          <Ionicons name="cloud-upload-outline" size={30} color="white" />
        </View>
        <RootStack />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
