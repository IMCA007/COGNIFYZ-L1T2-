let button = document.querySelector('.btn');
function changeColor(){
    button.style.backgroundColor = 'magenta'; 
    document.body.style.backgroundColor = 'burlywood';
}

let currTime = new Date();
let currHour = currTime.getHours();

if(currHour < 12){
    alert("Good Morning...");
}
else if(currHour < 18){
    alert("Good Afternoon...");
}else{
    alert("Good Evening...");
}

function addsum(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;

    document.getElementById("result").innerText = "Result : " + result;
}