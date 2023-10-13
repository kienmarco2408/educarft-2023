import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Saved = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 45,
        }}
      >
        <View style={styles.searchBar}>
          <Ionicons
            name="ios-search-outline"
            size={24}
            color="#828282"
            style={styles.searchIcon}
          />

          <Text style={styles.textInput}>Tìm kiếm</Text>
        </View>
        <Image source={require("../storages/icon/bell.png")} />
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white0",
    height: 45,
    borderRadius: 15,
    width: 326,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    color: "#828282",
  },
});
