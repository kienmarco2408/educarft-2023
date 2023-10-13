import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Saved = () => {
  const file = [
    {
      id: 1,
      title: "LÝ-THUYẾT-NHẬT-BẢN-TIẾT-2.pdf",
      icon: "",
      day: "20/08/2022",
      img: require("../storages/icon/pdf.png"),
    },
    {
      id: 2,
      title: "LY-THUYET-CHUYEN-DE-CAC-NUOC-TBCN-GIUA-HAI-CUOC-CTTG-BÀI-11-14",
      icon: "",
      day: "20/08/2022",
      img: require("../storages/icon/pdf.png"),
    },
    {
      id: 3,
      title: "Đạo hàm",
      icon: "",
      day: "20/08/2022",
      img: require("../storages/icon/pdf.png"),
    },
    {
      id: 4,
      title: "Slide thuyết trình Văn",
      icon: "",
      day: "20/08/2022",
      img: require("../storages/icon/pdf.png"),
    },
  ];
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View
        style={{ height: 109, backgroundColor: "#F9FAFF", borderRadius: 25 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 45,
          }}
        >
          <View style={styles.searchBar}>
            <Ionicons
              name="ios-search-outline"
              size={24}
              color="#828282"
              style={styles.searchIcon}
            />

            <Text style={styles.textInput}>Tìm kiếm</Text>
          </View>
          <Image source={require("../storages/icon/bell.png")} />
        </View>
      </View>

      <View>
        <Image
          source={require("../storages/img1.png")}
          style={{ height: 176 }}
        />
        <View
          style={{
            width: 368,
            height: 96,
            alignSelf: "center",
            marginVertical: 24,
            borderBottomWidth: 1,
            borderColor: "#EEF1FE",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 17 }}>
            Làm việc khi không có mạng
          </Text>
          <Text style={{ fontSize: 12 }}>
            Giờ đây bạn có thể mở cá tệp tài liệu học tập trên thiết bị này khi
            không có kết nối Internet. Educraft - Lưu trữ tài liệu và học tập ở
            mọi nơi.
          </Text>
        </View>
        <View
          style={{
            width: 158,
            height: 16,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "6%",
          }}
        >
          <Text style={{ color: "#A4A2A2", marginRight: 4 }}>
            Được tôi mở lần cuối
          </Text>
          <AntDesign name="arrowdown" size={16} color="#A4A2A2" />
        </View>
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 45,
    borderRadius: 15,
    width: 326,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    color: "#828282",
  },
});
