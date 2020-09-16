import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import { Button, Spinner, Text, View } from "native-base";

const Camera = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
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
    await Permissions.askAsync(Permissions.CAMERA);
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
    app.models
      .predict(Clarifai.FOOD_MODEL, imageData)
      .then((response) => {
        setResult("This is a " + response.outputs[0].data.concepts[0].name);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
      {loading ? <Spinner size="100%" color="green" /> : <Text>{result}</Text>}

      <Button style={{ alignSelf: "center" }} onPress={selectPicture}>
        <Text>Gallery</Text>
      </Button>
      <Button style={{ alignSelf: "center" }} onPress={takePicture}>
        <Text>Camera</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});

export default Camera;
