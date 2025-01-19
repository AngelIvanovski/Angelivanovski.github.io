$(document).ready(function () {

let greetBtn = $('#greetBtn')
let message = $('#message')


greetBtn.click(function(){
    let textInput = $('#textInput').val()
    if(textInput)
    message.text(`Hello there ${textInput}`);
else{
    message.text(`Please enter your name`)
}

});











})