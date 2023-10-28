import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Calender from "../screenComponent/home/Calender";
import Add from "../screenComponent/Add";

const Home = () => {
  return (
    <View>
      <View
        style={{
          paddingTop: 45,
          paddingHorizontal: 30,
          backgroundColor: "#363851",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../storages/avt1.png")}
            style={{ width: 46, height: 46 }}
          />
          <Text
            style={{
              width: 243.29,
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              marginLeft: 15,
            }}
          >
            Minh Tiệp
          </Text>
        </View>
        <Image source={require("../storages/icon/bell1.png")} />
      </View>
      <View>
        <Calender />
      </View>
      <Add />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
