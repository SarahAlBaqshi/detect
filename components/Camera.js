import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, Image } from "react-native";

import { Button, Text, View } from "native-base";

const Camera = () => {
  const [url, setUrl] = useState(
    "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg"
  );

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
        alert("This is a " + response.outputs[0].data.concepts[0].name);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <View>
      <Text>Only works with JPEG images</Text>
      <TextInput
        style={{
          height: 40,
          width: 250,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={(text) => setUrl(text)}
        value={url}
      />
      <Image style={styles.imageStyle} source={{ uri: url }} />
      <Button
        style={{ alignSelf: "center" }}
        onPress={() => identifyImage(url)}
      >
        <Text>Classify Image 1</Text>
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
