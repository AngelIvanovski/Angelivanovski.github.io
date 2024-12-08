function dogYears() {
  let humanYears = parseInt(prompt("Please enter your age"));
  let result = humanYears * 7;
  alert(`Your age in dog years is ${result}`);
}

dogYears();

// human years conversion

function humanYears() {
  let dogYears = parseInt(prompt("Please enter your age"));
  let result = dogYears / 7;
  alert(`Your age in human years is ${result}`);
}

humanYears();
