import styled from "styled-components";

import { Button, Icon, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export const IconWrapper = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const BackWrapper = styled(TouchableOpacity)`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;

  /* padding-right: 10px; */
`;

export const LightboxButtonWrapper = styled(TouchableOpacity)`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-top: 50px;
  margin-left: 10px;
  /* //TODO FIX SHADOW
  shadow-offset: {
    width: 0;
    height: 0.5;
  } */

  /* padding-right: 10px; */
`;

export const GoBackIcon = styled(Icon)`
  color: white;
  font-size: 38px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const GoBackIconDetailPage = styled(Icon)`
  color: black;
  font-size: 35px;
  align-self: center;
  margin-right: 3px;
  margin-top: 3px;
`;

export const GalleryIcon = styled(Icon)`
  font-size: 50px;
`;

export const CameraIcon = styled(Icon)`
  font-size: 50px;
`;
export const RecordIcon = styled(Icon)`
  font-size: 40px;
  color: #9f0000;
  margin: 0px;
  padding-left: 5px;
`;

export const ImageButtonStyled = styled(Button)`
  background-color: #3a5a40bf;
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

export const LiveScanButton = styled(Button)`
  background-color: #3a5a40bf;
  margin: 10px;
  width: 150px;
  height: 65px;
  align-self: center;
  border-radius: 10px;
  border: white 2px;
`;

export const LiveScanButtonText = styled(Text)`
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
  color: white;
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: -8px;
`;

export const RecipesButtonStyled = styled(Button)`
  background-color: #3a5a40bf;
  margin: 10px;
  width: 150px;
  height: 65px;
  align-self: center;
  border-radius: 10px;
  border: white 2px;
  justify-content: center;
  align-items: center;
`;

export const RecipesButtonText = styled(Text)`
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
  color: white;
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  padding-left: 4px;
`;

export const RecipesIcon = styled(Icon)`
  font-size: 45px;
  color: white;
  margin: 0;
  padding-right: 4px;
  padding-left: 10px;
  margin-left: auto;
`;
