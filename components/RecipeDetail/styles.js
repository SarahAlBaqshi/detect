import { Button, Text } from "native-base";
import styled from "styled-components";

export const StyledScrollView = styled.ScrollView`
  background-color: #edf2f4;
  width: 100%;
  height: 100%;
`;

export const RecipeImage = styled.Image`
  width: 100%;
  height: 250px;
  align-self: center;
`;

export const RecipeLabel = styled.Text`
  font-weight: 400;
  font-size: 40px;
  padding-top: 15px;
  margin-left: 10px;
  color: #588157;
`;

export const Label = styled.Text`
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: black;
`;

export const RecipeIngredients = styled.Text`
  font-weight: 400;
  font-size: 20px;
  margin-left: 10px;
  color: grey;
`;

export const StyledView = styled.View`
  margin-bottom: 20px;
`;

export const BookmarkButton = styled(Button)`
  margin-left: auto;
  align-self: center;
`;

export const ShowNutritionText = styled.Text`
  color: #588157;
  font-weight: bold;
`;

export const ShowNutritionButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;

export const DietText = styled.Text`
  font-weight: bold;
`;
