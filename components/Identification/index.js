import React, { useState } from "react";

// Libraries
import Clarifai from "clarifai";
// import { parseString } from "react-native-xml2js";
import { parseString } from "react-native-xml2js";

// Components
import CameraRoll from "../Buttons/CameraRoll";
import Camera from "../Buttons/Camera";
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
  LiveScan,
  LiveScanButton,
  LiveScanButtonText,
} from "./styles";
import { ScrollView } from "react-native";

const Identification = () => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [nutrition, setNutrition] = useState("hello");

  const identifyImage = async (imageData) => {
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
      if (res.outputs[0].data.concepts[0].name === "beer") {
        setResult(
          "This item cannot be identified. Please try again. Alcohol is 7ram😤😤"
        );
        setLoading(false);
      } else {
        setResult("Detected " + res.outputs[0].data.concepts[0].name);
        test =
          "http://api.wolframalpha.com/v2/query?input=" +
          res.outputs[0].data.concepts[0].name +
          "%20nutrition%20facts&appid=" +
          myWolframAppId;
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

        {/* {imageUrl && live === false && (
          <ImagePreviewStyled
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
        )} */}

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
