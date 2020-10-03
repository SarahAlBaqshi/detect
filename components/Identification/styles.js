import styled from "styled-components";
import * as Device from "expo-device";
import { Button, Icon, Row, Spinner } from "native-base";

//TODO ASK TEAM ABOUT OPACITY

// TEMP THEME
// main #3A5A40
// accent #588157
// secondary #DAD7CD

export const ScanningTextStyled = styled.Text`
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: white;
`;

export const ButtonsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 120px;
  align-self: center;
`;

export const BottomButtonsRow = styled(Row)`
  align-self: center;
  position: absolute;
  justify-content: center;
  bottom: 30px;
`;

export const DetectTextStyled = styled.Text`
  font-size: 70px;
  color: white;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 17.5%;
  margin-bottom: 30px;
`;

export const ImagePreviewStyledIphoneX = styled.Image`
  border-radius: 10px;
  align-self: center;
  border-width: 5px;
  border-color: white;
  margin-bottom: 10%;
  margin-top: 10%;
  width: 100%;
  height: 100%;
`;

export const ImagePreviewStyledIphone8 = styled.Image`
  border-radius: 10px;
  align-self: center;
  border-width: 5px;
  border-color: white;
  margin-bottom: 30%;
  margin-top: 1%;
  width: 100%;
  height: 100%;
`;

export const ResultStyled = styled.Text`
  font-weight: bold;
  margin: 5px;
  align-self: center;
  font-size: 35px;
  margin-bottom: 25px;
  color: white;
  margin-top: 35px;
  text-align: center;
  /* TODO NICE FONT FAMILY */
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  opacity: 0.9;
`;

export const DarkView = styled.View`
  background-color: "rgba(0,0,0, 0.40)";
  width: 100%;
  height: 100%;
`;

export const SpinnerLoading = styled(Spinner)`
  position: absolute;
  align-self: center;
  top: 50%;
`;

export const PlaceholderTextStyled = styled.Text`
  font-size: 40px;
  color: white;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 17.5%;
  margin-bottom: 30px;
`;

export const ProfileImageButton = styled(Button)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10px;
  align-self: center;
`;

export const IconWrapperIphoneX = styled.View`
  background-color: green;
  opacity: 0.85;
  border-radius: 50px;
  width: 55px;
  height: 55px;
  align-self: flex-end;
  position: absolute;
  bottom: -11%;
  right: -9%;
`;

export const IconWrapperIphone8 = styled.View`
  background-color: green;
  opacity: 0.85;
  border-radius: 50px;
  width: 55px;
  height: 55px;
  align-self: flex-end;
  position: absolute;
  bottom: 5%;
  right: -9%;
`;

export const IconStyled = styled(Icon)`
  font-size: 36px;
  color: white;
  margin: auto;
  align-self: center;
`;
