let button = document.querySelector("#startBtn")
let box = document.getElementById("box")
let status = document.getElementById("rightWrong")
let score = document.getElementById("score")
let timer = document.getElementById("timer")
let questionBox = document.getElementById("questionBox")
let question = document.getElementById("question")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")

let questionArr = [
{ q: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
{ q: "wut", o1: "1", o2: "2", o3: "3", o4: "4" },
]

questionBox.style.display = "none"


button.addEventListener("click", function(event){

    questionBox.style.display = "block"
    score.innerHTML = "Score: " + 0;
    box.innerHTML = "";

    for (let i = 0; i < questionArr.length; i++) {

        question.innerHTML = questionArr[i].q;
        option1.innerHTML = questionArr[i].o1;
        option2.innerHTML = questionArr[i].o2;
        option3.innerHTML = questionArr[i].o3;
        option4.innerHTML = questionArr[i].o4;

        // if (q[i] === a) {
        //     score++
        //     status.innerHTML = "Correct!"            
        // } else {
        //     timer--
        //     status.innerHTML = "Wrong!"          
        // };        
    };
})