import React, { useState } from "react";

// // Libraries
// import Clarifai from "clarifai";

// Buttons
import CameraRoll from "../Buttons/CameraRoll";
import LiveScan from "../Buttons/LiveScan";
import Camera from "../Buttons/Camera";

// Components
import CameraView from "../CameraView";
import Modal from "../Modal";

// Styles

import { TouchableOpacity } from "react-native";
import {
  DetectTextStyled,
  ImagePreviewStyled,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  SpinnerLoading,
} from "./styles";

// Utilities
import { fetchNutrition, getRecipes, identifyImage } from "./utilities";

const Identification = ({ navigation, route }) => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [nutrition, setNutrition] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // const identifyImage = async (imageData, isLive) => {
  //   const app = new Clarifai.App({
  //     apiKey: "0352be76758845c794f90c92cdbcac5d",
  //   });

  //   try {
  //     const res = await app.models.predict(Clarifai.FOOD_MODEL, imageData);
  //     const detectedObject = res.outputs[0].data.concepts[0].name;
  //     if (detectedObject === "beer") {
  //       setResult(
  //         "This item cannot be identified. Please try again. Alcohol is 7ram😤😤"
  //       );
  //     } else {
  //       setResult("Detected " + detectedObject);
  //       fetchNutrition(detectedObject, { setNutrition, setLoading });
  //       getRecipes(detectedObject, { navigation });
  //       setLive(false);
  //     }
  //     setLoading(false);
  //     setOpenModal(true);
  //     setLoading(true);
  //   } catch (error) {
  //     setResult("This item cannot be identified. Please try again.");
  //   }
  // };

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
            navigation={navigation}
            route={route}
          />
        )}

        {imageUrl && !live && !openModal && (
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <ImagePreviewStyled
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        )}

        {live && !openModal && (
          <CameraView
            loading={loading}
            result={result}
            setLoading={setLoading}
            loading={loading}
            setLive={setLive}
            identifyImage={identifyImage}
            setImageUrl={setImageUrl}
            setResult={setResult}
            setOpenModal={setOpenModal}
          />
        )}

        {loading && !live && !openModal && <SpinnerLoading color="white" />}

        {!live && !openModal && (
          <>
            <ButtonsRow>
              <CameraRoll
                setImageUrl={setImageUrl}
                setLoading={setLoading}
                identifyImage={identifyImage}
                setLive={setLive}
                setOpenModal={setOpenModal}
                setResult={setResult}
              />
              <Camera
                setImageUrl={setImageUrl}
                setLoading={setLoading}
                identifyImage={identifyImage}
                setLive={setLive}
                setOpenModal={setOpenModal}
                setResult={setResult}
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
