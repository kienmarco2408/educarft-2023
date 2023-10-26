import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RootStack from "./src/router/RootStack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <RootStack />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
