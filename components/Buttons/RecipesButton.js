import React from "react";

import { RecipesButtonStyled, RecipesButtonText, RecipesIcon } from "./styles";
import { Row } from "native-base";

const Recipes = ({ navigation }) => {
  return (
    <RecipesButtonStyled onPress={() => navigation.navigate("Recipes")}>
      <Row>
        <RecipesIcon type="AntDesign" name="book" />
        <RecipesButtonText>Recipes</RecipesButtonText>
      </Row>
    </RecipesButtonStyled>
  );
};

export default Recipes;
