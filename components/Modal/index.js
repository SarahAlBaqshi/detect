import React from "react";

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
}) => {
  return (
    // REVIEW: inline styling??????????
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

export default index;
