import React from "react";

// Libraries
import { Alert, Linking } from "react-native";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

// Styles
import { ImageButtonStyled, ImageButtonTextStyled, CameraIcon } from "./styles";

const Camera = ({
  setImageUrl,
  setLoading,
  identifyImage,
  setLive,
  setResult,
  setNutrition,
  setOpenModal,
  navigation,
}) => {
  const getPermissionAsyncCamera = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        Alert.alert(
          "Permission Request",
          "To use Detect to its fullest extent, please allow access to your camera."[
            ({
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => Linking.openSettings() })
          ],
          { cancelable: false }
        );
      }
    }
  };
  getPermissionAsyncCamera();

  return (
    <ImageButtonStyled
      onPress={() =>
        navigation.navigate("Camera View", {
          setImageUrl: setImageUrl,
          setLoading: setLoading,
          identifyImage: identifyImage,
          setLive: setLive,
          setResult: setResult,
          setNutrition: setNutrition,
          setOpenModal: setOpenModal,
          navigation: navigation,
        })
      }
    >
      <CameraIcon name="camera" type="Feather" />
      <ImageButtonTextStyled>Camera</ImageButtonTextStyled>
    </ImageButtonStyled>
  );
};

export default Camera;
