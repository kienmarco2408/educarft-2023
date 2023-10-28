import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Timeline = () => {
  const card = [
    {
      id: 1,
      title: "Thức dậy, đánh răng, ăn sáng",
      subtitle: "Cá nhân",
      coloricon: "#E0483C",
      time1: "06:00",
      time2: "07:00",
    },
    {
      id: 2,
      title: "Học ở trường",
      subtitle: "Học chính",
      coloricon: "#F1F1F1",
      time1: "07:10",
      time2: "12:00",
    },
    {
      id: 3,
      title: "Ăn trưa",
      subtitle: "Cá nhân",
      coloricon: "#F1F1F1",
      time1: "12:10",
      time2: "13:00",
    },
    {
      id: 4,
      title: "Giải trí",
      subtitle: "Cá nhân",
      coloricon: "#F1F1F1",
      time1: "13:10",
      time2: "14:00",
    },
    {
      id: 5,
      title: "Học bài",
      subtitle: "Cá nhân",
      coloricon: "#F1F1F1",
      time1: "14:10",
      time2: "15:30",
    },
  ];

  return (
    <ScrollView style={{ marginTop: 24, marginLeft: 30 }}>
      <Text style={{ fontWeight: "700", marginBottom: 30 }}>
        Thứ 4, ngày 09 tháng 03 năm 2022
      </Text>
      <View style={{ paddingBottom: 50 }}>
        {card.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                width: 368,
                height: 90,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 90,
                  marginRight: 14,
                }}
              >
                <View
                  style={{
                    paddingVertical: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ marginBottom: "100%" }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#878787",
                        fontWeight: "300",
                      }}
                    >
                      {data.time1}
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#878787",
                        fontWeight: "300",
                      }}
                    >
                      {data.time2}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 8,
                  borderRadius: 10,
                  backgroundColor: "white",
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 6,
                }}
              >
                <View style={{ padding: 10, paddingBottom: 14 }}>
                  <View style={{ width: 301, alignItems: "flex-end" }}>
                    <Feather name="more-horizontal" size={24} color="black" />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: 301,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "500" }}>{data.title}</Text>
                    <MaterialCommunityIcons
                      name="alarm"
                      size={24}
                      color={data.coloricon}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "300",
                      color: "#878787",
                    }}
                  >
                    {data.subtitle}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Timeline;

const styles = StyleSheet.create({});
