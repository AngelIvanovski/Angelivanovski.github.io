const studentsDataUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json";
const header = document.getElementById("header");
const studentsContainer = document.getElementById("studentsContainer");
const generateStudentsBtn = document.getElementById("generateStudentsBtn");

function generateHeader(headerText) {
  header.innerText = headerText;
}

function generateStudents(studentsArray) {
  studentsContainer.innerHTML = "";
  const ul = document.createElement("ul");
  for (const student of studentsArray) {
    const li = document.createElement("li");
    li.textContent = student;
    ul.appendChild(li);
  }
  studentsContainer.appendChild(ul);
}

function getData(studentsDataUrl) {
  fetch(studentsDataUrl)
    .then(function (response) {
      console.log(response);
      const parsedStudentsData = response.json();
      return parsedStudentsData;
    })
    .then(function (studentsData) {
      console.log(studentsData);
      generateStudents(studentsData.students);
      generateHeader(studentsData.academy);
    })
    .catch(function (err) {
      console.log("ERROR:", err);
    });
}

generateStudentsBtn.addEventListener("click", function () {
  getData(studentsDataUrl);
});
