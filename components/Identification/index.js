import React, { useState } from "react";

// Libraries || something to detect the iphone generation which will help us to make responsive design
import * as Device from "expo-device";

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
  ImagePreviewStyledIphoneX,
  ImagePreviewStyledIphone8,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  SpinnerLoading,
  ResultStyled,
  PlaceholderTextStyled,
  ProfileImageButton,
  IconWrapperIphoneX,
  IconWrapperIphone8,
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
            {Device.modelName === "iPhone X" ? (
              <>
                <ImagePreviewStyledIphoneX source={{ uri: imageUrl }} />
                <IconWrapperIphoneX>
                  <IconStyled
                    type="MaterialCommunityIcons"
                    name="fit-to-page-outline"
                  />
                </IconWrapperIphoneX>
              </>
            ) : (
              <>
                <ImagePreviewStyledIphone8 source={{ uri: imageUrl }} />
                <IconWrapperIphone8>
                  <IconStyled
                    type="MaterialCommunityIcons"
                    name="fit-to-page-outline"
                  />
                </IconWrapperIphone8>
              </>
            )}
          </ProfileImageButton>
        ) : (
          !openModal && (
            <PlaceholderTextStyled>PLEASE ADD A PHOTO</PlaceholderTextStyled>
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
          !openModal &&
          Device.modelName === "iPhone X" && (
            <ResultStyled>{result}</ResultStyled>
          )
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
