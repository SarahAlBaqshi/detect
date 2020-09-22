import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";

// Styles
import { ListItem, RecipeImage } from "./styles";

const RecipeItem = ({ recipe }) => {
  return (
    <ListItem>
      <Text>{recipe.label}</Text>
      <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
    </ListItem>
  );
};

export default observer(RecipeItem);
