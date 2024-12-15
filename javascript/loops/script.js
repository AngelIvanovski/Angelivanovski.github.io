
// homework #1

function tellStory(array) {
  console.log(
    `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`
  );
}

tellStory(["Angel", "happy", "coding"]);

//homework #2

function sumFiveNumbers(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}

sumFiveNumbers([5, 3, 4, 5, 6]);

//homework #3

function stringReturner(array) {
  let callBack = "";
  for (let i = 0; i < array.length; i++) {
    callBack += array[i] + " ";
  }
  console.log(callBack);
}

stringReturner(["Hello", "from", "Qinshift", "Academy!"]);

//homework #4

let output = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    output += i + "\n";
  } else {
    output += i + " ";
  }
}
console.log(output);

// homework #5

function sumMaxMin(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }

  let sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

let array = [3, 5, 6, 8, 2, 11, 3, 4, 5, 6, 111];
console.log(sumMaxMin(array));



//homework 6 

function combineStudentNames(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
      fullNames.push((i + 1) + ". " + firstNames[i] + " " + lastNames[i]);
  }
  return fullNames;
}

console.log(combineStudentNames(['Angel','Sandra','Filip'],['Ivanovski','Simjanoska','Lazovski']));

