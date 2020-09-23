import React from "react";
import { observer } from "mobx-react";

// Styles
import {
  ListItem,
  ViewButtonStyled,
  RecipeImage,
  RecipeLabel,
  RecipeRow,
} from "./styles";
import {
  Body,
  Card,
  Left,
  Right,
  CardItem,
  Row,
  Button,
  Text,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeItem = ({ recipe }) => {
  return (
    <TouchableOpacity>
      <Card>
        <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
        <CardItem>
          <RecipeRow>
            <RecipeLabel>{recipe.label}</RecipeLabel>
            <Button transparent>
              <ViewButtonStyled>View</ViewButtonStyled>
            </Button>
          </RecipeRow>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(RecipeItem);
