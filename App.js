import React from "react";

//Styles
import { View } from "native-base";
import { StyleSheet } from "react-native";

//Components
import Camera from "./components/Camera";

//TEMP THEME
//main #3A5A40
// accent #588157
// secondary #DAD7CD

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
