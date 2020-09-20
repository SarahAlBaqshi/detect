import React, { useState, useEffect, useRef } from "react";

// Libraries
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

// Buttons
import LiveScan from "../Buttons/LiveScan";

// Styles
import { Text, View } from "react-native";
import { Spinner } from "native-base";
import { LiveScanScreen, ResultStyled } from "./styles";

const CameraView = ({
  identifyImage,
  setLive,
  setLoading,
  liveResult,
  loading,
}) => {
  const [hasPermission, setHasPermission] = useState(null);

  const cam = useRef();

  const handleLiveScan = () => {
    if (cam.current) {
      setTimeout(async () => {
        const picture = await cam.current.takePictureAsync({ quality: 1 });
        const base64 = await FileSystem.readAsStringAsync(picture.uri, {
          encoding: "base64",
        });
        identifyImage(base64, true);
        setLoading(true);
      }, 2000);
    }
  };
  //TODO: CLEAN THIS MESS
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
    <>
      <LiveScanScreen>
        <Camera style={{ flex: 1 }} ref={cam} onCameraReady={handleLiveScan} />
      </LiveScanScreen>
      {loading ? (
        <Spinner color="white" />
      ) : (
        <ResultStyled>{liveResult}</ResultStyled>
      )}
      {liveResult !== "" && <LiveScan setLive={setLive} />}
    </>
  );
};

export default CameraView;
