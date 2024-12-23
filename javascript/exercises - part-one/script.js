

function getAverage(gradeOne,gradeTwo,gradeThree,gradeFour,gradeFive){
   let averageGrade = (gradeOne + gradeTwo + gradeThree + gradeFour + gradeFive) / 5;
if(averageGrade >= 8){
    alert(" You have passed the semester");
}else{
    alert("You failed");
}
}
getAverage(10,10,10,10,5);
getAverage(10,5,3,2,1);









let myArray = [0, null, undefined, NaN, "", false, 320, "Angel", "Ivanovski"];

function removeFalsyValues(array) {

  let result = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

let cleanArray = removeFalsyValues(myArray);

console.log("Original Array:", myArray);
console.log("Cleaned Array:", cleanArray);









let todos = [];

function addTodo(todo) {
  todos.push(todo);
}

function displayTodos() {
  console.log("Your ToDo List:");
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`);
  }
}

while (true) {
  let userInput = prompt("Enter a new todo or type 'done' to finish:");

  if (userInput.toLowerCase() === "done") {
    break;
  } else {
    addTodo(userInput);
  }
}

displayTodos();










let names = [];
let numbers = [];

function addContact(fullName, phoneNumber) {
  if (!fullName || !phoneNumber) {
    console.log("Please provide both a name and a phone number.");
    return;
  }

  names.push(fullName);
  numbers.push(phoneNumber);
  alert("Contact added: " + fullName + " - " + phoneNumber);
}

function displayContacts() {
  if (names.length === 0) {
    console.log("The phone book is empty.");
  } else {
    console.log("Phone Book:");
    for (let i = 0; i < names.length; i++) {
      console.log((i + 1) + ". " + names[i] + " - " + numbers[i]);
    }
  }
}



addContact("Angel Ivanovski", "077 223 305");
addContact();
displayContacts();










function Academy(AcademyName, NumberOfGroups, NumberOfClassrooms) {
  this.AcademyName = AcademyName;
  this.NumberOfGroups = NumberOfGroups;
  this.NumberOfClassrooms = NumberOfClassrooms;

  this.displayAcademy = function (AcademyName) {
    console.log(`Academy name:  ${this.AcademyName}`);
  };
}

function Student(FirstName, LastName, Age, eMail, Academy, Group) {
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.Age = Age;
  this.eMail = eMail;
  this.Academy = Academy;
  this.group = Group;

  this.displayStudentAcademy = function (displayStudentAcademy) {
    console.log(`Academy: ${this.Academy}`);
  };
}

function Group(Name, NumberOfStudents, Students) {
  this.Name = Name;
  this.NumberOfStudents = NumberOfStudents;
  this.Students = Students;

  this.displayNumberOfStudents = function (displayNumberOfStudents) {
    console.log(`Number of students: ${this.NumberOfStudents}`);
  };
}

let academy = new Academy("Qinshift", 10, 5);

let student = new Student("Angel", "Ivanovski", 26, "ivanovski.mk@hotmail.com","Web Development","G2");

let group = new Group("G2",25,"Angel Ivanovskki");


academy.displayAcademy();

student.displayStudentAcademy();

group.displayNumberOfStudents();