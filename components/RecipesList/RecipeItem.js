import React from "react";
import { observer } from "mobx-react";

// Styles
import { RecipeImage, RecipeLabel, ButtonStyled, OpenIcon } from "./styles";
import { Card, Row, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeItem = ({ recipe, navigation }) => {
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
          <OpenIcon type="Entypo" name="chevron-thin-right" />
        </Row>
        <Text>{recipe.calories}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(RecipeItem);
