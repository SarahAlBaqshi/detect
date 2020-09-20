import React, { useState } from "react";

// Libraries
import Clarifai from "clarifai";

// Buttons
import CameraRoll from "../Buttons/CameraRoll";
import LiveScan from "../Buttons/LiveScan";
import Camera from "../Buttons/Camera";

// Components
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
} from "./styles";

const Identification = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [liveResult, setLiveResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);

  const identifyImage = async (imageData, isLive) => {
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
        if (isLive === true) {
          setLiveResult("Detected " + res.outputs[0].data.concepts[0].name);
          setLoading(false);
        } else {
          setResult("Detected " + res.outputs[0].data.concepts[0].name);
          setLoading(false);
        }
      }
    } catch (error) {
      setResult("This item cannot be identified. Please try again.");
    }
  };

  //TODO: LESS TERNARY OPERATORS
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
          <CameraView
            loading={loading}
            liveResult={liveResult}
            setLoading={setLoading}
            setLive={setLive}
            identifyImage={identifyImage}
          />
        )}
        {loading && live === false ? (
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
        {live === false && <LiveScan setLive={setLive} screen />}
      </DarkView>
    </BackgroundImage>
  );
};

export default Identification;
