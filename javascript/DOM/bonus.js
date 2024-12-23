let nameOfRecipe = prompt('Enter the name of the recipe');
let header = document.getElementById("nameOfRecipe")

header.innerText = `${nameOfRecipe}`;



let ingredientAmount = prompt('Enter the amount of ingredients are in the recipe');


while (true) {
    let ingredientName = prompt("Enter your ingredients or type done to finish");
    
    if (ingredientName === "done" || ingredientName === null) {
      break; 
    } else {
      
      let ingredientList = document.getElementById("ingredient-list");
      ingredientList.innerHTML += `<li>${ingredientName}</li>`;
    }
  }