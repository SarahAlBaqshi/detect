import React from "react";
import { observer } from "mobx-react";

// Styles
import {
  RecipeImage,
  RecipeLabel,
  ButtonStyled,
  OpenIcon,
  RecipeIcon,
  RecipeCalories,
  RecipeTotalTime,
  RecipeServing,
  RecipeDescriptionRow,
  KCAL,
} from "./styles";
import { Card, Icon, Row, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeItem = ({ recipe, navigation }) => {
  if (recipe.totalTime > 300) {
    recipe.totalTime = recipe.totalTime / 60;
    recipe.totalTime = recipe.totalTime.toFixed(0);
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe Detail", { recipe: recipe })}
    >
      <Card
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}
      >
        <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />

        <RecipeDescriptionRow>
          <KCAL>KCAL</KCAL>
          <RecipeCalories>{recipe.calories.toFixed(0)} </RecipeCalories>
          {recipe.totalTime !== 0 && recipe.totalTime < 300 ? (
            <>
              <RecipeIcon name="alarm" type="Ionicons" />
              <RecipeTotalTime>{recipe.totalTime} Min</RecipeTotalTime>
            </>
          ) : (
            recipe.totalTime !== 0 && (
              <>
                <RecipeIcon name="alarm" type="Ionicons" />
                <RecipeTotalTime>{recipe.totalTime} Min</RecipeTotalTime>
              </>
            )
          )}
          <RecipeIcon name="bowl" type="Entypo" />
          <RecipeServing>Serves {recipe.servingYield}</RecipeServing>
        </RecipeDescriptionRow>

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

export default observer(RecipeItem);
