const header = document.getElementById("header");
const divContainer = document.getElementById("divContainer");
const starWarsUrl = "https://swapi.dev/api/people/1";
const generateBtn = document.getElementById("generateBtn");

function generateHeader(headerText) {
    header.innerHTML = headerText;
}

function generateTable(data) {
    divContainer.innerHTML = `
        <table>
            <tr><td>Height</td><td>${data.height}</td></tr>
            <tr><td>Weight</td><td>${data.mass}</td></tr>
            <tr><td>Eye Color</td><td>${data.eye_color}</td></tr>
            <tr><td>Hair Color</td><td>${data.hair_color}</td></tr>
        </table>
    `;
}

function getData(url) {
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            generateHeader(data.name);
            generateTable(data);
        })
        .catch(function(err){
            console.error("ERROR:", err);
        });
}

generateBtn.addEventListener("click", function() {
    getData(starWarsUrl)
})