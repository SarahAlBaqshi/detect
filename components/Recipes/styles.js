import { Button, Row } from "native-base";
import styled from "styled-components";

export const ListItem = styled.View`
  background-color: red;
  width: 100%;
  height: auto;
  border: black solid 2px;
`;

export const RecipeImage = styled.Image`
  width: 75%;
  height: 200px;
  align-self: center;
  border: 5px green;
  border-radius: 20px;
  margin-top: 10px;
`;

export const RecipeLabel = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-left: 50px;
`;

export const RecipeRow = styled(Row)`
  align-items: center;
`;

export const ViewButtonStyled = styled.Text`
  color: #588157;
  font-weight: bold;
  margin-left: 70px;
`;
