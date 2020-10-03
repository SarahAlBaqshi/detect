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
  NutritionFailedText,
} from "./styles";
import { Grid, Col, Row } from "native-base";
import { observer } from "mobx-react";

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
    // console.log("NutritionLabel -> recipe", recipe);
    //--------------------------------RECIPES---------------------------------
    if (perServing) {
      const caloriesPerServing = recipe.calories / recipe.servingYield;
    } else {
      const calories = Math.round(recipe.calories);
      const fat = Math.round(recipe.totalNutrients.FAT.quantity);

      const fatPercent = Math.round(recipe.totalDaily.FAT.quantity);

      const satFat = Math.round(recipe.totalNutrients.FASAT.quantity);
      const satFatPercent = Math.round(recipe.totalDaily.FASAT.quantity);

      const cholesterol = Math.round(recipe.totalNutrients.CHOLE.quantity);
      const cholesterolPercent = Math.round(recipe.totalDaily.CHOLE.quantity);

      // TODO WHAT IF A VALUE DOESN'T EXIST?
      console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOO", recipe.digest[1].total);
      return (
        <>
          {/*  TODO UTILIZE ALL OTHER RECIPE VALUES */}
          <PerformanceFactsView>
            <PerformanceFactsHeader>
              <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
              {recipe.servingYield ? (
                <PerformanceFactsServing>
                  Serving Size {recipe.servingYield}
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
                {recipe.calories && (
                  <CalorieValues>Total Calories {calories}</CalorieValues>
                )}
                {recipe.fatCalories && (
                  <FatCalorieValues>
                    Fat Calories {recipe.fatCalories}
                    {/* TODO */}
                  </FatCalorieValues>
                )}
              </Row>
            </PerformanceFactsCals>

            <PerformanceFactsNutrients>
              {/* TODO MAYBE ADD ASTERISK HERE? */}
              <NutritionPercentValues> % Daily Value*</NutritionPercentValues>
            </PerformanceFactsNutrients>

            {recipe.totalNutrients.FAT.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Total Fat</Text>
                  <NutritionValues>
                    {fat} {recipe.totalNutrients.FAT.unit}
                  </NutritionValues>
                  {recipe.totalDaily.FAT.quantity && (
                    <NutritionPercentValues>
                      {fatPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.FASAT.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Saturated Fat</Text>
                  <NutritionValues>
                    {satFat} {recipe.totalNutrients.FASAT.unit}
                  </NutritionValues>
                  {recipe.totalDaily.FASAT.quantity && (
                    <NutritionPercentValues>
                      {satFatPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.transFat && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Trans Fat</Text>
                  <NutritionValues>{recipe.transFat}</NutritionValues>
                </Row>
              </PerformanceFactsNutrients>
            )}
            {/* TODO */}

            {/*TODO {recipe.totalNutrients.CHOLE.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Cholesterol</Text>
                  <NutritionValues>
                    {cholesterol} {recipe.totalNutrients.CHOLE.unit}
                  </NutritionValues>
                  {recipe.totalDaily.CHOLE.quantity && (
                    <NutritionPercentValues>
                      {cholesterolPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )} */}

            {recipe.sodium && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Sodium</Text>
                  <NutritionValues>{recipe.sodium}</NutritionValues>
                  {recipe.sodiumPercent && (
                    <NutritionPercentValues>
                      {recipe.sodiumPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalCarbohydrates && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Total Carbohydrates</Text>
                  <NutritionValues>{recipe.totalCarbohydrates}</NutritionValues>
                  {recipe.carbohydratesPercent && (
                    <NutritionPercentValues>
                      {recipe.carbohydratesPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.dietaryFiber && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Dietary Fiber </Text>
                  <NutritionValues>{recipe.dietaryFiber}</NutritionValues>
                  {recipe.dietaryFiberPercent && (
                    <NutritionPercentValues>
                      {recipe.dietaryFiberPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.sugar && (
              <PerformanceFactsNutrients>
                <Row>
                  <>
                    <Text> Sugar</Text>
                    <NutritionValues>{recipe.sugar}</NutritionValues>
                  </>
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.protein && (
              <PerformanceFactsHeader>
                <Row>
                  <Text> Protein</Text>
                  <NutritionValues>{recipe.protein}</NutritionValues>
                  {recipe.proteinPercent && (
                    <NutritionPercentValues>
                      {recipe.proteinPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsHeader>
            )}

            <Grid>
              <Col>
                {recipe.vitaminA && (
                  <Row>
                    <Text> Vitamin A</Text>
                    <NutritionPercentValues>
                      {recipe.vitaminA}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.calcium && (
                  <Row>
                    <Text> Calcium</Text>
                    <NutritionPercentValues>
                      {recipe.calcium}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.vitaminE && (
                  <Row>
                    <Text> Vitamin E</Text>
                    <NutritionPercentValues>
                      {recipe.vitaminE}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.riboflavin && (
                  <Row>
                    <Text> Riboflavin</Text>
                    <NutritionPercentValues>
                      {recipe.riboflavin}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.vitaminB6 && (
                  <Row>
                    <Text> Vitamin B6</Text>
                    <NutritionPercentValues>
                      {recipe.vitaminB6}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.phosphorus && (
                  <Row>
                    <Text> Phosphorus</Text>
                    <NutritionPercentValues>
                      {recipe.phosphorus}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.zinc && (
                  <Row>
                    <Text> Zinc</Text>
                    <NutritionPercentValues>
                      {recipe.zinc}%
                    </NutritionPercentValues>
                  </Row>
                )}
              </Col>
              <Col>
                {recipe.vitaminC && (
                  <Row>
                    <Text>Vitamin C</Text>
                    <NutritionPercentValues>
                      {recipe.vitaminC}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.iron && (
                  <Row>
                    <Text>Iron</Text>
                    <NutritionPercentValues>
                      {recipe.iron}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.thiamin && (
                  <Row>
                    <Text>Thiamin</Text>
                    <NutritionPercentValues>
                      {recipe.thiamin}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.niacin && (
                  <Row>
                    <Text>Niacin</Text>
                    <NutritionPercentValues>
                      {recipe.niacin}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.folate && (
                  <Row>
                    <Text>Folate</Text>
                    <NutritionPercentValues>
                      {recipe.folate}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.magnesium && (
                  <Row>
                    <Text>Magnesium</Text>
                    <NutritionPercentValues>
                      {recipe.magnesium}%
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
  } else {
    //--------------------------------INGREDIENTS---------------------------------
    if (nutrition === "Nutrition Failed") {
      return (
        <NutritionFailedText>No Nutrition Facts Available</NutritionFailedText>
      );
    } else {
      return (
        <>
          <PerformanceFactsView>
            <PerformanceFactsHeader>
              <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
              {nutrition.servingSize ? (
                <PerformanceFactsServing>
                  Serving Size {nutrition.servingSize}
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
              {/* //TODO MAYBE ADD ASTERISK HERE? */}
              <NutritionPercentValues> % Daily Value*</NutritionPercentValues>
            </PerformanceFactsNutrients>

            {nutrition.totalFat && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Total Fat</Text>
                  <NutritionValues>{nutrition.totalFat}</NutritionValues>
                  {nutrition.totalFatPercent && (
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
  }
};
export default observer(NutritionLabel);
