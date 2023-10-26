import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CardTime = () => {
  const card = [
    {
      id: 1,
      title: "Đọc sách",
      time: 60,
      img: require("../../storages/time/card1.png"),
    },
    {
      id: 2,
      title: "Học bài",
      time: 120,
      img: require("../../storages/time/card2.png"),
    },
    {
      id: 3,
      title: "Vẽ tranh",
      time: 60,
      img: require("../../storages/time/card3.png"),
    },
  ];
  return card.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          width: 365,
          height: 82,
          padding: 12,
          gap: 16,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#F1F1F1", // or use a variable if you have one
          backgroundColor: "#FFF", // or use a variable if you have one
          shadowColor: "rgba(0, 0, 0, 0.08)",
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 6,
          shadowOpacity: 1,
          marginTop: 24,
        }}
      >
        <View
          style={{
            width: 341,
            height: 58,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={data.img} style={{ width: 58, height: 58 }} />
          </View>
          <View style={{ width: 223, marginLeft: 8 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                color: "#363851",
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#878787",
                marginTop: 5,
              }}
            >
              {data.time} phút
            </Text>
          </View>
          <View
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#59C3A1",
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome
              name="play"
              size={24}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
      </View>
    );
  });
};

export default CardTime;

const styles = StyleSheet.create({});
