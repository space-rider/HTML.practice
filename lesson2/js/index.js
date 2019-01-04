const button1 = document.getElementById('button_infoPage');
const button2 = document.getElementById('button_firstTask');
const button3 = document.getElementById('button_secondTask');
const button4 = document.getElementById('button_bonusTask');

button1.onclick = function() {
    window.open(URL="info_page.html","_self");
}

button2.onclick = function() {
    window.open(URL="first_task.html","_self");
}

button3.onclick = function() {
    window.open(URL="second_task.html","self");
}

button4.onclick = function() {
    window.open(URL="bonus_task.html","self");
}