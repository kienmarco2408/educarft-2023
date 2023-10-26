import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../screenComponent/time/Header";
import CardTime from "../screenComponent/time/CardTime";
import Add from "../screenComponent/Add";
import { useNavigation } from "@react-navigation/native";

const Time = () => {
  const navigation = useNavigation();
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Add />
      <View style={{ width: "100%", height: 275 }}>
        <Header />
      </View>
      <View
        style={{
          width: 365,
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Lịch sử</Text>
        <View>
          <CardTime />
        </View>
      </View>
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 36 }}
        onPress={() => navigation.navigate("DetailCard")}
      >
        <View
          style={{
            width: 275,
            height: 56,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#7E7CEE",
            backgroundColor: "#7E7CEE",
            borderRadius: 55,
            padding: 12,
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
            Bấm giờ
          </Text>
          <Image source={require("../storages/time/duotone/clock.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({});
