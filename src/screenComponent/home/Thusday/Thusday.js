import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MustWork from "../../../screen/Thusday/MustWork";
import Challenge from "../../../screen/Thusday/Challenge";
import Timeline from "../../../screen/Thusday/Timeline";

const Thusday = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button1" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button1" && styles.selectedButtonText,
            ]}
          >
            Việc cần làm
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button2" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button2" && styles.selectedButtonText,
            ]}
          >
            Thử thách
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button3" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("button3")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button3" && styles.selectedButtonText,
            ]}
          >
            Thời gian biểu
          </Text>
        </Pressable>
      </View>
      <View>
        {selectedButton === "button1" && (
          <View>
            <MustWork />
          </View>
        )}
        {selectedButton === "button2" && (
          <View>
            <Challenge />
          </View>
        )}
        {selectedButton === "button3" && (
          <View>
            <Timeline />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 26,
  },
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 6,
  },
  selectedButton: {
    backgroundColor: "#363851",
    borderRadius: 20,
    marginHorizontal: 6,
  },
  buttonText: {
    color: "gray",
    padding: 10,
  },
  selectedButtonText: {
    color: "#FBF8F2",
    padding: 10,
  },
});

export default Thusday;
