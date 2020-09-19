import React from "react";

// Libraries
import { Alert, Linking } from "react-native";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

// Styles
import {
  ImageButtonStyled,
  ImageButtonTextStyled,
  GalleryIcon,
} from "./styles";

const CameraRoll = ({ setImageUrl, setLoading, identifyImage }) => {
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

  return (
    <ImageButtonStyled onPress={selectPicture}>
      <GalleryIcon name="image" type="Feather" />
      <ImageButtonTextStyled>Gallery</ImageButtonTextStyled>
    </ImageButtonStyled>
  );
};

export default CameraRoll;
