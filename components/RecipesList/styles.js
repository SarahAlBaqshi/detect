import styled from "styled-components";
import { Button, Text, Icon, Row, Card } from "native-base";

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
  font-size: 47px;
  margin-top: 1%;
  margin-left: 2%;
`;

export const FavoritesButton = styled(Button)`
  background-color: #42d4f2;
  margin-top: 15px;
  align-self: center;
  width: 70%;
  align-items: center;
`;

export const FavoritesButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const IconWrapper = styled.View`
  background-color: #42d4f2;
  opacity: 0.9;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  align-self: flex-end;
  position: absolute;
  bottom: 1%;
  right: 3%;
`;

export const IconStyled = styled(Icon)`
  font-size: 40px;
  color: white;
  margin: auto;
  align-self: center;
`;

export const RecipeIcon = styled(Icon)`
  color: black;
  margin-left: 5px;
  font-size: 25px;
`;

export const RecipeCalories = styled.Text`
  font-size: 15px;
  text-align: center;
  padding: 0px 7px;
  font-weight: 400;
  letter-spacing: 1px;
`;
export const RecipeTotalTime = styled.Text`
  font-size: 15px;
  text-align: center;
  padding: 0px 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;
export const RecipeServing = styled.Text`
  font-size: 15px;
  text-align: center;
  padding: 0px 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const RecipeDescriptionRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
`;

export const KCAL = styled.Text`
  font-weight: 900;
  font-size: 22px;
  color: black;
  margin-bottom: 3px;
`;
