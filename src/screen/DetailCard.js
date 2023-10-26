import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FocusTimer from "../screenComponent/time/FocusTimer";
import Add from "../screenComponent/Add";

const DetailCard = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Add />
      <FocusTimer />
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({});
