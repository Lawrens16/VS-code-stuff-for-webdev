const doneBtn = document.getElementById("doneBtn");
const male = document.getElementById("myCheckbox");
const female = document.getElementById("myCheckbox2");
const result = document.getElementById("result");


doneBtn.onclick = function(){
    const othersVal = document.getElementById("others").value;      
    
    if(female.checked && othersVal.trim() !== ""){
        result.textContent = "choose only one >:(";
    }
    else if(male.checked && othersVal.trim() !== ""){
        result.textContent = "choose only one >:(";
    }
    else if(male.checked){
        result.textContent = "You are a male";
    }
    else if(female.checked){
        result.textContent = "You are a female";
    }
    else if(othersVal.trim() !== ""){
        result.textContent = othersVal;
    }

    else{
        result.textContent = "Enter somehtn";
    }
    


}