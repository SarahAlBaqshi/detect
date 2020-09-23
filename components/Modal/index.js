import React from "react";
import { observer } from "mobx-react";

// Libraries
import Modal from "react-native-modal";

// Styles
import {
  CenteredView,
  ModalView,
  OpenButton,
  OpenButtonText,
  ModalText,
  ShowRecipesButton,
  ShowRecipesButtonText,
  NutritionLabel,
  DetectedObjectModalMaybeItsABananaText,
  ImagePreviewStyled,
} from "./styles";
import { ScrollView, Alert, View } from "react-native";
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
  if (route.params) {
    labels = route.params.labels;
    images = route.params.images;
    ingredients = route.params.ingredients;
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
                <NutritionLabel>{nutrition}</NutritionLabel>
              )}
            </ScrollView>
            <ShowRecipesButton
              onPress={() => {
                navigation.navigate("Recipes", {
                  labels: labels,
                  images: images,
                  ingredients: ingredients,
                });
                setOpenModal(!openModal);
              }}
              transparent
            >
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
