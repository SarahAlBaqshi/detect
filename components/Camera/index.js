import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Alert,
  Linking,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import { Button, Spinner, View } from "native-base";
import {
  DetectTextStyled,
  ImageButtonStyled,
  ImagePreviewStyled,
  ResultStyled,
  BackgroundImage,
  ImageButtonTextStyled,
  DarkView,
} from "./styles";

// clean up imports

// this component can definitely be cleaned up. It's doing too many things.
// but at this point I'm not entirely sure how to do that
// so I won't ask you to clean it up now
// but keep in mind eventually this has to be split up into smaller files
// somehow

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
    // move this import to the top of the file
    // and use the new syntax for importing
    // not `require`
    const Clarifai = require("clarifai");

    // Instantiate a new Clarifai app by passing in your API key.
    const app = new Clarifai.App({
      apiKey: "0352be76758845c794f90c92cdbcac5d",
    });

    // Predict the contents of an image by passing in a URL.
    // await const response
    // switch to using async/await here
    app.models
      .predict(Clarifai.FOOD_MODEL, imageData)
      .then((response) => {
        setResult("Detected " + response.outputs[0].data.concepts[0].name);
        setLoading(false);
        console.log("identifyImage -> response", response);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <BackgroundImage source={require("../../assets/background.jpg")}>
      <DarkView>
        <DetectTextStyled>Detect</DetectTextStyled>

        {/* use ?? (or I think it's &&) instead of the ternary operator
            since the else condition is just null
        */}
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
        <ImageButtonStyled onPress={selectPicture}>
          <ImageButtonTextStyled>Gallery</ImageButtonTextStyled>
        </ImageButtonStyled>
        <ImageButtonStyled onPress={takePicture}>
          <ImageButtonTextStyled>Camera</ImageButtonTextStyled>
        </ImageButtonStyled>
      </DarkView>
    </BackgroundImage>
  );
};

export default Camera;
