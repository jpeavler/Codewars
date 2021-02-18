/*Problem Description: Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not
good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for 
the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present 
in the objects, can be considered as 0.
*/
//Function cakes
//Param recipe: an object describing the recipe of the cake, including the quantity (not including the measurement)
//Param available: an object describing the resources on hand to bake cakes
//Returns the number of cakes that can be made given the recipe requirements and the available ingredients
function cakes(recipe, available) {
    let recipeIngredients = Object.keys(recipe);
    let meetsRecipeCount = [];  //how often each ingredient matches the recipe requirements
    recipeIngredients.forEach((ingredient) => {
      if(available.hasOwnProperty(ingredient)) {
        meetsRecipeCount.push(Math.floor(available[ingredient]/recipe[ingredient]));
      } else {
        meetsRecipeCount.push(0);
      }
    });
    return Math.min(...meetsRecipeCount);
  }