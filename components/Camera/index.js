import React, { useState } from "react";
import { Alert, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import { Spinner } from "native-base";
import {
  DetectTextStyled,
  ImageButtonStyled,
  ImagePreviewStyled,
  ResultStyled,
  BackgroundImage,
  ImageButtonTextStyled,
  DarkView,
  ButtonsRow,
  CameraIcon,
  GalleryIcon,
} from "./styles";

const Camera = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getPermissionsCameraRoll = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert(
          "Permission Request",
          "To use Detect to its fullest extent, please allow access to your photos."[
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

  getPermissionsCameraRoll();

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

  const selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!cancelled) {
      setImageUrl(uri);
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
      });
      identifyImage(base64);
      setLoading(true);
    }
  };

  const takePicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    if (!cancelled) {
      setImageUrl(uri);
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
      });
      identifyImage(base64);
      setLoading(true);
    }
  };

  const identifyImage = (imageData) => {
    const Clarifai = require("clarifai");

    // Instantiate a new Clarifai app by passing in your API key.
    const app = new Clarifai.App({
      apiKey: "0352be76758845c794f90c92cdbcac5d",
    });

    // Predict the contents of an image by passing in a URL.
    // await const response
    app.models
      .predict(Clarifai.FOOD_MODEL, imageData)
      .then((response) => {
        if (response.outputs[0].data.concepts[0].name === "beer") {
          setResult("This item cannot be identified. Please try again.");
          setLoading(false);
        } else {
          setResult("Detected " + response.outputs[0].data.concepts[0].name);
          setLoading(false);
        }
        // console.log("identifyImage -> response", response);
      })
      .catch((err) => {
        setResult("This item cannot be identified. Please try again.");
      });
  };

  return (
    <BackgroundImage source={require("../../assets/background.jpg")}>
      <DarkView>
        <DetectTextStyled>Detect</DetectTextStyled>

        {imageUrl ? (
          <ImagePreviewStyled
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
        ) : null}
        {loading ? (
          <Spinner color="white" />
        ) : (
          <ResultStyled>{result}</ResultStyled>
        )}
        <ButtonsRow>
          <ImageButtonStyled onPress={selectPicture}>
            <GalleryIcon name="image" type="Feather" />
            <ImageButtonTextStyled>Gallery</ImageButtonTextStyled>
          </ImageButtonStyled>

          <ImageButtonStyled onPress={takePicture}>
            <CameraIcon name="camera" type="Feather" />
            <ImageButtonTextStyled>Camera</ImageButtonTextStyled>
          </ImageButtonStyled>
        </ButtonsRow>
      </DarkView>
    </BackgroundImage>
  );
};

export default Camera;
