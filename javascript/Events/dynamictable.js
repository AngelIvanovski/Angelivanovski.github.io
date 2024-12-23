function generateTable() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("columns").value;
  
    let table = "<table>";
    for (let i = 0; i < rows; i++) {
      table += "<tr>";
      for (let j = 0; j < cols; j++) {
        table += `<td>Row ${i + 1}, Column ${j + 1}</td>`;
      }
      table += "</tr>";
    }
    table += "</table>";
  
    let tableDiv= document.getElementById("table");
    tableDiv.innerHTML = table;
  }
  let button = document.getElementById("btnGenerate");
  button.addEventListener("click", generateTable);