import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const CardLearn = () => {
  const card = [
    {
      id: 1,
      img: require("../../../storages/icon/pencil.png"),
      checkbox: require("../../../storages/icon/checkbox.png"),
    },
    {
      id: 2,
      img: require("../../../storages/icon/pencil.png"),
      checkbox: require("../../../storages/icon/checkbox1.png"),
    },
    {
      id: 3,
      img: require("../../../storages/icon/pencil.png"),
      checkbox: require("../../../storages/icon/checkbox1.png"),
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        style={{
          width: 350,
          height: 86,
          marginTop: 20,
          backgroundColor: "#F7EDDF",
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{ padding: 12, borderRightWidth: 1, borderColor: "#878787" }}
        >
          <Image
            source={data.checkbox}
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
                fontSize: 11,
                fontWeight: "700",
                color: "#1940B6",
                width: 223,
                marginBottom: 8,
              }}
            >
              Bài tập
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "black",
                width: 194,
                marginBottom: 8,
              }}
            >
              Hoàn thành bài tập tin học
            </Text>
          </View>
          <Image
            source={require("../../../storages/icon/pencil.png")}
            style={{ width: 66, height: 119 }}
          />
        </View>
      </View>
    );
  });
};

export default CardLearn;

const styles = StyleSheet.create({});
