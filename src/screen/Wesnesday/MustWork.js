import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import CardLearn from "../../screenComponent/home/Wesnesday/CardLearn";
import { ScrollView } from "react-native";

const MustWork = () => {
  return (
    <ScrollView>
      <View style={{ marginTop: 20, alignSelf: "center", marginLeft: -15 }}>
        <Image source={require("../../storages/home/ball.png")} />
      </View>
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        <Image source={require("../../storages/home/Reminder.png")} />
      </View>
      <View style={{ marginTop: 25, marginHorizontal: 28 }}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          Các công việc cần làm hôm nay:
        </Text>
        <View style={{ paddingBottom: 100 }}>
          <CardLearn />
        </View>
      </View>
    </ScrollView>
  );
};

export default MustWork;

const styles = StyleSheet.create({});
