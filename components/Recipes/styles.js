import { Button, Icon } from "native-base";
import styled from "styled-components";

export const BookmarksHeader = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  padding: 5px;
`;

export const BookmarksText = styled.Text`
  font-size: 40px;
  color: black;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const NoBookmarksText = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const NoBookmarksMsg = styled.Text`
  font-size: 20px;
  color: grey;
  text-align: center;
  padding-bottom: 20px;
`;

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
  width: 80%;
  letter-spacing: 2px;
`;

export const ButtonStyled = styled(Button)`
  background-color: #588157;
  padding: 0px 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

export const OpenIcon = styled(Icon)`
  color: #588157;
  align-self: center;
  font-size: 40px;
`;
