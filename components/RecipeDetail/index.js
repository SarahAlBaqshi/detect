import React, { useState } from "react";
import { View, Text, Button, Icon, Row, Toast } from "native-base";
import { CheckBox } from "react-native-elements";
// TODO MAKE NUTRITION LABEL
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
import { ButtonStyled } from "../RecipesList/styles";
import bookmarkStore from "../../stores/bookmarkStore";

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
      <Row>
        <Button
          transparent
          onPress={async () => {
            await bookmarkStore.addBookmark(recipe);
            Toast.show({
              text: `Bookmarked ${recipe.label}`,
              textStyle: {
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              },
              duration: 3000,
              style: { backgroundColor: "#42d4f2e6" },
              position: "bottom",
            });
          }}
        >
          <Icon
            type="Ionicons"
            name="ios-heart"
            style={{ color: "red", fontSize: 40 }}
          />
        </Button>

        <Button
          transparent
          onPress={async () => {
            await bookmarkStore.removeBookmark(recipe.label);
            Toast.show({
              text: `Removed ${recipe.label} from Bookmarks`,
              type: "danger",
              textStyle: {
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              },
              duration: 3000,
              position: "bottom",
            });
          }}
        >
          <Icon
            type="Ionicons"
            name="ios-heart-empty"
            style={{ color: "black", fontSize: 40 }}
          />
        </Button>
      </Row>
    </StyledScrollView>
  );
};

export default RecipeDetail;
