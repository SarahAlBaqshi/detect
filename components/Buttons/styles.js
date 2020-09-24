import styled from "styled-components";

import { Button, Icon, Text } from "native-base";

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

export const GoBackIcon = styled(Icon)`
  color: white;
  font-size: 30px;
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const GoBackIconDetailPage = styled(Icon)`
  color: black;
  font-size: 30px;
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
  position: absolute;
  bottom: 30px;
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
