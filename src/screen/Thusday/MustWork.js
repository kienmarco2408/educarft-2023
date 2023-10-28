import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import CardLearn_1 from "../../screenComponent/home/Wesnesday/CardLearn_1";
import CardLearn from "../../screenComponent/home/Wesnesday/CardLearn";
import { ScrollView } from "react-native";

const MustWork = () => {
  return (
    <ScrollView>
      <View
        style={{ width: 333, height: 62, marginTop: 20, alignSelf: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#1940B6",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Xem trước các công việc cần làm trong ngầy mai nào!
        </Text>
      </View>
      <View>
        <Image
          source={require("../../storages/home/Reminder1.png")}
          style={{
            alignSelf: "center",
            marginTop: 29,
          }}
        />
      </View>
      <View style={{ alignSelf: "center", paddingBottom: 70 }}>
        <CardLearn />
      </View>
    </ScrollView>
  );
};

export default MustWork;

const styles = StyleSheet.create({});
