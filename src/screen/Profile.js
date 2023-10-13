import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: 188,
          height: 187,
          alignSelf: "center",
          alignItems: "center",
          marginTop: 64,
        }}
      >
        <Image source={require("../storages/avt.png")} style={{}} />
        <Text style={{ fontSize: 24, fontWeight: "900", marginVertical: 10 }}>
          Minh Tiệp
        </Text>
        <Text style={{ color: "#757575" }}>@minhtiep111</Text>
      </View>
      <View style={{ height: 138, alignSelf: "center", marginTop: 45 }}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 368,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="wallet" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Ủng hộ của tôi</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            width: 368,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="user" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Trang cá nhân</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: 368,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="log-out" size={30} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Đăng xuất</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
