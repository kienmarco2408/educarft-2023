import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";
import BannerTimer from "./BannerTimer";

const FocusTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(900); // 15 minutes in seconds
  const [sessions, setSessions] = useState(4); // Total sessions
  const [currentSession, setCurrentSession] = useState(1); // Current session number
  const [stopTime, setStopTime] = useState(false); // New state variable for stop time message

  useEffect(() => {
    let timer;

    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      if (currentSession < sessions) {
        // Start the next session
        setTimeRemaining(900); // Reset the timer to 15 minutes
        setCurrentSession(currentSession + 1); // Increase the current session
      } else {
        // End all sessions
        clearInterval(timer);
        setIsRunning(false);
        setStopTime(true);
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeRemaining, currentSession, sessions]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeRemaining(900);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(900); // Reset the timer to 15 minutes
    setSessions(4); // Reset the session count
    setCurrentSession(1); // Reset to the first session
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
          marginTop: 45,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(0, 0, 0, 0.22)",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="left" size={30} color="white" />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(0, 0, 0, 0.22)",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="close" size={30} color="white" />
        </View>
      </View>
      <View style={{ marginTop: 35, alignSelf: "center" }}>
        <BannerTimer />
      </View>
      <View style={{ alignItems: "center" }}>
        <Svg width={400} height={400}>
          <Circle
            cx={200} // Tọa độ x của tâm hình tròn
            cy={200} // Tọa độ y của tâm hình tròn
            r={150} // Bán kính của hình tròn
            fill="transparent"
            stroke="rgba(89, 195, 161, 0.5)"
            strokeWidth="16"
          />

          <Circle
            cx={200} // Tọa độ x của tâm hình tròn tiến trình
            cy={200} // Tọa độ y của tâm hình tròn tiến trình
            r={150} // Bán kính của hình tròn tiến trình
            fill="transparent"
            stroke="#59C3A1"
            strokeWidth="16"
            strokeDasharray={(2 * Math.PI * 150).toFixed(2)} // Sửa giá trị tương ứng với bán kính 100
            strokeDashoffset={(2 * Math.PI * 150 * timeRemaining) / 900} // Sửa giá trị tương ứng với bán kính 100
          />
          <View>
            <Text style={styles.text}>
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </Text>
            <Text style={styles.sessionText}>
              {currentSession} / {sessions} phiên
            </Text>
          </View>
        </Svg>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: "#878787" }}>Tập trung trong vòng 15 phút</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "60%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={resetTimer}
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#F1F1F1",
              borderRadius: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="rotate-left"
              size={15}
              color="#878787"
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={isRunning ? pauseTimer : startTimer}
            style={{
              width: 70,
              height: 70,
              backgroundColor: isRunning ? "#1940B6" : "#E0483C",
              borderRadius: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name={isRunning ? "pause" : "play"}
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stopTimer}
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#F1F1F1",
              borderRadius: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="stop" size={15} color="#878787" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FocusTimer;
const styles = StyleSheet.create({
  text: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#59C3A1",
    textAlign: "center",
    marginTop: "40%",
  },
  sessionText: {
    fontSize: 14,
    color: "#878787",
    textAlign: "center",
    marginTop: "1%",
  },
});
