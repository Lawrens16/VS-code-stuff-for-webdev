let min, max;
let randomNum1;

const rollBtn = document.getElementById("rollbtn");
const slot1 = document.getElementById("slot1");


rollBtn.onclick = function(){
    min =  Number(document.getElementById("minVal").value);
    max = Number(document.getElementById("maxVal").value);
    randomNum1 = Math.floor(Math.random() * (max - min)) + min;
    slot1.textContent = randomNum1;
}



