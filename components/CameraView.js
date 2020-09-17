import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const CameraView = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return <Camera style={{ flex: 1 }} type={type}></Camera>;
};

export default CameraView;
