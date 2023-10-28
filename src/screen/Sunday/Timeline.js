import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Timeline = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ fontWeight: "700", marginBottom: 33, marginLeft: 31 }}>
        Chủ nhật, ngày 13 tháng 03 năm 2022
      </Text>
      <View>
        <View style={{ width: 298, height: 62, alignSelf: "center" }}>
          <Text
            style={{
              fontSize: 20,
              color: "#1940B6",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Hãy tạo kế hoạch cho ngày CUỐI TUẦN nào!!
          </Text>
        </View>
        <View>
          <Image
            source={require("../../storages/home/xucxich.png")}
            style={{
              width: 239,
              height: 190,
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
          <Text style={{ fontSize: 16, color: "#2F2F2F" }}>Tạo kế hoạch</Text>
        </View>
      </View>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({});
