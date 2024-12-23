function weightInChickens(weightInKilograms) {
  return weightInKilograms / 0.5;
}

let result = document.getElementsByTagName("div")[0];

let userInput = parseInt(prompt("Please enter your weight in kilograms"));

if(!isNaN(userInput)){
    result.innerHTML = `<h3> You weigh as ${weightInChickens(userInput)} chickens </h3>`;
}else{
    result.innerHTML = `<h3> Please enter a number </h3>`
}

