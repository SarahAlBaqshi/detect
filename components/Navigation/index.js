import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

// Component
import Identification from "../Identification";
import Recipes from "../Recipes";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Identification}
        options={{ headerShown: false }}
      />
      <Screen name="Recipes" component={Recipes} />
    </Navigator>
  );
};

export default observer(RootNavigator);
