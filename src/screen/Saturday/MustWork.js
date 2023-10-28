import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const MustWork = () => {
  return (
    <View>
      <View
        style={{ width: 333, height: 62, marginTop: 54, alignSelf: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#1940B6",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Tốt lắm! Bạn đã hoàn thành các công việc đề ra trong ngày!
        </Text>
      </View>
      <View>
        <Image
          source={require("../../storages/home/rainbow.png")}
          style={{
            width: 226,
            height: 171,
            alignSelf: "center",
            marginTop: 36,
          }}
        />
      </View>
      <View
        style={{
          width: 174,
          height: 48,
          borderWidth: 1,
          borderColor: "#2F2F2F",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 63,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#2F2F2F" }}>Xem lại</Text>
      </View>
    </View>
  );
};

export default MustWork;

const styles = StyleSheet.create({});
