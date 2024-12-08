function convertYears() {
  let years = parseInt(prompt("Please enter your age"));
  let result = years * 7;
  let result2 = years / 7;
  alert(`Your age in dog years is ${result}\n
  Your age in human years is ${result2}`);
}

convertYears();