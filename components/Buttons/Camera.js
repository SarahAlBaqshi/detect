import React from "react";

//Libraries
import { Alert, Linking } from "react-native";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

//Styles
import { ImageButtonStyled, ImageButtonTextStyled, CameraIcon } from "./styles";

const Cmaera = ({ setImageUrl, setLoading, identifyImage }) => {
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
  return (
    <ImageButtonStyled onPress={takePicture}>
      <CameraIcon name="camera" type="Feather" />
      <ImageButtonTextStyled>Camera</ImageButtonTextStyled>
    </ImageButtonStyled>
  );
};

export default Cmaera;
