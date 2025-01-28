
const changeTextColor = (element, color = "black") => {
    element.style.color = color;
  };


  const changeTextSize = (element, textSize = 24) => {
    element.style.fontSize = `${textSize}px`;
  };


  document.getElementById("applyStyle").addEventListener("click", () => {
    const header = document.getElementById("header");
    const textSize = document.getElementById("textSize").value;
    const color = document.getElementById("color").value;

    changeTextSize(header, textSize || 24)
    changeTextColor(header, color || "black")
  });