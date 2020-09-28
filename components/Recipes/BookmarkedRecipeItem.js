import React from "react";
import { RecipeImage, RecipeLabel, ButtonStyled, OpenIcon } from "./styles";
import { Card, Row, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
// TODO swipeout

const BookmarkedRecipeItem = ({ recipe, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe Detail", { recipe: recipe })}
    >
      <Card>
        <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
        <Row>
          <RecipeLabel>
            {recipe.label.toLowerCase().includes("recipe")
              ? recipe.label
              : recipe.label + " Recipe"}
          </RecipeLabel>
          <OpenIcon name="arrow-forward" />
        </Row>
      </Card>
    </TouchableOpacity>
  );
};

export default BookmarkedRecipeItem;
