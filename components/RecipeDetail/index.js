import React from "react";
import { View, Text } from "native-base";

// Styles
import {
  RecipeImage,
  RecipeLabel,
  Label,
  RecipeIngredients,
  StyledScrollView,
  StyledView,
} from "./styles";

const RecipeDetail = ({ route }) => {
  const { recipe } = route.params;

  const ingredients = recipe.ingredient.map((oneIngredient) => (
    <RecipeIngredients>{oneIngredient}.</RecipeIngredients>
  ));

  return (
    <StyledScrollView>
      <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
      <RecipeLabel>{recipe.label}</RecipeLabel>
      <Label>Ingredients :</Label>
      <StyledView>{ingredients}</StyledView>
    </StyledScrollView>
  );
};

export default RecipeDetail;
