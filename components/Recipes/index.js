import React from "react";
import { Content, List, View, Button, Text } from "native-base";

import { ScrollView } from "react-native-gesture-handler";
import BookmarkedRecipeItem from "./BookmarkedRecipeItem";
import { BookmarksHeader } from "./styles";

const Recipes = ({ navigation, route }) => {
  //   let labels;
  //   let images;
  //   let ingredients;
  //   let urls;
  //   if (route.params) {
  //     labels = route.params.labels;
  //     images = route.params.images;
  //     ingredients = route.params.ingredients;
  //     urls = route.params.urls;
  //   }

  //   let newObject = [];
  //   for (let i = 0; i < 5; i++) {
  //     newObject[i] = {
  //       label: labels[i],
  //       image: images[i],
  //       ingredient: ingredients[i],
  //       url: urls[i],
  //     };
  //   }

  //   const allRecipes = newObject.map((recipe) => (
  //     <BookmarkedRecipeItem
  //       navigation={navigation}
  //       //   recipe={recipe}
  //       //   key={recipe.label}
  //     />
  //   ));
  return (
    <ScrollView>
      <BookmarksHeader>Bookmarks</BookmarksHeader>
      <Content>
        <View>
          <BookmarkedRecipeItem />
          {/* <List>{allRecipes}</List> */}
        </View>
      </Content>
    </ScrollView>
  );
};

export default Recipes;
