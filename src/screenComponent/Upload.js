import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";

const Upload = () => {
  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === "success") {
        console.log(
          "Selected document:",
          result.uri,
          result.type, // MIME type
          result.name, // file name
          result.size // file size
        );
      } else {
        console.log("Document selection canceled or failed.");
      }
    } catch (error) {
      console.error("Error picking a document:", error);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={selectDoc}
        style={{
          width: 58,
          height: 58,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "#1940B6",
          borderRadius: 59,
          top: 720,
          left: 320,
          shadowColor: "black",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}
      >
        <Ionicons name="cloud-upload-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({});
