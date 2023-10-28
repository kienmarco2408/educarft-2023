import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Challenge = () => {
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
          Tạo thử thách cho bản thân đi chứ? Cải thiện sức khỏe thì sao?
        </Text>
      </View>
      <View>
        <Image
          source={require("../../storages/home/popcorn.png")}
          style={{
            width: 194,
            height: 164,
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
        <Text style={{ fontSize: 16, color: "#2F2F2F" }}>Tạo thử thách</Text>
      </View>
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({});
