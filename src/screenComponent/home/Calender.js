import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Calenders from "./Calenders";

const Calender = () => {
  return (
    <View style={{ backgroundColor: "#363851", paddingTop: 16, height: 140 }}>
      <View
        style={{
          height: 19,
          flexDirection: "row",
          marginBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 184 }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "white",
              marginRight: 10,
            }}
          >
            Tháng 03.2022
          </Text>
          <AntDesign name="right" size={20} color="white" />
        </View>
        <Text style={{ color: "white", width: 184, textAlign: "right" }}>
          Hôm qua
        </Text>
      </View>
      <View>
        <Calenders />
      </View>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  textday: {
    fontSize: 12,
    color: "#9D9D9D",
    paddingTop: 12,
  },
  textnum: {
    fontSize: 14,
    color: "white",
    padding: 10,
  },
  dayview: {},
});
