let button = document.querySelector("#startBtn")
let container = document.querySelector(".container")
let box = document.getElementById("box")
let status = document.getElementById("rightWrong")
let score = document.getElementById("score")
let timer = document.getElementById("timer")

let questionArr = [
{ q: "The sky is blue.", a: "t" },
{ q: "There are 365 days in a year.", a: "t" },
{ q: "There are 42 ounces in a pound.", a: "f" },
{ q: "The Declaration of Independence was created in 1745.", a: "f" },
{ q: "Bananas are vegetables.", a: "f" }]

button.addEventListener("click", function(event){

    score.innerHTML = 0;

    for (let i = 0; i < questionArr.length; i++) {
        box.innerHTML = "";
        box.innerHTML = JSON.stringify(questionArr[i]);
        if (q === a) {
            score++
            status.innerHTML = "Correct!"
            
        } else {
            timer--
            status.innerHTML = "Wrong!"
            
        };

        
    };

})