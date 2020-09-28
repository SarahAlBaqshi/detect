import React, { useState } from "react";
import { observer } from "mobx-react";

// Component
import RecipeItem from "./RecipeItem";

// Styles
import { Content, List, View, Button, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { getMoreRecipes } from "../Identification/utilities";

const RecipesList = ({ navigation, route }) => {

  const [counter, setCounter] = useState({ x: 5, y: 10 });

  let labels;
  let images;
  let ingredients;
  let urls;
  let calories;
  let dietLabels;
  let cautions;
  let healthLabels;
  let ingredientLines;
  let source;
  let servingYield;
  let totalTime;
  let totalNutrients;
  let totalDaily;
  let digest;
  if (route.params) {
    labels = route.params.labels;
    images = route.params.images;
    ingredients = route.params.ingredients;
    urls = route.params.urls;
    calories = route.params.calories;
    dietLabels = route.params.dietLabels;
    cautions = route.params.cautions;
    healthLabels = route.params.healthLabels;
    ingredientLines = route.params.ingredientLines;
    source = route.params.source;
    servingYield = route.params.servingYield;
    totalTime = route.params.totalTime;
    totalNutrients = route.params.totalNutrients;
    totalDaily = route.params.totalDaily;
    digest = route.params.digest;
  }

  // console.log("RecipesList -> route.params", route.params);

  let newObject = [];
  for (let i = 0; i < route.params.labels.length; i++) {
    newObject[i] = {
      label: labels[i],
      image: images[i],
      ingredient: ingredients[i],
      url: urls[i],
      calories: calories[i],
      dietLabels: dietLabels[i],
      cautions: cautions[i],
      healthLabels: healthLabels[i],
      ingredientLines: ingredientLines[i],
      source: source[i],
      servingYield: servingYield[i],
      totalTime: totalTime[i],
      totalNutrients: totalNutrients[i],
      totalDaily: totalDaily[i],
      digest: digest[i],
    };
  }

  const allRecipes = newObject.map((recipe) => (
    <RecipeItem navigation={navigation} recipe={recipe} key={recipe.label} />
  ));
  const testLabels = labels.map((label) => <Text>{label}</Text>);

  return (
    //TODO SCROLLBAR AT TOP
    <ScrollView
      onMomentumScrollEnd={async () => {
        await getMoreRecipes({ counter, setCounter, route, navigation });
      }}
    >
      <Content>
        <View>
          <List>{allRecipes}</List>
          {/* <Button
            onPress={() =>
              getMoreRecipes({ counter, setCounter, route, navigation })
            }
          >
            <Text>Load more </Text>
          </Button> */}
        </View>
      </Content>
    </ScrollView>
  );
};

export default observer(RecipesList);
