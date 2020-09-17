import styled from "styled-components";

import { Button, Icon, Text } from "native-base";

export const GalleryIcon = styled(Icon)`
  font-size: 50px;
`;

export const CameraIcon = styled(Icon)`
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
