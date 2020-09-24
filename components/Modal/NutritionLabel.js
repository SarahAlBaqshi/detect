import React from "react";
import { Text } from "react-native";
import {
  PerformanceFactsTitle,
  PerformanceFactsView,
  PerformanceFactsHeader,
  PerformanceFactsFooter,
  PerformanceFactsCals,
  PerformanceFactsNutrients,
  NutritionValues,
  CalorieValues,
  FatCalorieValues,
  PerformanceFactsServing,
  NutritionPercentValues,
  Asterisk,
} from "./styles";
import { Grid, Col, Row } from "native-base";

const NutritionLabel = ({ nutrition }) => {
  return (
    <>
      <PerformanceFactsView>
        <PerformanceFactsHeader>
          <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
          <PerformanceFactsServing>
            Serving Size {nutrition.servingSize}
          </PerformanceFactsServing>
        </PerformanceFactsHeader>
        <PerformanceFactsCals>
          <PerformanceFactsServing>Amount Per Serving:</PerformanceFactsServing>
          <Row>
            <CalorieValues>
              Total Calories {nutrition.totalCalories}
            </CalorieValues>
            <FatCalorieValues>
              Fat Calories {nutrition.fatCalories}
            </FatCalorieValues>
          </Row>
        </PerformanceFactsCals>

        <PerformanceFactsNutrients>
          <NutritionPercentValues> % Daily Value*</NutritionPercentValues>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Total Fat</Text>
            <NutritionValues>{nutrition.totalFat}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.totalFatPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Saturated Fat</Text>
            <NutritionValues>{nutrition.saturatedFat}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.saturatedFatPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Trans Fat</Text>
            <NutritionValues>{nutrition.transFat}</NutritionValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Cholesterol</Text>
            <NutritionValues>{nutrition.cholesterol}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.cholesterolPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Sodium</Text>
            <NutritionValues>{nutrition.sodium}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.sodiumPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Total Carbohydrates</Text>
            <NutritionValues>{nutrition.totalCarbohydrates}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.totalCarbohydratesPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Dietary Fiber </Text>
            <NutritionValues>{nutrition.dietaryFiber}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.dietaryFiberPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsNutrients>
          <Row>
            <Text> Sugar</Text>
            <NutritionValues>{nutrition.sugar}</NutritionValues>
          </Row>
        </PerformanceFactsNutrients>

        <PerformanceFactsHeader>
          <Row>
            <Text> Protein</Text>
            <NutritionValues>{nutrition.protein}</NutritionValues>
            <NutritionPercentValues>
              {nutrition.proteinPercent}%
            </NutritionPercentValues>
          </Row>
        </PerformanceFactsHeader>

        <Grid>
          <Col>
            <Row>
              <Text> Vitamin A</Text>
              <NutritionPercentValues>
                {nutrition.vitaminA}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Calcium</Text>
              <NutritionPercentValues>
                {nutrition.calcium}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Vitamin E</Text>
              <NutritionPercentValues>
                {nutrition.vitaminE}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Riboflavin</Text>
              <NutritionPercentValues>
                {nutrition.riboflavin}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Vitamin B6</Text>
              <NutritionPercentValues>
                {nutrition.vitaminB6}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Phosphorus</Text>
              <NutritionPercentValues>
                {nutrition.phosphorus}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text> Zinc</Text>
              <NutritionPercentValues>{nutrition.zinc}%</NutritionPercentValues>
            </Row>
          </Col>
          <Col>
            <Row>
              <Text>Vitamin C</Text>
              <NutritionPercentValues>
                {nutrition.vitaminC}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text>Iron</Text>
              <NutritionPercentValues>{nutrition.iron}%</NutritionPercentValues>
            </Row>
            <Row>
              <Text>Thiamin</Text>
              <NutritionPercentValues>
                {nutrition.thiamin}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text>Niacin</Text>
              <NutritionPercentValues>
                {nutrition.niacin}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text>Folate</Text>
              <NutritionPercentValues>
                {nutrition.folate}%
              </NutritionPercentValues>
            </Row>
            <Row>
              <Text>Magnesium</Text>
              <NutritionPercentValues>
                {nutrition.magnesium}%
              </NutritionPercentValues>
            </Row>
          </Col>
        </Grid>
      </PerformanceFactsView>
      <PerformanceFactsFooter>
        <Asterisk>
          *Percent Daily Values are based on a 2000 calorie diet
        </Asterisk>
      </PerformanceFactsFooter>
    </>
  );
};
export default NutritionLabel;
