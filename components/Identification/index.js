import React, { useState } from "react";

// Libraries
import Clarifai from "clarifai";

// Components
import CameraRoll from "../Buttons/CameraRoll";
import Camera from "../Buttons/Camera";
import CameraView from "../CameraView";

// Styles
import { Spinner } from "native-base";
import {
  DetectTextStyled,
  ImagePreviewStyled,
  ResultStyled,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  LiveScan,
  LiveScanButton,
  LiveScanButtonText,
} from "./styles";

const Identification = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);

  const identifyImage = async (imageData) => {
    const app = new Clarifai.App({
      apiKey: "0352be76758845c794f90c92cdbcac5d",
    });

    try {
      const res = await app.models.predict(Clarifai.FOOD_MODEL, imageData);
      if (res.outputs[0].data.concepts[0].name === "beer") {
        setResult(
          "This item cannot be identified. Please try again. Alcohol is 7ram😤😤"
        );
        setLoading(false);
      } else {
        setResult("Detected " + res.outputs[0].data.concepts[0].name);
        setLoading(false);
      }
    } catch (error) {
      setResult("This item cannot be identified. Please try again.");
    }
  };

  return (
    <BackgroundImage source={require("../../assets/background.jpg")}>
      <DarkView>
        <DetectTextStyled>Detect</DetectTextStyled>

        {imageUrl && live === false && (
          <ImagePreviewStyled
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
        )}

        {live && (
          <LiveScan>
            <CameraView
              live={live}
              setLoading={setLoading}
              setLive={setLive}
              setImageUrl={setImageUrl}
              identifyImage={identifyImage}
            />
          </LiveScan>
        )}
        {loading ? (
          <Spinner color="white" />
        ) : (
          live === false && <ResultStyled>{result}</ResultStyled>
        )}
        {live === false && (
          <ButtonsRow>
            <CameraRoll
              setImageUrl={setImageUrl}
              setLoading={setLoading}
              identifyImage={identifyImage}
            />
            <Camera
              setImageUrl={setImageUrl}
              setLoading={setLoading}
              identifyImage={identifyImage}
            />
          </ButtonsRow>
        )}
        {live === false && (
          <LiveScanButton onPress={() => setLive(true)}>
            <LiveScanButtonText>
              {live ? "Stop Scanning" : "Scan Live!"}
            </LiveScanButtonText>
          </LiveScanButton>
        )}
      </DarkView>
    </BackgroundImage>
  );
};

export default Identification;
