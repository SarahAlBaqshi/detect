import styled from "styled-components";

import { Button, Icon, Image, Text, View } from "native-base";

//TODO ASK TEAM ABOUT OPACITY

//TEMP THEME
//main #3A5A40
// accent #588157
// secondary #DAD7CD

export const ButtonsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CameraIcon = styled(Icon)`
  font-size: 50px;
`;

export const GalleryIcon = styled(Icon)`
  font-size: 50px;
`;

export const ImageButtonStyled = styled(Button)`
  background-color: #3a5a4059;
  margin: 10px;
  width: 130px;
  height: 130px;
  justify-content: center;
  align-self: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: white 2px;
`;

export const ImageButtonTextStyled = styled(Text)`
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
  margin-top: 5px;
`;

export const DetectTextStyled = styled.Text`
  font-size: 70px;
  color: white;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 50px;
`;

export const ImagePreviewStyled = styled.Image`
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  border: 5px white solid;
  margin-bottom: 20px;
`;

export const ResultStyled = styled.Text`
  font-weight: bold;
  margin: 5px;
  align-self: center;
  font-size: 25px;
  margin-bottom: 25px;
  color: white;
  margin-top: 15px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 1;
  align-self: stretch;
  opacity: 0.9;
`;

export const DarkView = styled(View)`
  flex: 1;
  background-color: "rgba(0,0,0, 0.40)";
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 1;
  align-self: stretch;
`;
