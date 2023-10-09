import { View, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Saved from "../screen/Saved";
import Time from "../screen/Time";

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
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/nav/home.png")}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? "#0047D7" : "#9BB7F0",
                }}
              ></Image>
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
                alignItems: "center",
                justifyContent: "center",
                top: "5%",
              }}
            >
              <Image
                source={require("../storages/nav/time.png")}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? "#0047D7" : "#9BB7F0",
                }}
              ></Image>
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
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/nav/saved.png")}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? "#0047D7" : "#9BB7F0",
                }}
              ></Image>
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
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? "#0047D7" : "#D9E3F9",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/nav/profile.png")}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#9BB7F0" : "#9BB7F0",
                  }}
                ></Image>
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
