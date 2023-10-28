import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import CardLearn from "../../screenComponent/home/Tuesday/CardLearn";

const Challenge = () => {
  return (
    <View>
      <View
        style={{
          width: 368,
          height: 93,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 37,
        }}
      >
        <Image
          source={require("../../storages/home/rainbow1.png")}
          style={{ width: 100, height: 75, marginRight: 16 }}
        />
        <Text
          style={{
            fontSize: 20,
            width: 239.63,
            fontWeight: "700",
            color: "#1940B6",
          }}
        >
          Tốt lắm! Bạn đã hoàn thành thử thách!
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <CardLearn />
      </View>
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({});
