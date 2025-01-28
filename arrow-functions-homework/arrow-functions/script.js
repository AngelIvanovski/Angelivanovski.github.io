const swapiUrl = "https://swapi.py4e.com/api/planets/?page=1";
const swapiUrlTwo = "https://swapi.py4e.com/api/planets/?page=2";

const generateBtn = document.getElementById("generateBtn");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn")
const tableContainer = document.getElementById("generateContainer");


let generateContent = (data) => {
    tableContainer.innerHTML = ""; 
    const table = document.createElement("table");
    
    table.innerHTML= `<tr>
                        <th>Planet Name</th>
                        <th>Population</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                      </tr>`;
    

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data[i].name}</td>
            <td>${data[i].population}</td>
            <td>${data[i].climate}</td>
            <td>${data[i].gravity}</td>
        `;
        table.appendChild(row);
    }
    tableContainer.appendChild(table); 
}

let getData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            generateContent(data.results);
        })
        .catch(error => console.error(error));
}


generateBtn.addEventListener("click", () => {
    getData(swapiUrl);
    nextBtn.style.display = "block"
    previousBtn.style.display = "none"
    generateBtn.style.display = "none"
})

nextBtn.addEventListener("click", () => {
    getData(swapiUrlTwo)
    nextBtn.style.display = "none"
    previousBtn.style.display = "block";
    
})

previousBtn.addEventListener("click",() =>{
    getData(swapiUrl);
    nextBtn.style.display = "block";
    previousBtn.style.display = "none"
})

