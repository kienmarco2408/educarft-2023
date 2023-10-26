import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <View style={{ width: "100%", height: 275 }}>
        <View style={{ height: 242, backgroundColor: "#1940B6" }}>
          <Image
            source={require("../../storages/time/clock.png")}
            style={{
              width: 100,
              height: 100,
              right: 0,
              position: "absolute",
            }}
          />

          <Text
            style={{
              width: 380,
              height: 34,
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "700",
              fontSize: 24,
              color: "white",
              marginTop: 55,
            }}
          >
            Đồng hồ Pomodoro
          </Text>
          <Text
            style={{
              width: 350,
              height: 58,
              fontSize: 16,
              alignSelf: "center",
              marginTop: 24,
              color: "#FFF", // or use a variable if you have one
              textAlign: "center",
              textShadowColor: "rgba(0, 0, 0, 0.71)",
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 1,
              fontSize: 16,
              lineHeight: 17,
            }}
          >
            Phương pháp Pomodoro, một cách quản lý thời gian đơn giản nhưng hiệu
            quả, giúp bạn tập trung và nâng cao năng suất.
          </Text>
          <View
            style={{
              flexDirection: "row",
              height: 48,
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 4,
              alignSelf: "center",
              marginTop: 38,
            }}
          >
            <View
              style={{
                width: 241,
                height: 48,
                borderRadius: 10,
                borderWidth: 3,
                paddingHorizontal: 10,
                backgroundColor: "#F5C443",
                borderColor: "#FFFFFF",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  textAlign: "center",
                  lineHeight: 20,
                }}
              >
                Tìm hiểu thêm
              </Text>
            </View>
            <Image
              source={require("../../storages/time/clockbtn.png")}
              style={{
                width: 77,
                height: 78,
                position: "absolute",
                top: -13,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
