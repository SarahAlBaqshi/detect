import React, { useState } from "react";

// Libraries || something to detect the iphone generation which will help us to make responsive design
import * as Device from "expo-device";

// Buttons
import CameraRoll from "../Buttons/CameraRoll";
import Camera from "../Buttons/Camera";

// Components
import Modal from "../Modal";

// Styles
import {
  DetectTextStyled,
  ImagePreviewStyledIphoneX,
  ImagePreviewStyledIphone8,
  BackgroundImage,
  DarkView,
  ButtonsRow,
  ScanningTextStyled,
  SpinnerLoading,
  ResultStyled,
  PlaceholderTextStyled,
  ProfileImageButton,
  IconWrapperIphoneX,
  IconWrapperIphone8,
  IconStyled,
  BottomButtonsRow,
} from "./styles";

// Utilities
import { identifyImage } from "./utilities";
import RecipesButton from "../Buttons/RecipesButton";

const Identification = ({ navigation, route }) => {
  const [imageUrl, setImageUrl] = useState();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [nutrition, setNutrition] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // Detect any ingredients
  // TODO: LESS TERNARY OPERATORS
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
                  <IconStyled type="FontAwesome" name="expand" />
                </IconWrapperIphoneX>
              </>
            ) : (
              <>
                <ImagePreviewStyledIphone8 source={{ uri: imageUrl }} />
                <IconWrapperIphone8>
                  <IconStyled type="FontAwesome" name="expand" />
                </IconWrapperIphone8>
              </>
            )}
          </ProfileImageButton>
        ) : (
          !openModal &&
          !live && (
            <PlaceholderTextStyled>PLEASE ADD A PHOTO</PlaceholderTextStyled>
          )
        )}

        {loading && !live && !openModal ? (
          <>
            <SpinnerLoading color="white" />
            <ScanningTextStyled>Scanning Item</ScanningTextStyled>
          </>
        ) : (
          !openModal &&
          Device.modelName === "iPhone 11 Pro Max" && (
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
            <BottomButtonsRow>
              <RecipesButton screen navigation={navigation} />
            </BottomButtonsRow>
          </>
        )}
      </DarkView>
    </BackgroundImage>
  );
};

export default Identification;
