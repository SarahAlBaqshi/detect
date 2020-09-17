import React, { useState } from "react";

//Styles
import { View } from "native-base";
import { StyleSheet } from "react-native";

//Components
import Identification from "./components/Identification";
import Test from "./components/Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
      {/* <Identification /> */}
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
