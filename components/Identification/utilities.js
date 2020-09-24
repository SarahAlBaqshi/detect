import { parseString } from "react-native-xml2js";
import Axios from "axios";

// Libraries
import Clarifai from "clarifai";

export const identifyImage = async (
  imageData,
  { setResult, setLoading, setLive, setOpenModal, setNutrition, navigation }
) => {
  const app = new Clarifai.App({
    apiKey: "0352be76758845c794f90c92cdbcac5d",
  });

  try {
    const res = await app.models.predict(Clarifai.FOOD_MODEL, imageData);

    const detectedObject = res.outputs[0].data.concepts[0].name;

    if (detectedObject === "beer") {
      setResult(
        "This item cannot be identified. Please try again. Alcohol is 7ram😤😤"
      );
    } else {
      setResult("Detected " + detectedObject);

      fetchNutrition(detectedObject, { setNutrition, setLoading });

      getRecipes(detectedObject, { navigation });

      setLive(false);
    }
    setLoading(false);
    setOpenModal(true);
    setLoading(true);
  } catch (error) {
    setResult("This item cannot be identified. Please try again.");
  }
};
//TODO CONDITIONS EVERYWHERE
const pattern = /serving size (?<servingSize>\d+ [a-z]+ \(\d+ [µmk]?g\))?\ntotal calories (?<totalCalories>\d+)? \| fat calories (?<fatCalories>\d+)?\n% daily value\^\* \|.+\n total fat (?<totalFat>\d+ [µmk]?g)? \| (?<totalFatPercent>\d+)?%\n saturated fat (?<saturatedFat>\d+ [µmk]?g)? \| (?<saturatedFatPercent>\d+)?%\n trans fat (?<transFat>\d+ [µmk]?g)?\|.+\n cholesterol (?<cholesterol>\d+ [µmk]?g)? \| (?<cholesterolPercent>\d+)?%\n sodium (?<sodium>\d+ [µmk]?g)? \| (?<sodiumPercent>\d+)?%\n total carbohydrates (?<totalCarbohydrates>\d+ [µmk]?g)? \| (?<carbohydratesPercent>\d+)?%\n dietary fiber (?<dietaryFiber>\d+ [µmk]?g)? \| (?<dietaryFiberPercent>\d+)?%\n sugar (?<sugar>\d+ [µmk]?g)? \|.+\n protein (?<protein>\d+ [µmk]?g)? \| (?<proteinPercent>\d+)?%\n vitamin A (?<vitaminA>\d+)?% \| vitamin C (?<vitaminC>\d+)?% \n( calcium (?<calcium>\d+)?%)?( \| iron (?<iron>\d+)?%)?( \n vitamin E (?<vitaminE>\d+)?%)?( \| thiamin (?<thiamin>\d+)?%)?( \n riboflavin (?<riboflavin>\d+)?%)?( \| niacin (?<niacin>\d+)?%)?( \n vitamin B6 (?<vitaminB6>\d+)?%)?( \| folate (?<folate>\d+)?%)?( \n phosphorus (?<phosphorus>\d+)?%)?( \| magnesium (?<magnesium>\d+)?%)?( \n zinc (?<zinc>\d+)?%)?( \| )?/gi;

export const fetchNutrition = async (
  detectedObject,
  { setNutrition, setLoading }
) => {
  try {
    setNutrition("");
    const detectedObjectUrl =
      "http://api.wolframalpha.com/v2/query?input=" +
      detectedObject +
      "%20nutrition%20facts&appid=425X9Q-JEJJ2Q5LJ6";
    const response = await fetch(detectedObjectUrl);
    parseString(await response.text(), function (err, result) {
      const m = pattern.exec(result.queryresult.pod[1].subpod[0].img[0].$.alt);
      if (m !== null) {
        setNutrition(m.groups);
      } else {
        setNutrition("Nutrition Failed");
      }
    });
    setLoading(false);
  } catch (err) {
    console.log("fetch", err);
    //TODO STYLE BORDER RED WITH ERRORS
  }
};

export const getRecipes = async (detectedObject, { navigation }) => {
  const res = await Axios.get(
    `https://api.edamam.com/search?q=${detectedObject}&app_id=3b9bd214&app_key=d0cc4a37d31d0b366d8d591e8dbea72c&from=0&to=5`
  );
  const FoundRecipesLabels = res.data.hits.map((hit) => hit.recipe.label);
  const FoundRecipesImages = res.data.hits.map((hit) => hit.recipe.image);
  const FoundRecipesIngredients = res.data.hits.map((hit) =>
    hit.recipe.ingredients.map((ingredient) => ingredient.text)
  );
  navigation.setParams({
    labels: FoundRecipesLabels,
    images: FoundRecipesImages,
    ingredients: FoundRecipesIngredients,
  });
};
