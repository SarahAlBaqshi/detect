import { Button } from "native-base";
import styled from "styled-components";
import { View } from "native-base";

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 95px;
  width: 95%;
  height: 67%;
`;

export const ModalView = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  width: 100%;
  align-items: center;
`;

export const OpenButton = styled(Button)`
  align-self: center;
  margin-top: 10px;
  background-color: #588157;
  border-radius: 18px;
  padding: 10px 15px;
  margin-bottom: -15px;
`;

export const ShowRecipesButton = styled(Button)`
  align-self: center;
  margin-top: 10px;
  padding: 10px;
  padding-top: 0px;
  margin-bottom: -18px;
`;

export const OpenButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ShowRecipesButtonText = styled.Text`
  color: #588157;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const NutritionLabelStyled = styled.Text`
  text-align: center;
`;

export const DetectedObjectModalMaybeItsABananaText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: black;
  margin-bottom: 15px;
`;

export const ImagePreviewStyled = styled.Image`
  border-radius: 10px;
  margin: 10px;
  align-self: center;
  border-width: 5px;
  border-color: #3ea33c;
  width: 160px;
  height: 160px;
`;

export const PerformanceFactsView = styled(View)`
  border: 1px solid;
  flex: 1;
  background-color: #fff;
  justify-content: center;
`;
export const PerformanceFactsTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: 2px;
`;

export const PerformanceFactsHeader = styled(View)`
  border-bottom-color: black;
  border-bottom-width: 10px;
`;

export const PerformanceFactsServing = styled.Text`
  margin-left: 2px;
`;

export const PerformanceFactsCals = styled(View)`
  border-bottom-color: black;
  border-bottom-width: 4px;
`;

export const PerformanceFactsNutrients = styled(View)`
  font-weight: normal;
  text-align: left;
  border-bottom-width: 1px;
`;

export const PerformanceFactsFooter = styled(View)`
  border-top-color: black;
  border-top-width: 4px;
`;

export const NutritionPercentValues = styled.Text`
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

export const NutritionValues = styled.Text`
  margin-right: auto;
  margin-left: 10px;
  font-weight: bold;
`;

export const Asterisk = styled.Text`
  text-align: center;
  margin-top: 10px;
`;

export const FatCalorieValues = styled.Text`
  margin-left: auto;
  margin-right: 10px;
  margin-top: 5px;

  /* font-weight: bold; */
`;
export const CalorieValues = styled.Text`
  margin-right: auto;
  margin-left: 2px;
  margin-top: 5px;
  font-weight: bold;
`;

export const LoadingNutrition = styled.Text`
  margin-bottom: 30px;
`;
export const NotThisIngredient = styled.Text`
  align-self: center;
  color: red;
  margin-top: 20px;
`;
