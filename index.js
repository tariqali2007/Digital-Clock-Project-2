
let hoursElem = document.getElementById("Hours");
let minutesElem = document.getElementById("Minutes");
let secondElem = document.getElementById("Seconds");

setInterval(function(){
let time = new Date();
hoursElem.innerText = time.getHours();
minutesElem.innerText = time.getMinutes();
secondElem.innerText = time.getSeconds()
})
