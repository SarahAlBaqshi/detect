import React from "react";
import { observer } from "mobx-react";

// Component
import RecipeItem from "./RecipeItem";

// Styles
import { View } from "native-base";

const Recipes = ({ navigation, route }) => {
  let labels;
  let images;
  let ingredients;
  if (route.params) {
    labels = route.params.labels;
    images = route.params.images;
    ingredients = route.params.ingredients;
  }

  let newObject = [];
  for (let i = 0; i < 5; i++) {
    newObject[i] = {
      label: labels[i],
      image: images[i],
      ingredient: ingredients[i],
    };
  }

  const final = newObject.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.label} />
  ));

  return <View>{final}</View>;
};

export default observer(Recipes);
