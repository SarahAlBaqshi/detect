import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

// Button
import GoBackButton from "../Buttons/GoBackButton";

// Component
import Identification from "../Identification";
import RecipesList from "../RecipesList";
import RecipeDetail from "../RecipeDetail";
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
      <Screen
        name="RecipesList"
        component={RecipesList}
        options={{
          headerStyle: { backgroundColor: "#3A5A40" },
          headerTitleStyle: { color: "white", fontSize: 20 },
          headerLeft: () => <GoBackButton />,
        }}
      />

      <Screen
        name="Recipes"
        component={Recipes}
        options={{
          headerTitle: "Bookmarks",
          headerStyle: { backgroundColor: "#3A5A40" },
          headerTitleStyle: { color: "white", fontSize: 20 },
          headerLeft: () => <GoBackButton />,
        }}
      />

      <Screen
        name="Recipe Detail"
        component={RecipeDetail}
        options={{
          headerStyle: { backgroundColor: "#3A5A40" },
          headerTitleStyle: { color: "white", fontSize: 20 },
          headerLeft: () => <GoBackButton detailPage />,
          headerTransparent: true,
          headerTitle: false,
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);
