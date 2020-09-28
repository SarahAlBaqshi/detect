import React, { useState } from "react";
import { observer } from "mobx-react";

// Component
import RecipeItem from "./RecipeItem";

// Styles
import { Content, List, View, Button, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { getMoreRecipes } from "../Identification/utilities";

const RecipesList = ({ navigation, route }) => {
  const [counter, setCounter] = useState({ x: 6, y: 10 });

  let labels;
  let images;
  let ingredients;
  let urls;
  if (route.params) {
    labels = route.params.labels;
    images = route.params.images;
    ingredients = route.params.ingredients;
    urls = route.params.urls;
  }

  console.log("RecipesList -> route.params", route.params);

  let newObject = [];
  for (let i = 0; i < 5; i++) {
    newObject[i] = {
      label: labels[i],
      image: images[i],
      ingredient: ingredients[i],
      url: urls[i],
      // calories: calories[]
    };
  }

  const allRecipes = newObject.map((recipe) => (
    <RecipeItem navigation={navigation} recipe={recipe} key={recipe.label} />
  ));

  return (
    <ScrollView>
      <Content>
        <View>
          <List>{allRecipes}</List>
          <Button
            onPress={() => getMoreRecipes({ counter, setCounter, route })}
          >
            <Text>Load more</Text>
          </Button>
        </View>
      </Content>
    </ScrollView>
  );
};

export default observer(RecipesList);
