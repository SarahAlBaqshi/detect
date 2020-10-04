import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
import { Root } from "native-base";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <Root>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Root>
  );
}
