import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const FileCard = () => {
  const file = [
    {
      id: 1,
      title: "LÝ-THUYẾT-NHẬT-BẢN-TIẾT-2.pdf",
      colorStar: "#F5C443",
      nameIcon: "star",
      day: "20/08/2022",
      img: require("../../storages/icon/pdf.png"),
    },
    {
      id: 2,
      title: "LY-THUYET-CHUYEN-DE-CAC-NUOC-TBCN-GIUA-HAI-CUOC-CTTG-BÀI-11-14",
      colorStar: "#363851",
      nameIcon: "staro",
      day: "19/08/2022",
      img: require("../../storages/icon/word.png"),
    },
    {
      id: 3,
      title: "Đạo hàm",
      colorStar: "#F5C443",
      nameIcon: "star",
      day: "19/08/2022",
      img: require("../../storages/icon/pdf.png"),
    },
    {
      id: 4,
      title: "Slide thuyết trình Văn",
      colorStar: "#363851",
      nameIcon: "staro",
      day: "12/08/2022",
      img: require("../../storages/icon/pdf.png"),
    },
  ];
  return file.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: "row",
          height: 37,
          marginHorizontal: 20,
          marginTop: 27,
        }}
      >
        <Image source={data.img} style={{ width: 37, height: 37 }} />
        <View
          style={{
            marginLeft: 10,
            width: 295,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              width: 295,
              height: 16,
            }}
          >
            {data.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name={data.nameIcon} size={15} color={data.colorStar} />
            <Text style={{ fontSize: 12, color: "#757575", marginLeft: 6 }}>
              {data.day}
            </Text>
          </View>
        </View>
        <Feather name="more-horizontal" size={16} color="black" />
      </View>
    );
  });
};

export default FileCard;

const styles = StyleSheet.create({});
