import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import { FocusIcon } from "./styles";

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
  console.log("route", route);

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
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          {/* <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Flip
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={_takePhoto}>
            <FocusIcon name="crop-free" type="MaterialCommunityIcons" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraView;
