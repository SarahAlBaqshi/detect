import React, { useState } from "react";
import { View, Text, Button, Icon } from "native-base";
import { CheckBox } from "react-native-elements";

// Styles
import {
  RecipeImage,
  RecipeLabel,
  Label,
  RecipeIngredients,
  StyledScrollView,
  StyledView,
} from "./styles";
import { Linking, Alert } from "react-native";
import { ButtonStyled } from "../Recipes/styles";

const RecipeDetail = ({ route }) => {
  const { recipe } = route.params;
  const [checked, setChecked] = useState(false);
  const ingredients = recipe.ingredient.map((oneIngredient) => (
    <CheckBox
      title={oneIngredient}
      checked={checked}
      onPress={() => setChecked(!checked)}
    />
    // <RecipeIngredients>{oneIngredient}.</RecipeIngredients>
  ));

  return (
    <StyledScrollView>
      <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
      <RecipeLabel>{recipe.label}</RecipeLabel>
      <Label>Ingredients :</Label>

      <StyledView>{ingredients}</StyledView>
      <ButtonStyled onPress={() => Linking.openURL(recipe.url)}>
        <Text>View Entire Recipe</Text>
      </ButtonStyled>
      <Button transparent>
        <Icon
          type="Ionicons"
          name="ios-heart-empty"
          style={{ color: "red", fontSize: 20 }}
        />
      </Button>
    </StyledScrollView>
  );
};

export default RecipeDetail;
