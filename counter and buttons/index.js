/*
console.log(`Hello`)

//window.alert(`10 milfs near you!`)
document.getElementById("idH1").textContent = `Hello`;
document.getElementById("idP").textContent = `Bananaque`; 

let firstName = "Lawrence ";
let lastName = "Magnetico";
let fullname = firstName + lastName;
let age = 20;
let dividend = 20;
let divisor = 10;
let isStudent = true;
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old`);
console.log(dividend / divisor);
console.log(typeof firstName);

document.getElementById("p1").textContent = fullname;
document.getElementById("p2").textContent = `Your full name is ${firstName} ${lastName} and thy age is ${age}`;
document.getElementById("p3").textContent = age;
document.getElementById("p4").textContent = isStudent;

let username = window.prompt("Username: ");
console.log(username);
let age;
let username;
document.getElementById ("button1").onclick = function(){
    username = document.getElementById("textBox1").value;
    console.log(username, typeof username);
    document.getElementById("p1").textContent = username;
}
document.getElementById ("button2").onclick = function(){
    age = document.getElementById("textBox2").value;
    age = Number(age)
    age++;
    console.log(age, typeof age);
    document.getElementById("p2").textContent = age;
}

let x = 0;
x = Boolean(x);
console.log(x, typeof x);

*/

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLbl = document.getElementById("label1");
let value = 0;

decreaseBtn.onclick = function(){
    value--;
    countLbl.textContent = value;
}

increaseBtn.onclick = function(){
    value++;
    countLbl.textContent = value;
}

resetBtn.onclick = function(){
    value = 0;
    countLbl.textContent = value;
}