import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import { FocusIcon } from "./styles";
import Fade from "react-native-fade";
import { Button } from "native-base";

import * as Animatable from "react-native-animatable";

const CameraView = ({ route }) => {
  const {
    setImageUrl,
    setLoading,
    identifyImage,
    setLive,
    setResult,
    setNutrition,
    setOpenModal,
    navigation,
  } = route.params;

  const [visible, setVisible] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync();
    console.debug(photo);
    handleLiveScan(photo);
  };

  const handleLiveScan = async (photo) => {
    navigation.goBack();

    setImageUrl(photo.uri);
    const base64 = await FileSystem.readAsStringAsync(photo.uri, {
      encoding: "base64",
    });
    identifyImage(base64, {
      setResult,
      setLoading,
      setLive,
      setNutrition,
      setOpenModal,
      navigation,
    });
    setLoading(true);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <TouchableOpacity onPress={_takePhoto}>
            <FocusIcon name="crop-free" type="MaterialCommunityIcons" />
          </TouchableOpacity>
          <Animatable.Text
            animation="fadeOutDownBig"
            delay="5000"
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              padding: "10%",
            }}
          >
            Tap on the frame above to take a picture
          </Animatable.Text>
        </View>
      </Camera>
    </View>
  );
};

export default CameraView;
