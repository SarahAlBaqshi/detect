import { parseString } from "react-native-xml2js";
import Axios from "axios";

// Libraries
import Clarifai from "clarifai";

let res = [];

let detectedObject;

export const identifyImage = async (
  imageData,
  { setResult, setLoading, setLive, setOpenModal, setNutrition, navigation }
) => {
  setResult("");
  const app = new Clarifai.App({
    apiKey: "31e07c18707b4564bfbe97739e7036b7",
  });

  try {
    const res = await app.models.predict(Clarifai.FOOD_MODEL, imageData);
    detectedObject = await res.outputs[0].data.concepts[0].name;

    // console.log("detectedObject in identifyImage", detectedObject);


    if (detectedObject === "beer" /*TODO should we add || "wine"? */) {
      setResult("This item cannot be identified. Please try again.");
    } else {
      setResult("Detected " + detectedObject);

      fetchNutrition(res.outputs[0].data.concepts[0].name, {
        setNutrition,
        setLoading,
      });

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

const wrongItem = (app) => {
  app.inputs.create([
    {
      url:
        "https://www.indoindians.com/wp-content/uploads/2015/09/coriander-plant-in-pot.jpg",
    },
  ]);
};

//TODO CONDITIONS EVERYWHERE
const pattern = /serving size (?<servingSize>\d+ [a-z]+ \(\d+ [µmk]?g\))?\ntotal calories (?<totalCalories>\d+)? \| fat calories (?<fatCalories>\d+)?\n% daily value\^\* \|.+\n total fat (?<totalFat>\d+ [µmk]?g)? \| (?<totalFatPercent>\d+)?%\n saturated fat (?<saturatedFat>\d+ [µmk]?g)? \| (?<saturatedFatPercent>\d+)?%\n trans fat (?<transFat>\d+ [µmk]?g)?\|.+\n cholesterol (?<cholesterol>\d+ [µmk]?g)? \| (?<cholesterolPercent>\d+)?%\n sodium (?<sodium>\d+ [µmk]?g)? \| (?<sodiumPercent>\d+)?%\n total carbohydrates (?<totalCarbohydrates>\d+ [µmk]?g)? \| (?<carbohydratesPercent>\d+)?%\n dietary fiber (?<dietaryFiber>\d+ [µmk]?g)? \| (?<dietaryFiberPercent>\d+)?%\n sugar (?<sugar>\d+ [µmk]?g)? \|.+\n protein (?<protein>\d+ [µmk]?g)? \| (?<proteinPercent>\d+)?%\n vitamin A (?<vitaminA>\d+)?% \| vitamin C (?<vitaminC>\d+)?% \n( calcium (?<calcium>\d+)?%)?( \| iron (?<iron>\d+)?%)?( \n vitamin E (?<vitaminE>\d+)?%)?( \| thiamin (?<thiamin>\d+)?%)?( \n riboflavin (?<riboflavin>\d+)?%)?( \| niacin (?<niacin>\d+)?%)?( \n vitamin B6 (?<vitaminB6>\d+)?%)?( \| folate (?<folate>\d+)?%)?( \n phosphorus (?<phosphorus>\d+)?%)?( \| magnesium (?<magnesium>\d+)?%)?( \n zinc (?<zinc>\d+)?%)?( \|)?/gi;

export const fetchNutrition = async (
  detectedObject,
  { setNutrition, setLoading }
) => {
  console.log("detectedObject", detectedObject);
  try {
    setNutrition("");
    let m;
    let z;
    // TODO CAN'T WE INTERPOLATE THIS?
    const detectedObjectUrl =
      "http://api.wolframalpha.com/v2/query?input=" +
      detectedObject +
      "%20nutrition%20facts&appid=425X9Q-JEJJ2Q5LJ6";

    const response = await fetch(detectedObjectUrl);
    parseString(await response.text(), async function (err, result) {
      m = pattern.exec(result.queryresult.pod[1].subpod[0].img[0].$.alt);

      if (m !== null) {
        setNutrition(m.groups);
      } else {
        z = pattern.exec(result.queryresult.pod[1].subpod[0].img[0].$.alt);
        console.log("z", z);
        if (z === null) {
          setNutrition("Nutrition Failed");
        } else {
          setNutrition(z.groups);
        }
      }
    });

    setLoading(false);
  } catch (err) {
    console.log("fetch", err);
    //TODO STYLE BORDER RED WITH ERRORS
  }
};

export const getRecipes = async (detectedObject, { navigation }) => {
  res = await Axios.get(
    `https://api.edamam.com/search?q=${detectedObject}&app_id=3b9bd214&app_key=d0cc4a37d31d0b366d8d591e8dbea72c&from=0&to=5&health=alcohol-free`
  );
  //TODO RECIPE LABELS TITLE CASE

  //TODO SETTINGS FOR FOOD PREFERENCES
  const foundRecipesLabels = res.data.hits.map((hit) => hit.recipe.label);
  const foundRecipesImages = res.data.hits.map((hit) => hit.recipe.image);
  const foundRecipesIngredients = res.data.hits.map((hit) =>
    hit.recipe.ingredients.map((ingredient) => ingredient.text)
  );
  const foundRecipesUrls = res.data.hits.map((hit) => hit.recipe.url);
  const foundCalories = res.data.hits.map((hit) => hit.recipe.calories);
  const foundDietLabels = res.data.hits.map((hit) => hit.recipe.dietLabels);
  const foundCautions = res.data.hits.map((hit) => hit.recipe.cautions);
  const foundHealthLabels = res.data.hits.map((hit) => hit.recipe.healthLabels);
  const foundIngredientLines = res.data.hits.map(
    (hit) => hit.recipe.ingredientLines
  ); // TODO REPLACE INGREDIENTS with this
  const foundSource = res.data.hits.map((hit) => hit.recipe.source);
  const foundYield = res.data.hits.map((hit) => hit.recipe.yield);
  const foundTotalTime = res.data.hits.map((hit) => hit.recipe.totalTime);
  const foundTotalNutrients = res.data.hits.map(
    (hit) => hit.recipe.totalNutrients
  );
  const foundTotalDaily = res.data.hits.map((hit) => hit.recipe.totalDaily);
  const foundDigest = res.data.hits.map((hit) => hit.recipe.digest);
  navigation.setParams({
    labels: foundRecipesLabels,
    images: foundRecipesImages,
    ingredients: foundRecipesIngredients,
    urls: foundRecipesUrls,
    calories: foundCalories,
    dietLabels: foundDietLabels,
    cautions: foundCautions,
    healthLabels: foundHealthLabels,
    ingredientLines: foundIngredientLines,
    source: foundSource,
    servingYield: foundYield,
    totalTime: foundTotalTime,
    totalNutrients: foundTotalNutrients,
    totalDaily: foundTotalDaily,
    digest: foundDigest,
  });
};

export const getMoreRecipes = async ({
  counter,
  setCounter,
  navigation,
  route,
}) => {
  setCounter({ x: counter.x + 5, y: counter.y + 5 });

  if (counter.y <= 100) {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${detectedObject}&app_id=3b9bd214&app_key=d0cc4a37d31d0b366d8d591e8dbea72c&from=${counter.x}&to=${counter.y}&health=alcohol-free`
    );

    const foundRecipesLabels = res.data.hits.map((hit) => hit.recipe.label);
    const foundRecipesImages = res.data.hits.map((hit) => hit.recipe.image);
    const foundRecipesIngredients = res.data.hits.map((hit) =>
      hit.recipe.ingredients.map((ingredient) => ingredient.text)
    );
    const foundRecipesUrls = res.data.hits.map((hit) => hit.recipe.url);
    const foundCalories = res.data.hits.map((hit) => hit.recipe.calories);
    const foundYield = res.data.hits.map((hit) => hit.recipe.yield);
    const foundTotalTime = res.data.hits.map((hit) => hit.recipe.totalTime);

    const { params } = route;

    navigation.setParams({
      labels: params.labels.concat(foundRecipesLabels),
      images: params.images.concat(foundRecipesImages),
      ingredients: params.ingredients.concat(foundRecipesIngredients),
      urls: params.urls.concat(foundRecipesUrls),
      calories: params.calories.concat(foundCalories),
      servingYield: params.servingYield.concat(foundYield),
      totalTime: params.totalTime.concat(foundTotalTime),
    });
  } else {
    null;
  }
};
