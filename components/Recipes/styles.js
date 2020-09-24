import styled from "styled-components";
import { Button } from "native-base";

export const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
  align-self: center;
`;

export const RecipeLabel = styled.Text`
  font-weight: 300;
  font-size: 30px;
  padding-top: 15px;
  padding-bottom: 30px;
  margin-left: 15px;
  width: 90%;
  letter-spacing: 2px;
`;

export const ButtonStyled = styled(Button)`
  background-color: #588157;
  padding: 0px 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  margin-left: 15px;
`;
