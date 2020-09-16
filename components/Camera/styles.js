import styled from "styled-components";

import { Button, Image, Text, View } from "native-base";

//TODO ASK TEAM ABOUT OPACITY

//TEMP THEME
//main #3A5A40
// accent #588157
// secondary #DAD7CD

export const ImageButtonStyled = styled(Button)`
  background-color: #3a5a40e6;
  margin: 20px;
  width: 115px;
  height: 50px;
  justify-content: center;
  align-self: center;
  border-radius: 10px;
`;

export const ImageButtonTextStyled = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  margin-right: auto;
  margin-left: auto;
`;

export const DetectTextStyled = styled.Text`
  font-size: 70px;
  color: #f9f1f1;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 50px;
`;

export const ImagePreviewStyled = styled.Image`
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  border: 5px #3a5a40 solid;
  margin-bottom: 20px;
`;

export const ResultStyled = styled.Text`
  font-weight: bold;
  margin: 5px;
  align-self: center;
  font-size: 25px;
  margin-bottom: 25px;
  color: #dad7cd;
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
