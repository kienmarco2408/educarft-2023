import { View, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Saved from "../screen/Saved";
import Time from "../screen/Time";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Upload from "../screenComponent/Upload";
import DetailCard from "../screen/DetailCard";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const TimeStack = createNativeStackNavigator();
function TimeStacks() {
  return (
    <TimeStack.Navigator screenOptions={{ headerShown: false }}>
      <TimeStack.Screen name="Time Stack" component={Time} />
      <TimeStack.Screen name="DetailCard" component={DetailCard} />
    </TimeStack.Navigator>
  );
}

const SavedStack = createNativeStackNavigator();
function SavedStacks() {
  return (
    <SavedStack.Navigator screenOptions={{ headerShown: false }}>
      <SavedStack.Screen name="Saved Stack" component={Saved} />
    </SavedStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStacks() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile Stack" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#EEF1FE",
          width: "100%",
          height: "10%",
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 100,
                height: 44,
                borderRadius: 35,
                backgroundColor: focused ? "#0047D7" : "#EEF1FE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="list-ul"
                size={30}
                color={
                  focused ? "rgba(255, 255, 255, 1)" : "rgba(25, 64, 182, 0.31)"
                }
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Time"
        component={TimeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 100,
                height: 44,
                borderRadius: 35,
                backgroundColor: focused ? "#0047D7" : "#EEF1FE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="time-outline"
                size={30}
                color={
                  focused ? "rgba(255, 255, 255, 1)" : "rgba(25, 64, 182, 0.31)"
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 100,
                height: 44,
                borderRadius: 35,
                backgroundColor: focused ? "#0047D7" : "#EEF1FE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="filetext1"
                size={30}
                color={
                  focused ? "rgba(255, 255, 255, 1)" : "rgba(25, 64, 182, 0.31)"
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 44,
                  borderRadius: 35,
                  backgroundColor: focused ? "#0047D7" : "#EEF1FE",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="Trophy"
                  size={30}
                  color={
                    focused
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(25, 64, 182, 0.31)"
                  }
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Tabs" component={Tabs} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
