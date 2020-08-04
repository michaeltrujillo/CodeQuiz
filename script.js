let button = document.querySelector("#startBtn")
let box = document.getElementById("box")
let status = document.getElementById("rightWrong")
let score = document.getElementById("score")
let timer = document.getElementById("timer")
let questionBox = document.getElementById("questionBox")

let questionArr = [
{ q0: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q1: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q2: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q3: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q4: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
]

// questionBox.style.display === none
questionBox.style.display = "none"

button.addEventListener("click", function(event){

    questionBox.style.display = "block"
    score.innerHTML = "Score: " + 0;
    box.innerHTML = "";

    for (let i = 0; i < questionArr.length; i++) {
        

        if (q[i] === a) {
            score++
            status.innerHTML = "Correct!"
            
        } else {
            timer--
            status.innerHTML = "Wrong!"
            
        };

        
    };

})