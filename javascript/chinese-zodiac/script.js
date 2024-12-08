

let year = Number(prompt("Enter the year you are born in"));
let sum = (year - 4) % 12;

if (sum == 0) {
  alert("Your chinese zodiac sign is: Rat");
} else if (sum == 1) {
  alert("Your Chinese zodiac sign is: Ox");
} else if (sum == 2) {
  alert("Your Chinese zodiac sign is: Tiger");
} else if (sum == 3) {
  alert("Your Chinese zodiac sign is: Rabbit");
} else if (sum == 4) {
  alert("Your Chinese zodiac sign is: Dragon");
} else if (sum == 5) {
  alert("Your Chinese zodiac sign is: Snake");
} else if (sum == 6) {
  alert("Your Chinese zodiac sign is: Horse");
} else if (sum == 7) {
  alert("Your Chinese zodiac sign is: Goat");
} else if (sum == 8) {
  alert("Your Chinese zodiac sign is: Monkey");
} else if (sum == 9) {
  alert("Your Chinese zodiac sign is: Rooster");
} else if (sum == 10) {
  alert("Your Chinese zodiac sign is: Dog");
} else if (sum == 11) {
  alert("Your Chinese zodiac sign is: Pig");
} else {
  alert("Please enter a valid number!");
}

console.log;
// Chinese zodiac with switch

switch (sum) {
  case 0:
    alert("Your chinese zodiac sign is: Rat");
    break;

  case 1:
    alert("Your Chinese zodiac sign is: Ox");
    break;

  case 2:
    alert("Your Chinese zodiac sign is: Tiger");
    break;

  case 2:
    alert("Your Chinese zodiac sign is: Tiger");
    break;

  case 4:
    alert("Your Chinese zodiac sign is: Dragon");
    break;

  case 5:
    alert("Your Chinese zodiac sign is: Snake");
    break;

  case 6:
    alert("Your Chinese zodiac sign is: Horse");
    break;

  case 7:
    alert("Your Chinese zodiac sign is: Goat");
    break;

  case 8:
    alert("Your Chinese zodiac sign is: Monkey");
    break;

  case 9:
    alert("Your Chinese zodiac sign is: Rooster");
    break;

  case 10:
    alert("Your Chinese zodiac sign is: Dog");
    break;

  case 11:
    alert("Your Chinese zodiac sign is: Pig");
    break;

  default:
    alert("Please enter a valid number!");
    break;
}
