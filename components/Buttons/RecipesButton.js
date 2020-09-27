import React from "react";

import { RecipesButtonStyled, RecipesButtonText, RecipesIcon } from "./styles";
import { Row } from "native-base";

const Recipes = ({ navigation }) => {
  return (
    <RecipesButtonStyled onPress={() => navigation.navigate("Recipes")}>
      <Row>
        <RecipesIcon type="Feather" name="archive" />
        <RecipesButtonText>Recipes</RecipesButtonText>
      </Row>
    </RecipesButtonStyled>
  );
};

export default Recipes;
