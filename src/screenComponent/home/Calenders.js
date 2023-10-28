import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";
import Wesnesday from "./Wesnesday/Wesnesday";
import Thusday from "./Thusday/Thusday";
import Friday from "./Friday/Friday";
import Saturday from "./Saturday/Saturday";
import Sunday from "./Sunday/Sunday";

const Calenders = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View>
      <View style={styles.container}>
        <AntDesign name="left" size={20} color="white" />
        <View
          style={{
            width: 354,
            height: 60,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={[
              styles.button,
              selectedButton === "button1" && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress("button1")}
          >
            <Text
              style={[
                styles.textday,
                selectedButton === "button1" && styles.selectedButtonText,
              ]}
            >
              Thứ 2
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button1" && styles.textnumSelect,
              ]}
            >
              07
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
                styles.textday,
                selectedButton === "button2" && styles.selectedButtonText,
              ]}
            >
              Thứ 3
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button2" && styles.textnumSelect,
              ]}
            >
              08
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
                styles.textnumSelect07,
                selectedButton === "button3" && styles.selectedButtonText,
              ]}
            >
              Thứ 4
            </Text>
            <View style={styles.viewnumSelect07}>
              <Text
                style={[
                  styles.textnum,
                  selectedButton === "button3" && styles.textnumSelect07,
                ]}
              >
                09
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              selectedButton === "button4" && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress("button4")}
          >
            <Text
              style={[
                styles.textday,
                selectedButton === "button4" && styles.selectedButtonText,
              ]}
            >
              Thứ 5
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button4" && styles.textnumSelect,
              ]}
            >
              10
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              selectedButton === "button5" && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress("button5")}
          >
            <Text
              style={[
                styles.textday,
                selectedButton === "button5" && styles.selectedButtonText,
              ]}
            >
              Thứ 6
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button5" && styles.textnumSelect,
              ]}
            >
              11
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              selectedButton === "button6" && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress("button6")}
          >
            <Text
              style={[
                styles.textday,
                selectedButton === "button6" && styles.selectedButtonText,
              ]}
            >
              Thứ 7
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button6" && styles.textnumSelect,
              ]}
            >
              12
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              selectedButton === "button7" && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress("button7")}
          >
            <Text
              style={[
                styles.textday,
                selectedButton === "button7" && styles.selectedButtonText,
              ]}
            >
              C.Nhật
            </Text>
            <Text
              style={[
                styles.textnum,
                selectedButton === "button7" && styles.textnumSelect,
              ]}
            >
              09
            </Text>
          </Pressable>
        </View>
        <AntDesign name="right" size={20} color="white" />
      </View>

      <View>
        {selectedButton === "button1" && (
          <View>
            <Monday />
          </View>
        )}
        {selectedButton === "button2" && (
          <View>
            <Tuesday />
          </View>
        )}
        {selectedButton === "button3" && (
          <View>
            <Wesnesday />
          </View>
        )}
        {selectedButton === "button4" && (
          <View>
            <Thusday />
          </View>
        )}
        {selectedButton === "button5" && (
          <View>
            <Friday />
          </View>
        )}
        {selectedButton === "button6" && (
          <View>
            <Saturday />
          </View>
        )}
        {selectedButton === "button7" && (
          <View>
            <Sunday />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingBottom: 10,
    marginTop: 12,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 6,
  },
  selectedButton: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 6,
  },
  textday: {
    fontSize: 12,
    color: "#9D9D9D",
    paddingTop: 12,
    padding: 10,
  },
  selectedButtonText: {
    color: "#9D9D9D",
    padding: 10,
    fontSize: 12,
    paddingTop: 12,
  },
  textnum: {
    fontSize: 14,
    color: "white",
    padding: 10,
  },
  textnumSelect: {
    fontSize: 14,
    color: "#363851",
    padding: 10,
  },
  textnumSelect07: {
    fontSize: 14,
    color: "white",
    padding: 10,
  },
  viewnumSelect07: {
    backgroundColor: "#E0483C",
    borderRadius: 30,
  },
});

export default Calenders;
