import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const CardLearn = () => {
  const card = [
    {
      id: 1,
      color: "#EFE2FF",
    },
    {
      id: 2,
      color: "#FFEAEA",
    },
    {
      id: 3,
      color: "#EAFFF0",
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          width: 350,
          height: 86,
          marginTop: 20,
          backgroundColor: data.color,
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{ padding: 12, borderRightWidth: 1, borderColor: "#878787" }}
        >
          <Image
            source={require("../../../storages/icon/checkbox.png")}
            style={{ width: 16, height: 16, marginHorizontal: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#878787",
                width: 223,
                marginBottom: 8,
              }}
            >
              Học thêm 10 thuật ngữ Frontend
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "300",
                color: "#878787",
                width: 194,
                marginBottom: 8,
              }}
            >
              Mục tiêu: Đỗ đại học ngành CNTT
            </Text>
          </View>
          <Image
            source={require("../../../storages/icon/pencil.png")}
            style={{ width: 44, height: 81 }}
          />
        </View>
      </View>
    );
  });
};

export default CardLearn;

const styles = StyleSheet.create({});
