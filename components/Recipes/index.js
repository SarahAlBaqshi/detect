import React, { useState } from "react";
import {
  Content,
  List,
  View,
  Button,
  Text,
  Input,
  Item,
  Icon,
} from "native-base";

import { ScrollView } from "react-native-gesture-handler";
import BookmarkedRecipeItem from "./BookmarkedRecipeItem";
import { BookmarksHeader, NoBookmarksMsg, NoBookmarksText } from "./styles";
import bookmarkStore from "../../stores/bookmarkStore";
import { observer } from "mobx-react";
import { SwipeListView } from "react-native-swipe-list-view";
//TODO^^
const Recipes = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const onChangeSearch = (query) => {
    setQuery(query);
  };

  const bookmarks = bookmarkStore.bookmarks
    .filter((recipe) =>
      recipe.label.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipe) => (
      <BookmarkedRecipeItem
        recipe={recipe}
        navigation={navigation}
        key={recipe.label}
      />
    ));
  return bookmarks.length > 0 ? (
    <ScrollView>
      <Item rounded style={{ border: "4px black" }}>
        <Icon active name="search" />
        <Input placeholder="Search Recipes" onChangeText={onChangeSearch} />
        {/* Searchbar in header? */}
      </Item>
      <Content>
        <View>
          <List>{bookmarks}</List>
        </View>
      </Content>
    </ScrollView>
  ) : (
    <ScrollView>
      <Item rounded style={{ border: "4px black" }}>
        <Icon active name="search" />
        <Input placeholder="Search Recipes" onChangeText={onChangeSearch} />
        {/* Searchbar in header? */}
      </Item>
      <NoBookmarksText>You Have No Bookmarks</NoBookmarksText>
      <NoBookmarksMsg>
        Please bookmark some recipes using the bookmark button on the recipe
        page.
      </NoBookmarksMsg>
    </ScrollView>
  );
};
export default observer(Recipes);
