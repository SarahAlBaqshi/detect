import React, { useState } from "react";

// Libraries
import Clarifai from "clarifai";
import { parseString } from "react-native-xml2js";

// Buttons
import CameraRoll from "../Buttons/CameraRoll";
import LiveScan from "../Buttons/LiveScan";
import Camera from "../Buttons/Camera";

// Components
import CameraView from "../CameraView";

// Styles
import { Spinner, Text } from "native-base";
import {
  DetectTextStyled,
  ImagePreviewStyled,
  ResultStyled,
  BackgroundImage,
  DarkView,
  ButtonsRow,
} from "./styles";
import { ScrollView } from "react-native";

const Identification = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [liveResult, setLiveResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [nutrition, setNutrition] = useState("hello");

  const identifyImage = async (imageData, isLive) => {
    const app = new Clarifai.App({
      apiKey: "0352be76758845c794f90c92cdbcac5d",
    });

    let test = "";
    const myWolframAppId = "425X9Q-JEJJ2Q5LJ6";

    fetch(
      "http://api.wolframalpha.com/v2/query?input=banana%20nutrition%20facts&appid=425X9Q-JEJJ2Q5LJ6"
    )
      .then((response) => response.text())
      .then((response) => {
        parseString(response, function (err, result) {
          test = response;
          parseString(test, function (err, result) {
            setNutrition(result.queryresult.pod[1].subpod[0].img[0].$.alt);
          });
        });
      })
      .catch((err) => {
        console.log("fetch", err);
      });

    try {
      const res = await app.models.predict(Clarifai.FOOD_MODEL, imageData);
      const detectedObject = res.outputs[0].data.concepts[0].name;
      if (detectedObject === "beer") {
        setResult(
          "This item cannot be identified. Please try again. Alcohol is 7ram😤😤"
        );
      } else if (isLive) {
        setLiveResult("Detected " + detectedObject);
      } else {

        setResult("Detected " + detectedObject);
        test =
          "http://api.wolframalpha.com/v2/query?input=" +
          detectedObject +
          "%20nutrition%20facts&appid=" +
          myWolframAppId;

      }
      setLoading(false);
    } catch (error) {
      setResult("This item cannot be identified. Please try again.");
    }
  };

  //TODO: LESS TERNARY OPERATORS
  return (
    <BackgroundImage source={require("../../assets/background.jpg")}>
      <DarkView>
        <DetectTextStyled>Detect</DetectTextStyled>

        {/* {imageUrl && live === false && (
          <ImagePreviewStyled
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
        )} */}

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
        <ScrollView>
          <ResultStyled>{nutrition}</ResultStyled>
        </ScrollView>
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
