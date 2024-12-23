let list = [1, 2, 3, 4, 5];

let sum = 0;

let divList = document.getElementById("list");
let divSum = document.getElementById("sum");
let bonusDiv = document.getElementById("bonus");

for (let i = 0; i < list.length; i++) {
  divList.innerHTML += `<li> ${list[i]} </li>`;
}

for (let i = 0; i < list.length; i++) {
  sum += list[i];
}

for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
        bonusDiv.innerHTML += `${list[i]} = ${sum}`; 
      } else {
        bonusDiv.innerHTML += `${list[i]} + `; 
      }
    }

divSum.innerHTML = `${sum} `;
console.log(sum);
