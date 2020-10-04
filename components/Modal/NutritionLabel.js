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
      const serving = recipe.servingYield;
      const calories = Math.round(recipe.calories / serving) || null;
      const fat =
        Math.round(recipe.totalNutrients.FAT.quantity / serving) || null;
      // TODO PARSEFLOAT
      const fatPercent =
        Math.round(recipe.totalDaily.FAT.quantity / serving) || null;

      const satFat =
        Math.round(recipe.totalNutrients.FASAT.quantity / serving) || null;
      const satFatPercent =
        Math.round(recipe.totalDaily.FASAT.quantity / serving) || null;

      const cholesterol =
        Math.round(recipe.totalNutrients.CHOLE.quantity / serving) || null;
      const cholesterolPercent =
        Math.round(recipe.totalDaily.CHOLE.quantity / serving) || null;

      const sodium =
        Math.round(recipe.totalNutrients.NA.quantity / serving) || null;
      const sodiumPercent =
        Math.round(recipe.totalDaily.NA.quantity / serving) || null;

      const carbohydrates =
        Math.round(recipe.totalNutrients.CHOCDF.quantity / serving) || null;
      const carbohydratesPercent =
        Math.round(recipe.totalDaily.CHOCDF.quantity / serving) || null;

      const dietaryFiber =
        Math.round(recipe.totalNutrients.FIBTG.quantity / serving) || null;
      const dietaryFiberPercent =
        Math.round(recipe.totalDaily.FIBTG.quantity / serving) || null;

      const sugar =
        Math.round(recipe.totalNutrients.SUGAR.quantity / serving) || null;

      // TODO const addedSugar = Math.round(recipe.totalNutrients.SUGAR.added.quantity / serving) || null;

      const protein =
        Math.round(recipe.totalNutrients.PROCNT.quantity / serving) || null;
      const proteinPercent =
        Math.round(recipe.totalDaily.PROCNT.quantity / serving) || null;

      const vitaminA =
        Math.round(recipe.totalDaily.VITA_RAE.quantity / serving) || null;

      const calcium =
        Math.round(recipe.totalDaily.CA.quantity / serving) || null;

      const vitaminE =
        Math.round(recipe.totalDaily.TOCPHA.quantity / serving) || null;

      const riboflavin =
        Math.round(recipe.totalDaily.RIBF.quantity / serving) || null;

      const vitaminB6 =
        Math.round(recipe.totalDaily.VITB6A.quantity / serving) || null;

      const phosphorus =
        Math.round(recipe.totalDaily.P.quantity / serving) || null;

      const zinc = Math.round(recipe.totalDaily.ZN.quantity / serving) || null;

      const vitaminC =
        Math.round(recipe.totalDaily.VITC.quantity / serving) || null;

      const iron = Math.round(recipe.totalDaily.FE.quantity / serving) || null;

      const thiamin =
        Math.round(recipe.totalDaily.THIA.quantity / serving) || null;

      const niacin =
        Math.round(recipe.totalDaily.NIA.quantity / serving) || null;

      const folate =
        Math.round(recipe.totalDaily.FOLDFE.quantity / serving) || null;

      const magnesium =
        Math.round(recipe.totalDaily.MG.quantity / serving) || null;
      return (
        <>
          {/*  TODO UTILIZE ALL OTHER RECIPE VALUES */}
          <PerformanceFactsView>
            <PerformanceFactsHeader>
              <PerformanceFactsTitle>Nutrition Facts</PerformanceFactsTitle>
            </PerformanceFactsHeader>
            <PerformanceFactsCals>
              {/* <PerformanceFactsServing>
                Amount Per Serving:
              </PerformanceFactsServing> */}
              <PerformanceFactsServing>Per Serving:</PerformanceFactsServing>
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

            {recipe.totalNutrients.NA.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Sodium</Text>
                  <NutritionValues>
                    {sodium} {recipe.totalNutrients.NA.unit}
                  </NutritionValues>
                  {recipe.totalDaily.NA.quantity && (
                    <NutritionPercentValues>
                      {sodiumPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.CHOCDF.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Total Carbohydrates</Text>
                  <NutritionValues>
                    {carbohydrates} {recipe.totalNutrients.CHOCDF.unit}
                  </NutritionValues>
                  {recipe.totalDaily.CHOCDF.quantity && (
                    <NutritionPercentValues>
                      {carbohydratesPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.FIBTG.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Dietary Fiber </Text>
                  <NutritionValues>
                    {dietaryFiber} {recipe.totalNutrients.CHOCDF.unit}
                  </NutritionValues>
                  {recipe.totalDaily.CHOCDF.quantity && (
                    <NutritionPercentValues>
                      {dietaryFiberPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.SUGAR.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <>
                    <Text> Sugar</Text>
                    <NutritionValues>
                      {sugar} {recipe.totalNutrients.SUGAR.unit}
                    </NutritionValues>
                  </>
                </Row>
              </PerformanceFactsNutrients>
            )}

            {/* //TODO {recipe.addedSugar && (
              <PerformanceFactsNutrients>
                <Row>
                  <>
                    <Text> Sugar</Text>
                    <NutritionValues>{recipe.addedSugar}</NutritionValues>
                  </>
                </Row>
              </PerformanceFactsNutrients>
            )} */}

            {recipe.totalNutrients.PROCNT.quantity && (
              <PerformanceFactsHeader>
                <Row>
                  <Text> Protein</Text>
                  <NutritionValues>
                    {protein} {recipe.totalNutrients.PROCNT.unit}
                  </NutritionValues>
                  {recipe.totalDaily.PROCNT.quantity && (
                    <NutritionPercentValues>
                      {proteinPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsHeader>
            )}

            <Grid>
              <Col>
                {recipe.totalDaily.VITA_RAE.quantity && (
                  <Row>
                    <Text> Vitamin A</Text>
                    <NutritionPercentValues>{vitaminA}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.CA.quantity && (
                  <Row>
                    <Text> Calcium</Text>
                    <NutritionPercentValues>{calcium}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.TOCPHA.quantity && (
                  <Row>
                    <Text> Vitamin E</Text>
                    <NutritionPercentValues>{vitaminE}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.RIBF.quantity && (
                  <Row>
                    <Text> Riboflavin</Text>
                    <NutritionPercentValues>
                      {riboflavin}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.VITB6A.quantity && (
                  <Row>
                    <Text> Vitamin B6</Text>
                    <NutritionPercentValues>
                      {vitaminB6}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.P.quantity && (
                  <Row>
                    <Text> Phosphorus</Text>
                    <NutritionPercentValues>
                      {phosphorus}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.ZN.quantity && (
                  <Row>
                    <Text> Zinc</Text>
                    <NutritionPercentValues>{zinc}%</NutritionPercentValues>
                  </Row>
                )}
              </Col>
              <Col>
                {recipe.totalDaily.VITC.quantity && (
                  <Row>
                    <Text>Vitamin C</Text>
                    <NutritionPercentValues>{vitaminC}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.FE.quantity && (
                  <Row>
                    <Text>Iron</Text>
                    <NutritionPercentValues>{iron}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.THIA.quantity && (
                  <Row>
                    <Text>Thiamin</Text>
                    <NutritionPercentValues>{thiamin}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.NIA.quantity && (
                  <Row>
                    <Text>Niacin</Text>
                    <NutritionPercentValues>{niacin}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.FOLDFE.quantity && (
                  <Row>
                    <Text>Folate</Text>
                    <NutritionPercentValues>{folate}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.MG.quantity && (
                  <Row>
                    <Text>Magnesium</Text>
                    <NutritionPercentValues>
                      {magnesium}%
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
    } else {
      const calories = Math.round(recipe.calories) || null;
      const fat = Math.round(recipe.totalNutrients.FAT.quantity) || null;

      const fatPercent = Math.round(recipe.totalDaily.FAT.quantity) || null;

      const satFat = Math.round(recipe.totalNutrients.FASAT.quantity) || null;
      const satFatPercent =
        Math.round(recipe.totalDaily.FASAT.quantity) || null;

      const cholesterol =
        Math.round(recipe.totalNutrients.CHOLE.quantity) || null;
      const cholesterolPercent =
        Math.round(recipe.totalDaily.CHOLE.quantity) || null;

      const sodium = Math.round(recipe.totalNutrients.NA.quantity) || null;
      const sodiumPercent = Math.round(recipe.totalDaily.NA.quantity) || null;

      const carbohydrates =
        Math.round(recipe.totalNutrients.CHOCDF.quantity) || null;
      const carbohydratesPercent =
        Math.round(recipe.totalDaily.CHOCDF.quantity) || null;

      const dietaryFiber =
        Math.round(recipe.totalNutrients.FIBTG.quantity) || null;
      const dietaryFiberPercent =
        Math.round(recipe.totalDaily.FIBTG.quantity) || null;

      const sugar = Math.round(recipe.totalNutrients.SUGAR.quantity) || null;

      // TODO const addedSugar = Math.round(recipe.totalNutrients.SUGAR.added.quantity) || null;

      const protein = Math.round(recipe.totalNutrients.PROCNT.quantity) || null;
      const proteinPercent =
        Math.round(recipe.totalDaily.PROCNT.quantity) || null;

      const vitaminA = Math.round(recipe.totalDaily.VITA_RAE.quantity) || null;

      const calcium = Math.round(recipe.totalDaily.CA.quantity) || null;

      const vitaminE = Math.round(recipe.totalDaily.TOCPHA.quantity) || null;

      const riboflavin = Math.round(recipe.totalDaily.RIBF.quantity) || null;

      const vitaminB6 = Math.round(recipe.totalDaily.VITB6A.quantity) || null;

      const phosphorus = Math.round(recipe.totalDaily.P.quantity) || null;

      const zinc = Math.round(recipe.totalDaily.ZN.quantity) || null;

      const vitaminC = Math.round(recipe.totalDaily.VITC.quantity) || null;

      const iron = Math.round(recipe.totalDaily.FE.quantity) || null;

      const thiamin = Math.round(recipe.totalDaily.THIA.quantity) || null;

      const niacin = Math.round(recipe.totalDaily.NIA.quantity) || null;

      const folate = Math.round(recipe.totalDaily.FOLDFE.quantity) || null;

      const magnesium = Math.round(recipe.totalDaily.MG.quantity) || null;

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
                  Serving Yield {recipe.servingYield} People
                </PerformanceFactsServing>
              ) : (
                <PerformanceFactsServing>
                  Serving Size Unknown
                </PerformanceFactsServing>
              )}
            </PerformanceFactsHeader>
            <PerformanceFactsCals>
              {/* <PerformanceFactsServing>
                Amount Per Serving:
              </PerformanceFactsServing> */}
              <PerformanceFactsServing>Full Meal:</PerformanceFactsServing>
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

            {recipe.totalNutrients.NA.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Sodium</Text>
                  <NutritionValues>
                    {sodium} {recipe.totalNutrients.NA.unit}
                  </NutritionValues>
                  {recipe.totalDaily.NA.quantity && (
                    <NutritionPercentValues>
                      {sodiumPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.CHOCDF.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Total Carbohydrates</Text>
                  <NutritionValues>
                    {carbohydrates} {recipe.totalNutrients.CHOCDF.unit}
                  </NutritionValues>
                  {recipe.totalDaily.CHOCDF.quantity && (
                    <NutritionPercentValues>
                      {carbohydratesPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.FIBTG.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <Text> Dietary Fiber </Text>
                  <NutritionValues>
                    {dietaryFiber} {recipe.totalNutrients.CHOCDF.unit}
                  </NutritionValues>
                  {recipe.totalDaily.CHOCDF.quantity && (
                    <NutritionPercentValues>
                      {dietaryFiberPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsNutrients>
            )}

            {recipe.totalNutrients.SUGAR.quantity && (
              <PerformanceFactsNutrients>
                <Row>
                  <>
                    <Text> Sugar</Text>
                    <NutritionValues>
                      {sugar} {recipe.totalNutrients.SUGAR.unit}
                    </NutritionValues>
                  </>
                </Row>
              </PerformanceFactsNutrients>
            )}

            {/* //TODO {recipe.addedSugar && (
              <PerformanceFactsNutrients>
                <Row>
                  <>
                    <Text> Sugar</Text>
                    <NutritionValues>{recipe.addedSugar}</NutritionValues>
                  </>
                </Row>
              </PerformanceFactsNutrients>
            )} */}

            {recipe.totalNutrients.PROCNT.quantity && (
              <PerformanceFactsHeader>
                <Row>
                  <Text> Protein</Text>
                  <NutritionValues>
                    {protein} {recipe.totalNutrients.PROCNT.unit}
                  </NutritionValues>
                  {recipe.totalDaily.PROCNT.quantity && (
                    <NutritionPercentValues>
                      {proteinPercent}%
                    </NutritionPercentValues>
                  )}
                </Row>
              </PerformanceFactsHeader>
            )}

            <Grid>
              <Col>
                {recipe.totalDaily.VITA_RAE.quantity && (
                  <Row>
                    <Text> Vitamin A</Text>
                    <NutritionPercentValues>{vitaminA}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.CA.quantity && (
                  <Row>
                    <Text> Calcium</Text>
                    <NutritionPercentValues>{calcium}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.TOCPHA.quantity && (
                  <Row>
                    <Text> Vitamin E</Text>
                    <NutritionPercentValues>{vitaminE}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.RIBF.quantity && (
                  <Row>
                    <Text> Riboflavin</Text>
                    <NutritionPercentValues>
                      {riboflavin}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.VITB6A.quantity && (
                  <Row>
                    <Text> Vitamin B6</Text>
                    <NutritionPercentValues>
                      {vitaminB6}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.P.quantity && (
                  <Row>
                    <Text> Phosphorus</Text>
                    <NutritionPercentValues>
                      {phosphorus}%
                    </NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.ZN.quantity && (
                  <Row>
                    <Text> Zinc</Text>
                    <NutritionPercentValues>{zinc}%</NutritionPercentValues>
                  </Row>
                )}
              </Col>
              <Col>
                {recipe.totalDaily.VITC.quantity && (
                  <Row>
                    <Text>Vitamin C</Text>
                    <NutritionPercentValues>{vitaminC}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.FE.quantity && (
                  <Row>
                    <Text>Iron</Text>
                    <NutritionPercentValues>{iron}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.THIA.quantity && (
                  <Row>
                    <Text>Thiamin</Text>
                    <NutritionPercentValues>{thiamin}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.NIA.quantity && (
                  <Row>
                    <Text>Niacin</Text>
                    <NutritionPercentValues>{niacin}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.FOLDFE.quantity && (
                  <Row>
                    <Text>Folate</Text>
                    <NutritionPercentValues>{folate}%</NutritionPercentValues>
                  </Row>
                )}
                {recipe.totalDaily.MG.quantity && (
                  <Row>
                    <Text>Magnesium</Text>
                    <NutritionPercentValues>
                      {magnesium}%
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
