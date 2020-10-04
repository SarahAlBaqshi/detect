import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Toast,
  Row,
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Segment,
  Content,
} from "native-base";
import { CheckBox } from "react-native-elements";
import Lightbox from "react-native-lightbox";

// TODO MAKE NUTRITION LABEL
// Styles
import {
  RecipeImage,
  ShowNutritionText,
  RecipeLabel,
  ShowNutritionButton,
  Label,
  RecipeIngredients,
  StyledScrollView,
  StyledView,
  BookmarkButton,
} from "./styles";

import { Linking, Alert } from "react-native";
import { ButtonStyled } from "../RecipesList/styles";
import bookmarkStore from "../../stores/bookmarkStore";
import NutritionLabel from "../Modal/NutritionLabel";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { observer } from "mobx-react";
import GoBackButton from "../Buttons/GoBackButton";

const { Value, timing } = Animated;

const RecipeDetail = ({ route, navigator }) => {
  const { recipe } = route.params;
  const [nutrition, setNutrition] = useState(false);
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(true); // True = left, fase = right
  const [showOrHideNutrition, setShowOrHideNutrition] = useState(
    "Show Nutrition"
  );

  const ingredients = recipe.ingredient.map((oneIngredient) => (
    <CheckBox
      title={oneIngredient}
      checked={checked}
      onPress={() => setChecked(!checked)}
    />
    // <RecipeIngredients>{oneIngredient}.</RecipeIngredients>
  ));
  const [bookmark, setBookmark] = useState(
    bookmarkStore.bookmarks.find(
      (bookmarkedRecipes) => bookmarkedRecipes.label === recipe.label
    )
      ? true
      : false
  );
  console.log("RecipeDetail -> bookmark", bookmark);

  const transX = new Value(100);
  const config = {
    duration: 1000,
    toValue: 200,
    easing: Easing.inOut(Easing.ease),
  };

  const anim = timing(transX, config);

  return (
    <StyledScrollView>
      <Lightbox
        navigator={navigator}
        backgroundColor="#588157E6"
        renderHeader={() => <GoBackButton lightBox />}
        // options={{ useNativeDriver: true }}
      >
        <RecipeImage alt={recipe.label} source={{ uri: recipe.image }} />
      </Lightbox>
      <RecipeLabel>{recipe.label}</RecipeLabel>
      <Label>Ingredients :</Label>

      <StyledView>{ingredients}</StyledView>
      <Row>
        <ButtonStyled onPress={() => Linking.openURL(recipe.url)}>
          <Text>View Entire Recipe</Text>
        </ButtonStyled>
        <ShowNutritionButton
          transparent
          onPress={() => {
            setNutrition(!nutrition),
              setShowOrHideNutrition(
                showOrHideNutrition === "Show Nutrition"
                  ? "Hide Nutrition"
                  : "Show Nutrition"
              );
          }}
        >
          <ShowNutritionText>{showOrHideNutrition}</ShowNutritionText>
        </ShowNutritionButton>
        {bookmark ? (
          <BookmarkButton
            transparent
            onPress={async () => {
              await bookmarkStore.removeBookmark(recipe.label),
                setBookmark(false);
              Toast.show({
                text: `Removed ${recipe.label} from Bookmarks`,
                textStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                },
                duration: 3000,
                style: { backgroundColor: "#588157E6" },
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                position: "bottom",
              });
            }}
          >
            <Icon
              type="FontAwesome"
              name="bookmark"
              style={{ color: "green", fontSize: 40, paddingBottom: 60 }}
            />
          </BookmarkButton>
        ) : (
          <BookmarkButton
            transparent
            onPress={async () => {
              await bookmarkStore.addBookmark(recipe), setBookmark(true);
              Toast.show({
                text: `Bookmarked ${recipe.label}`,
                textStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                },
                position: "bottom",
                duration: 3000,
                style: {
                  backgroundColor: "#588157E6",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                },
              });
            }}
          >
            <Icon
              type="FontAwesome"
              name="bookmark-o"
              style={{ color: "green", fontSize: 40, paddingBottom: 60 }}
            />
          </BookmarkButton>
        )}
      </Row>

      {nutrition && (
        <>
          <View
            style={{
              padding: 6,
              width: "90%",
              borderRadius: 10,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#e7e7e8",
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {/* <Animated.View
              style={[
                {
                  width: 125,
                  // height: 19,
                  height: 23,
                  backgroundColor: "white",
                  borderRadius: 5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                },
                { transform: [{ translateX: transX }] },
              ]}
            /> */}
            <TouchableOpacity
              onPress={(() => anim.start(), () => setToggle(true))}
              style={{ marginLeft: "auto", paddingRight: "25%" }}
            >
              {toggle ? (
                <Text style={{ fontWeight: "bold" }}>Full Meal</Text>
              ) : (
                <Text>Full Meal</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(() => anim.start(), () => setToggle(false))}
              style={{ marginRight: "auto", paddingLeft: "25%" }}
            >
              {/* TODO MAKE SIMILAR TO APPLE FONT */}
              {toggle ? (
                <Text>Per Serving</Text>
              ) : (
                <Text style={{ fontWeight: "bold" }}>Per Serving</Text>
              )}
            </TouchableOpacity>
          </View>
          <Content padder>
            {/* {recipe.dietLabels !== [] ?? (
              <Row>
                <DietText>Benefits:</DietText>
                <Text> {recipe.dietLabels}</Text>
              </Row>
            )}
           {recipe.cautions !== [] ?? (
              <Row>
                <DietText>Cautions:</DietText>
                <Text> {recipe.cautions}</Text>
              </Row>
            )}
            {toggle === true ? (
              <NutritionLabel recipe={recipe} />
            ) : (
              <NutritionLabel perServing recipe={recipe} />
            )}  */}
            {toggle === true ? (
              <NutritionLabel recipe={recipe} />
            ) : (
              <NutritionLabel perServing recipe={recipe} />
            )}
          </Content>
        </>
      )}
    </StyledScrollView>
  );
};

export default observer(RecipeDetail);
