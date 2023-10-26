import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BannerTimer = () => {
  return (
    <View
      style={{
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "#1940B6",
        width: 365,
        height: 82,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
      }}
    >
      <Image
        source={require("../../storages/time/card1.png")}
        style={{ width: 58, height: 58 }}
      />
      <View style={{ width: 134, marginLeft: 8 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
            color: "#363851",
          }}
        >
          Đọc sách
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#878787",
            marginTop: 5,
          }}
        >
          60 phút
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", width: 125, marginLeft: 8 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
            color: "#363851",
          }}
        >
          1/4 phiên
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#878787",
            marginTop: 5,
          }}
        >
          0 phút
        </Text>
      </View>
    </View>
  );
};

export default BannerTimer;

const styles = StyleSheet.create({});
