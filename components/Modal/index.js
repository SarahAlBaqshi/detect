import React from "react";
import { observer } from "mobx-react";

// Libraries
import Modal from "react-native-modal";

// Styles
import { ImagePreviewStyled } from "../Identification/styles";
import {
  CenteredView,
  ModalView,
  OpenButton,
  OpenButtonText,
  ModalText,
} from "./styles";
import { ScrollView, Alert, View } from "react-native";
import { Spinner } from "native-base";

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <CenteredView>
          <ModalView>
            <ScrollView>
              {imageUrl && live === false && (
                <ImagePreviewStyled
                  source={{ uri: imageUrl }}
                  style={{ width: 150, height: 150 }}
                />
              )}
              <ModalText>{result}</ModalText>

              {loading === true ? (
                <Spinner color="green" />
              ) : (
                <ModalText>{nutrition}</ModalText>
              )}
            </ScrollView>
            <OpenButton
              onPress={() => {
                navigation.navigate("Recipes", {
                  labels: labels,
                  images: images,
                  ingredients: ingredients,
                });
                setOpenModal(!openModal);
              }}
            >
              <OpenButtonText>Show Recipes</OpenButtonText>
            </OpenButton>
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
