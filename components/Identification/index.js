import React, { useState } from "react";
import Axios from "axios";

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

import { TouchableOpacity } from "react-native";
import {
  DetectTextStyled,
  ImagePreviewStyled,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  SpinnerLoading,
} from "./styles";

const Identification = ({ navigation, route }) => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
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
      } else {
        setResult("Detected " + detectedObject);
        fetchNutrition(detectedObject);
        getRecipes(detectedObject);
        setLive(false);
      }
      setLoading(false);
      setOpenModal(true);
      setLoading(true);
    } catch (error) {
      setResult("This item cannot be identified. Please try again.");
    }
  };

  // REVIEW: How about moving this to a store
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

  const getRecipes = async (detectedObject) => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${detectedObject}&app_id=3b9bd214&app_key=d0cc4a37d31d0b366d8d591e8dbea72c&from=0&to=5`
    );
    const FoundRecipesLabels = res.data.hits.map((hit) => hit.recipe.label);
    const FoundRecipesImages = res.data.hits.map((hit) => hit.recipe.image);
    const FoundRecipesIngredients = res.data.hits.map((hit) =>
      hit.recipe.ingredients.map((ingredient) => ingredient.text)
    );

    navigation.setParams({
      labels: FoundRecipesLabels,
      images: FoundRecipesImages,
      ingredients: FoundRecipesIngredients,
    });
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
            navigation={navigation}
            route={route}
          />
        )}
        {/* REVIEW: === false?? seriously?? I taught you better than this */}
        {imageUrl && live === false && openModal === false && (
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <ImagePreviewStyled
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        )}

        {live && openModal === false && (
          <CameraView
            loading={loading}
            result={result}
            setLoading={setLoading}
            loading={loading}
            setLive={setLive}
            identifyImage={identifyImage}
            setImageUrl={setImageUrl}
          />
        )}

        {loading && live === false && openModal === false && (
          <SpinnerLoading color="white" />
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
