import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import CardLearn from "../../screenComponent/home/Tuesday/CardLearn";
import CardLearn_1 from "../../screenComponent/home/Wesnesday/CardLearn_1";

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
          source={require("../../storages/home/eye.png")}
          style={{ width: 84, height: 82, marginRight: 16 }}
        />
        <Text
          style={{
            fontSize: 20,
            width: 239.63,
            fontWeight: "700",
            color: "#1940B6",
          }}
        >
          Cố lên, bạn sắp đạt được mục tiêu rồi!
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <CardLearn_1 />
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
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#2F2F2F" }}>Tạo thử thách</Text>
      </View>
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({});
