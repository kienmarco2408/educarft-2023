import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const MustWork = () => {
  return (
    <View>
      <View
        style={{ width: 380, height: 93, marginTop: 42, alignSelf: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#1940B6",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Bạn có đầu việc cần làm vào chủ nhật tuần này không? Tạo trước để EDU
          CRAFT giúp bạn nào.
        </Text>
      </View>
      <View>
        <Image
          source={require("../../storages/home/cafe.png")}
          style={{
            width: 144,
            height: 173,
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
          marginTop: 37,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#2F2F2F" }}>Tạo việc mới</Text>
      </View>
    </View>
  );
};

export default MustWork;

const styles = StyleSheet.create({});
