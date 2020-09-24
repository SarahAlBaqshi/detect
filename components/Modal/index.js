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
} from "./styles";
import { ScrollView, View } from "react-native";
import { Row, Spinner } from "native-base";

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
  if (route.params) {
    labels = route.params.labels;
    images = route.params.images;
    ingredients = route.params.ingredients;
    urls = route.params.urls;
  }

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <CenteredView>
          <ModalView>
            <ScrollView>
              {imageUrl && live === false && (
                <ImagePreviewStyled source={{ uri: imageUrl }} />
              )}
              <DetectedObjectModalMaybeItsABananaText>
                {result}
              </DetectedObjectModalMaybeItsABananaText>

              {loading === true ? (
                <Spinner color="green" />
              ) : (
                // <NutritionLabel>{nutrition.servingSize}</NutritionLabel>
                <NutritionLabel nutrition={nutrition} />
              )}
            </ScrollView>
            <ShowRecipesButton
              onPress={() => {
                navigation.navigate("Recipes", {
                  labels: labels,
                  images: images,
                  ingredients: ingredients,
                  urls: urls,
                });
                setOpenModal(!openModal);
              }}
              transparent
            >
              {/* //TODO LOADING FOR THIS */}
              <ShowRecipesButtonText>Show Recipes</ShowRecipesButtonText>
            </ShowRecipesButton>
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
