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

const NutritionLabel = ({ nutrition, recipe, perServing }) => {
  // TODO HIDE VALUES IF NONEXISTENT
  // calories: foundCalories,
  // dietLabels: foundDietLabels,
  // cautions: foundCautions,
  // healthLabels: foundHealthLabels,
  // ingredientLines: foundIngredientLines,
  // source: foundSource,
  // servingYield: foundYield,
  // totalTime: foundTotalTime,
  // totalNutrients: foundTotalNutrients,
  // totalDaily: foundTotalDaily,
  // digest: foundDigest,

  // console.log(recipe.digest);

  if (recipe) {
    //--------------------------------RECIPES---------------------------------
    if (perServing) {
      const caloriesPerServing = recipe.calories / recipe.servingYield;
    } else {
      return (
        <>
          <PerformanceFactsView>
            <PerformanceFactsHeader>
              <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
              <PerformanceFactsServing>
                Serving Size {recipe.servingYield}
              </PerformanceFactsServing>
            </PerformanceFactsHeader>
            <PerformanceFactsCals>
              <PerformanceFactsServing>
                Amount Per Serving:
              </PerformanceFactsServing>
              <Row>
                <CalorieValues>Total Calories {recipe.calories}</CalorieValues>
                <FatCalorieValues>
                  Fat Calories {recipe.fatCalories}
                </FatCalorieValues>
              </Row>
            </PerformanceFactsCals>

            <PerformanceFactsNutrients>
              <NutritionPercentValues> % Daily Value*</NutritionPercentValues>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Total Fat</Text>
                <NutritionValues>{recipe.totalFat}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.totalFatPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Saturated Fat</Text>
                <NutritionValues>{recipe.saturatedFat}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.saturatedFatPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Trans Fat</Text>
                <NutritionValues>{recipe.transFat}</NutritionValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Cholesterol</Text>
                <NutritionValues>{recipe.cholesterol}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.cholesterolPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Sodium</Text>
                <NutritionValues>{recipe.sodium}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.sodiumPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Total Carbohydrates</Text>
                <NutritionValues>{recipe.totalCarbohydrates}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.totalCarbohydratesPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Dietary Fiber </Text>
                <NutritionValues>{recipe.dietaryFiber}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.dietaryFiberPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsNutrients>
              <Row>
                <Text> Sugar</Text>
                <NutritionValues>{recipe.sugar}</NutritionValues>
              </Row>
            </PerformanceFactsNutrients>

            <PerformanceFactsHeader>
              <Row>
                <Text> Protein</Text>
                <NutritionValues>{recipe.protein}</NutritionValues>
                <NutritionPercentValues>
                  {recipe.proteinPercent}%
                </NutritionPercentValues>
              </Row>
            </PerformanceFactsHeader>

            <Grid>
              <Col>
                <Row>
                  <Text> Vitamin A</Text>
                  <NutritionPercentValues>
                    {recipe.vitaminA}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Calcium</Text>
                  <NutritionPercentValues>
                    {recipe.calcium}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Vitamin E</Text>
                  <NutritionPercentValues>
                    {recipe.vitaminE}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Riboflavin</Text>
                  <NutritionPercentValues>
                    {recipe.riboflavin}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Vitamin B6</Text>
                  <NutritionPercentValues>
                    {recipe.vitaminB6}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Phosphorus</Text>
                  <NutritionPercentValues>
                    {recipe.phosphorus}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text> Zinc</Text>
                  <NutritionPercentValues>
                    {recipe.zinc}%
                  </NutritionPercentValues>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Text>Vitamin C</Text>
                  <NutritionPercentValues>
                    {recipe.vitaminC}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text>Iron</Text>
                  <NutritionPercentValues>
                    {recipe.iron}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text>Thiamin</Text>
                  <NutritionPercentValues>
                    {recipe.thiamin}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text>Niacin</Text>
                  <NutritionPercentValues>
                    {recipe.niacin}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text>Folate</Text>
                  <NutritionPercentValues>
                    {recipe.folate}%
                  </NutritionPercentValues>
                </Row>
                <Row>
                  <Text>Magnesium</Text>
                  <NutritionPercentValues>
                    {recipe.magnesium}%
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
    }
  } else {
    //--------------------------------INGREDIENTS---------------------------------
    return (
      <>
        <PerformanceFactsView>
          <PerformanceFactsHeader>
            <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
            {nutrition.servingSize ? (
              <PerformanceFactsServing>
                Serving Size
                {nutrition.servingSize}
              </PerformanceFactsServing>
            ) : (
              <PerformanceFactsServing>
                Serving Size Unknown
              </PerformanceFactsServing>
            )}
          </PerformanceFactsHeader>
          <PerformanceFactsCals>
            <PerformanceFactsServing>
              Amount Per Serving:
            </PerformanceFactsServing>
            <Row>
              {nutrition.totalCalories && (
                <CalorieValues>
                  Total Calories {nutrition.totalCalories}
                </CalorieValues>
              )}
              {nutrition.fatCalories && (
                <FatCalorieValues>
                  Fat Calories {nutrition.fatCalories}
                </FatCalorieValues>
              )}
            </Row>
          </PerformanceFactsCals>

          <PerformanceFactsNutrients>
            <NutritionPercentValues> % Daily Value*</NutritionPercentValues>
          </PerformanceFactsNutrients>

          {nutrition.totalFat && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Total Fat</Text>
                <NutritionValues>{nutrition.totalFat}</NutritionValues>
                {nutrition.proteinPercent && (
                  <NutritionPercentValues>
                    {nutrition.totalFatPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.saturatedFat && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Saturated Fat</Text>
                <NutritionValues>{nutrition.saturatedFat}</NutritionValues>
                {nutrition.saturatedFatPercent && (
                  <NutritionPercentValues>
                    {nutrition.saturatedFatPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.transFat && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Trans Fat</Text>
                <NutritionValues>{nutrition.transFat}</NutritionValues>
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.cholesterol && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Cholesterol</Text>
                <NutritionValues>{nutrition.cholesterol}</NutritionValues>
                {nutrition.cholesterolPercent && (
                  <NutritionPercentValues>
                    {nutrition.cholesterolPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.sodium && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Sodium</Text>
                <NutritionValues>{nutrition.sodium}</NutritionValues>
                {nutrition.sodiumPercent && (
                  <NutritionPercentValues>
                    {nutrition.sodiumPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.totalCarbohydrates && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Total Carbohydrates</Text>
                <NutritionValues>
                  {nutrition.totalCarbohydrates}
                </NutritionValues>
                {nutrition.carbohydratesPercent && (
                  <NutritionPercentValues>
                    {nutrition.carbohydratesPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.dietaryFiber && (
            <PerformanceFactsNutrients>
              <Row>
                <Text> Dietary Fiber </Text>
                <NutritionValues>{nutrition.dietaryFiber}</NutritionValues>
                {nutrition.dietaryFiberPercent && (
                  <NutritionPercentValues>
                    {nutrition.dietaryFiberPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.sugar && (
            <PerformanceFactsNutrients>
              <Row>
                <>
                  <Text> Sugar</Text>
                  <NutritionValues>{nutrition.sugar}</NutritionValues>
                </>
              </Row>
            </PerformanceFactsNutrients>
          )}

          {nutrition.protein && (
            <PerformanceFactsHeader>
              <Row>
                <Text> Protein</Text>
                <NutritionValues>{nutrition.protein}</NutritionValues>
                {nutrition.proteinPercent && (
                  <NutritionPercentValues>
                    {nutrition.proteinPercent}%
                  </NutritionPercentValues>
                )}
              </Row>
            </PerformanceFactsHeader>
          )}

          <Grid>
            <Col>
              {nutrition.vitaminA && (
                <Row>
                  <Text> Vitamin A</Text>
                  <NutritionPercentValues>
                    {nutrition.vitaminA}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.calcium && (
                <Row>
                  <Text> Calcium</Text>
                  <NutritionPercentValues>
                    {nutrition.calcium}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.vitaminE && (
                <Row>
                  <Text> Vitamin E</Text>
                  <NutritionPercentValues>
                    {nutrition.vitaminE}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.riboflavin && (
                <Row>
                  <Text> Riboflavin</Text>
                  <NutritionPercentValues>
                    {nutrition.riboflavin}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.vitaminB6 && (
                <Row>
                  <Text> Vitamin B6</Text>
                  <NutritionPercentValues>
                    {nutrition.vitaminB6}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.phosphorus && (
                <Row>
                  <Text> Phosphorus</Text>
                  <NutritionPercentValues>
                    {nutrition.phosphorus}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.zinc && (
                <Row>
                  <Text> Zinc</Text>
                  <NutritionPercentValues>
                    {nutrition.zinc}%
                  </NutritionPercentValues>
                </Row>
              )}
            </Col>
            <Col>
              {nutrition.vitaminC && (
                <Row>
                  <Text>Vitamin C</Text>
                  <NutritionPercentValues>
                    {nutrition.vitaminC}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.iron && (
                <Row>
                  <Text>Iron</Text>
                  <NutritionPercentValues>
                    {nutrition.iron}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.thiamin && (
                <Row>
                  <Text>Thiamin</Text>
                  <NutritionPercentValues>
                    {nutrition.thiamin}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.niacin && (
                <Row>
                  <Text>Niacin</Text>
                  <NutritionPercentValues>
                    {nutrition.niacin}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.folate && (
                <Row>
                  <Text>Folate</Text>
                  <NutritionPercentValues>
                    {nutrition.folate}%
                  </NutritionPercentValues>
                </Row>
              )}
              {nutrition.magnesium && (
                <Row>
                  <Text>Magnesium</Text>
                  <NutritionPercentValues>
                    {nutrition.magnesium}%
                  </NutritionPercentValues>
                </Row>
              )}
            </Col>
          </Grid>
        </PerformanceFactsView>
        <PerformanceFactsFooter>
          <Asterisk>
            *Percent Daily Values are based on a 2000 calorie diet
          </Asterisk>
          <Asterisk>(Excluded values are not available)</Asterisk>
        </PerformanceFactsFooter>
      </>
    );
  }
};
export default NutritionLabel;
