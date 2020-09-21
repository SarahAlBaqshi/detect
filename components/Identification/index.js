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
import Modal from "../Modal";

// Styles
import { Spinner } from "native-base";
import { TouchableOpacity } from "react-native";
import {
  DetectTextStyled,
  ImagePreviewStyled,
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
  const [nutrition, setNutrition] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const identifyImage = async (imageData, isLive) => {
    const app = new Clarifai.App({
      apiKey: "0352be76758845c794f90c92cdbcac5d",
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
        fetchNutrition(detectedObject);
      } else {
        setResult("Detected " + detectedObject);

        fetchNutrition(detectedObject);
      }
      setLoading(false);
      setOpenModal(true);
      setLoading(true);
    } catch (error) {
      setResult("This item cannot be identified. Please try again.");
    }
  };

  const fetchNutrition = async (detectedObject) => {
    try {
      setNutrition("");
      const detectedObjectUrl =
        "http://api.wolframalpha.com/v2/query?input=" +
        detectedObject +
        "%20nutrition%20facts&appid=425X9Q-JEJJ2Q5LJ6";
      const response = await fetch(detectedObjectUrl);
      parseString(await response.text(), function (err, result) {
        setNutrition(result.queryresult.pod[1].subpod[0].img[0].$.alt);
      });
      setLoading(false);
    } catch (err) {
      console.log("fetch", err);
    }
  };

  //TODO: LESS TERNARY OPERATORS
  return (
    <BackgroundImage source={require("../../assets/background.jpg")}>
      <DarkView>
        <DetectTextStyled>Detect</DetectTextStyled>
        {openModal && (
          <Modal
            live={live}
            imageUrl={imageUrl}
            nutrition={nutrition}
            result={result}
            openModal={openModal}
            setOpenModal={setOpenModal}
            loading={loading}
          />
        )}

        {imageUrl && live === false && openModal === false && (
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <ImagePreviewStyled
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
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

        {loading && live === false && openModal === false && (
          <Spinner color="white" />
        )}

        {live === false && openModal === false && (
          <>
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
            <LiveScan setLive={setLive} screen />
          </>
        )}
      </DarkView>
    </BackgroundImage>
  );
};

export default Identification;
