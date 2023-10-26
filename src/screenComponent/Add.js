import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Add = () => {
  return (
    <TouchableOpacity
      style={{
        width: 58,
        height: 58,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#1940B6",
        borderRadius: 59,
        top: 720,
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
      <FontAwesome
        name="calendar-plus-o"
        size={24}
        color="white"
        style={{ marginLeft: 3 }}
      />
    </TouchableOpacity>
  );
};

export default Add;

const styles = StyleSheet.create({});
