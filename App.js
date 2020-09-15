import React, { useState } from "react";

//Styles
import { View } from "native-base";
import { StyleSheet } from "react-native";

//Components
import Camera from "./components/Camera";

export default function App() {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
