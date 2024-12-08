function atm() {
  let cash = 1000;
  let withdraw = Number(prompt("Enter the amount you would like to withdraw"));
  let result = cash - withdraw;
  if (withdraw > cash) {
    alert("Non-Sufficient Funds");
  } else if (withdraw <= 0) {
    alert("Please enter a valid number");
  } else if (withdraw <= cash) {
    alert(`You have withdrawn $${withdraw} and have $${result} left`);
  } else {
    alert("Please enter a valid number");
  }
}
atm();
