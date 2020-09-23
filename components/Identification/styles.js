import styled from "styled-components";

import { Spinner } from "native-base";

//TODO ASK TEAM ABOUT OPACITY

// TEMP THEME
// main #3A5A40
// accent #588157
// secondary #DAD7CD

export const ButtonsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 120px;
  align-self: center;
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

export const ImagePreviewStyled = styled.Image`
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  border-width: 5px;
  border-color: white;
  margin-bottom: 20px;
  margin-top: 40px;
  width: 200px;
  height: 200px;
`;

export const ResultStyled = styled.Text`
  font-weight: bold;
  margin: 5px;
  align-self: center;
  font-size: 35px;
  margin-bottom: 25px;
  color: white;
  margin-top: 15px;
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
