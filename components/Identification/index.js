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
import {
  DetectTextStyled,
  ImagePreviewStyled,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  SpinnerLoading,
  ResultStyled,
  PlaceholderTextStyled,
  ImagePreviewTouchableOpacity,
  ProfileImageButton,
  IconWrapper,
  IconStyled,
} from "./styles";

// Utilities
import { identifyImage } from "./utilities";

const Identification = ({ navigation, route }) => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [nutrition, setNutrition] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

        {imageUrl && !live && !openModal ? (
          <ProfileImageButton transparent onPress={() => setOpenModal(true)}>
            <ImagePreviewStyled source={{ uri: imageUrl }} />

            <IconWrapper>
              <IconStyled
                type="MaterialCommunityIcons"
                name="fit-to-page-outline"
              />
            </IconWrapper>
          </ProfileImageButton>
        ) : (
          !openModal && (
            <PlaceholderTextStyled>
              PLEASE ADD A PHOTO OR YOU WILL GET PUNISHED REALLY BAD
            </PlaceholderTextStyled>
          )
        )}

        {live && !openModal && (
          <CameraView
            result={result}
            setLoading={setLoading}
            loading={loading}
            setLive={setLive}
            identifyImage={identifyImage}
            setImageUrl={setImageUrl}
            setResult={setResult}
            setOpenModal={setOpenModal}
            navigation={navigation}
            setNutrition={setNutrition}
          />
        )}

        {loading && !live && !openModal ? (
          <SpinnerLoading color="white" />
        ) : (
          !openModal && <ResultStyled>{result}</ResultStyled>
        )}

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
                setNutrition={setNutrition}
                navigation={navigation}
              />
              <Camera
                setImageUrl={setImageUrl}
                setLoading={setLoading}
                identifyImage={identifyImage}
                setLive={setLive}
                setOpenModal={setOpenModal}
                setResult={setResult}
                setNutrition={setNutrition}
                navigation={navigation}
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
