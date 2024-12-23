



document.getElementById('myTitle').innerHTML = 'changed title'
document.getElementsByClassName('paragraph')[0].innerHTML = 'changed paragraph'
document.getElementsByClassName('paragraph second')[0].innerHTML = 'changed paragraph 2'
let lastDiv = document.querySelectorAll('div')[2];
lastDiv.querySelector('h1').innerHTML = 'changed h1'
lastDiv.querySelector('h3').innerHTML = 'changed h3'