import React from "react";
import { observer } from "mobx-react";

// Libraries
import Modal from "react-native-modal";
import NutritionLabel from "./NutritionLabel";

// Styles
import {
  CenteredView,
  ModalView,
  OpenButton,
  OpenButtonText,
  // ModalText,
  ShowRecipesButton,
  ShowRecipesButtonText,
  // NutritionLabelStyled,
  DetectedObjectModalMaybeItsABananaText,
  ImagePreviewStyled,
  LoadingNutrition,
  NotThisIngredient,
} from "./styles";
import { ScrollView, View } from "react-native";
import { Row, Spinner, Text } from "native-base";

const index = ({
  nutrition,
  result,
  openModal,
  live,
  imageUrl,
  setOpenModal,
  loading,
  navigation,
  route,
}) => {
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

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <CenteredView>
          <ModalView>
            <ScrollView /* TODOshowsHorizontalScrollIndicator="false"*/>
              {imageUrl && live === false && (
                <ImagePreviewStyled source={{ uri: imageUrl }} />
              )}
              <DetectedObjectModalMaybeItsABananaText>
                {result}
              </DetectedObjectModalMaybeItsABananaText>
              {/* <NotThisIngredient>Not this Ingredient?</NotThisIngredient> */}
              {loading ? (
                <>
                  <Spinner color="green" />
                  <LoadingNutrition>
                    Loading Nutritional Information
                  </LoadingNutrition>
                </>
              ) : (
                // <NutritionLabel>{nutrition.servingSize}</NutritionLabel>
                <>
                  <NutritionLabel nutrition={nutrition} />
                  <NotThisIngredient>Not this Ingredient?</NotThisIngredient>
                </>
              )}
            </ScrollView>
            {!loading && (
              <ShowRecipesButton
                onPress={() => {
                  navigation.navigate("RecipesList", {
                    labels: labels,
                    images: images,
                    ingredients: ingredients,
                    urls: urls,
                    calories: calories,
                    dietLabels: dietLabels,
                    cautions: cautions,
                    healthLabels: healthLabels,
                    ingredientLines: ingredientLines,
                    source: source,
                    servingYield: servingYield,
                    totalTime: totalTime,
                    totalNutrients: totalNutrients,
                    totalDaily: totalDaily,
                    digest: digest,
                  });
                  setOpenModal(!openModal);
                }}
                transparent
              >
                <ShowRecipesButtonText>Show Recipes</ShowRecipesButtonText>
              </ShowRecipesButton>
            )}
            <OpenButton
              onPress={() => {
                setOpenModal(!openModal);
              }}
            >
              <OpenButtonText>Done</OpenButtonText>
            </OpenButton>
          </ModalView>
        </CenteredView>
      </Modal>
    </View>
  );
};

export default observer(index);
