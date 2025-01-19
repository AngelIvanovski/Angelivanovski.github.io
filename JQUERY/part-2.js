$(document).ready(function () {

let generateBtn = $('#generateBtn');
let mainHeader = $('#generatedHeader');
let error = $('#error');

generateBtn.click(function(){
    let textInput = $('#textInput').val();
    let colorInput = $('#colorInput').val();

    if(textInput){
        mainHeader.text(`${textInput}`).css("color", colorInput);
        error.text("");
    }else{
        error.text("Please enter your header message");
    }




 


})


});