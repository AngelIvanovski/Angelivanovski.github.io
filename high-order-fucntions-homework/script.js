const recipesUrl = "https://dummyjson.com/recipes";

fetch(recipesUrl)
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes;
    console.log(recipes);

    // All Desserts 🤤
    const allDeserts = recipes.filter((r) => r.mealType.includes("Dessert"));
    console.log(allDeserts);
    //

    // Get the names of recipes with more than 30 reviews
    const recepiesWithOver30Reviews = recipes
      .filter((r) => r.reviewCount > 30)
      .map((r) => `${r.name}`);

    console.log(recepiesWithOver30Reviews);
    //

    // All recipes that use Cinnamon as an ingredient
    const recipiesWithCinnamon = recipes
      .filter((r) => r.ingredients.includes("Cinnamon"))
      .map((r) => `${r.name}`);
    console.log(recipiesWithCinnamon);
    //

    // Recipes that are served as both Lunch and Dinner

    const lunchAndDinnerRecipes = recipes
      .filter((r) => r.mealType.includes("Lunch" && "Dinner"))
      .map((r) => `${r.name}`);
    console.log(lunchAndDinnerRecipes);

    //The ingredients needed for "Mango Salsa Chicken" dish
    const ingredientsForMangoSalsaChicken = recipes
      .filter((r) => r.name === "Mango Salsa Chicken")
      .map((r) => r.ingredients);
    console.log(ingredientsForMangoSalsaChicken);
    //

    //Calculate the average number of calories for all American cusine recipes

    const americanRecipes = recipes.filter((r) =>
      r.cuisine.includes("American")
    );
    const averageCaloriesForAmericanCuisineRecipes =
      americanRecipes
        .map((r) => r.caloriesPerServing)
        .reduce((acc, curr) => acc + curr, 0) / americanRecipes.length;

    console.log(averageCaloriesForAmericanCuisineRecipes);
    //

    // The average cooking time of all pasta recipes

    const allPastaRecipes = recipes.filter((r) =>
      r.tags.includes("Pasta" || "pasta")
    );
    const pastaPrepTime = allPastaRecipes.map(
      (allPastaRecipes) => allPastaRecipes.cookTimeMinutes
    );
    const averageCookingTimeForPastaRecipes =
      pastaPrepTime.reduce((acc, curr) => acc + curr, 0) /
      allPastaRecipes.length;
    console.log(averageCookingTimeForPastaRecipes);
    //

    //Find the recipe with the lowest number of reviews
 debugger
    const leastReviewedRecipe = recipes.reduce((acc, curr) => {
      if (curr.reviewCount < acc.reviewCount) {
        return curr;
      } else {
        return acc;
      }
    });
    console.log(leastReviewedRecipe);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
