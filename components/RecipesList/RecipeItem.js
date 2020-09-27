import React from "react";
import { observer } from "mobx-react";

// Styles
import { RecipeImage, RecipeLabel, ButtonStyled } from "./styles";
import { Card, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeItem = ({ recipe, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe Detail", { recipe: recipe })}
    >
      <Card>
        <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
        <RecipeLabel>
          {recipe.label.toLowerCase().includes("recipe")
            ? recipe.label
            : recipe.label + " Recipe"}
        </RecipeLabel>
        <ButtonStyled>
          <Text>View Recipe</Text>
        </ButtonStyled>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(RecipeItem);
