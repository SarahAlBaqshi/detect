import React, { useState, useEffect, useRef } from "react";

// Libraries
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

// Styles
import { Text, View } from "react-native";

const CameraView = ({
  setImageUrl,
  identifyImage,
  setLive,
  setLoading,
  live,
}) => {
  const [hasPermission, setHasPermission] = useState(null);

  const cam = useRef();

  const handleLiveScan = () => {
    if (live === true) {
      if (cam.current) {
        setTimeout(async () => {
          const picture = await cam.current.takePictureAsync();
          cam.current.pausePreview();
          setImageUrl(picture.uri);
          const base64 = await FileSystem.readAsStringAsync(picture.uri, {
            encoding: "base64",
          });
          identifyImage(base64);
          setLive(false);
          setLoading(true);
        }, 2000);
      }
    }
  };

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
  return (
    <Camera style={{ flex: 1 }} ref={cam} onCameraReady={handleLiveScan} />
  );
};

export default CameraView;
