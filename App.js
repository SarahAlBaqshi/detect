import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
import { Root } from "native-base";

export default function App() {
  return (
    <Root>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Root>
  );
}
