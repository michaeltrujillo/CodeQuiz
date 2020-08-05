let startButton = document.querySelector("#startBtn")
let startBox = document.getElementById("startBox")

let score = document.getElementById("score")
let tally = 0
// score.innerHTML = "Score: " + tally;


let timer = document.getElementById("timer")

let status = document.getElementById("rightWrong")

let end = document.getElementById("endBox")

let questionBox0 = document.getElementById("questionBox0")
let questionBox1 = document.getElementById("questionBox1")
let questionBox2 = document.getElementById("questionBox2")
let questionBox3 = document.getElementById("questionBox3")
let questionBox4 = document.getElementById("questionBox4")

let question0 = document.getElementById("question0")
let option0a = document.getElementById("option0a")
let option0b = document.getElementById("option0b")
let option0c = document.getElementById("option0c")
let option0d = document.getElementById("option0d")

let question1 = document.getElementById("question1")
let option1a = document.getElementById("option1a")
let option1b = document.getElementById("option1b")
let option1c = document.getElementById("option1c")
let option1d = document.getElementById("option1d")

let question2 = document.getElementById("question2")
let option2a = document.getElementById("option2a")
let option2b = document.getElementById("option2b")
let option2c = document.getElementById("option2c")
let option2d = document.getElementById("option2d")

let question3 = document.getElementById("question3")
let option3a = document.getElementById("option3a")
let option3b = document.getElementById("option3b")
let option3c = document.getElementById("option3c")
let option3d = document.getElementById("option3d")

let question4 = document.getElementById("question4")
let option4a = document.getElementById("option4a")
let option4b = document.getElementById("option4b")
let option4c = document.getElementById("option4c")
let option4d = document.getElementById("option4d")

let questionArr = [
{ q: "wut0", o1: "0a", o2: "0b", o3: "0c", o4: "0d" },
{ q: "wut1", o1: "1a", o2: "1b", o3: "1c", o4: "1d" },
{ q: "wut2", o1: "2a", o2: "2b", o2: "2c", o4: "2d" },
{ q: "wut3", o1: "3a", o2: "3b", o3: "3c", o3: "3d" },
{ q: "wut4", o1: "4a", o2: "4b", o3: "4c", o4: "4d" },
]

questionBox0.style.display = "none"
questionBox1.style.display = "none"
questionBox2.style.display = "none"
questionBox3.style.display = "none"
questionBox4.style.display = "none"
end.style.display = "none"


// beginning
startButton.addEventListener("click", function(event){
    startBox.innerHTML = "";
    questionBox0.style.display = "block"
    score.innerHTML = "Score: " + tally;
});

//"block" each question div 
//work on functionality of each button in each div
//wrong -time & display in status div WRONG
//right +tally & display in status div RIGHT
//all buttons will hide current div and reveal the next one


//first question & options
//is revealed by start button

        question0.innerHTML = questionArr[0].q;
        option0a.innerHTML = questionArr[0].o1;
        option0b.innerHTML = questionArr[0].o2;
        option0c.innerHTML = questionArr[0].o3;
        option0d.innerHTML = questionArr[0].o4;

        option0a.addEventListener("click", function(event){
            //right answer
            status.innerHTML = "Correct!";
            tally++;
            score.innerHTML = "Score: " + tally;
            questionBox0.style.display = "none";
            questionBox1.style.display = "block";
        });
        option0b.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox0.style.display = "none";
            questionBox1.style.display = "block";
        });
        option0c.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox0.style.display = "none";
            questionBox1.style.display = "block";
        });
        option0d.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox0.style.display = "none";
            questionBox1.style.display = "block";
        });


//second question & options
//is revealed by buttons on first question

        question1.innerHTML = questionArr[1].q;
        option1a.innerHTML = questionArr[1].o1;
        option1b.innerHTML = questionArr[1].o2;
        option1c.innerHTML = questionArr[1].o3;
        option1d.innerHTML = questionArr[1].o4;

        option1a.addEventListener("click", function(event){
            //right answer
            status.innerHTML = "Correct!";
            tally++;
            score.innerHTML = "Score: " + tally;
            questionBox1.style.display = "none";
            questionBox2.style.display = "block";
        });
        option1b.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox1.style.display = "none";
            questionBox2.style.display = "block";
        });
        option1c.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox1.style.display = "none";
            questionBox2.style.display = "block";
        });
        option1d.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox1.style.display = "none";
            questionBox2.style.display = "block";
        });
















    //  // for loop to select question and options
    // for (let i = 0; i < questionArr.length; i++) {

    //     // question.innerHTML = questionArr[i].q;
    //     // option1.innerHTML = questionArr[i].o1;
    //     // option2.innerHTML = questionArr[i].o2;
    //     // option3.innerHTML = questionArr[i].o3;
    //     // option4.innerHTML = questionArr[i].o4;

    //     // create if statement for wrong or right answer

    //     // if index = 0 && user selects right answer
    //     // append correct in status div score++
    //     // else append wrong in status div timer - 5 seconds
    //     //then index++ 

    //    if (i === 0) {
    //     question.innerHTML = questionArr[0].q;
    //     option1.innerHTML = questionArr[0].o1;
    //     option2.innerHTML = questionArr[0].o2;
    //     option3.innerHTML = questionArr[0].o3;
    //     option4.innerHTML = questionArr[0].o4;

    //     option1.addEventListener("click", function(event) {
    //         status.innerHTML = "Correct!";
    //         tally++;
    //         score.innerHTML = "Score: " + tally;
    //         i++; 
    //         console.log(i);
    //     });
    //     option2.addEventListener("click", function(event) {
    //         status.innerHTML = "Wrong!";
    //         i++; 
    //     });
    //     option3.addEventListener("click", function(event) {
    //         status.innerHTML = "Wrong!";
    //         i++; 
    //     });
    //     option4.addEventListener("click", function(event) {
    //         status.innerHTML = "Wrong!";
    //         i++; 
    //     });
    //     



    //     // if (i===0) {
    //     //     question.innerHTML = questionArr[0].q0;
    //     // }else if (i===1) {
    //     //     question.innerHTML = questionArr[1].q1;
    //     // }else if (i===2) {
    //     //     question.innerHTML = questionArr[2].q2;
    //     // } else if(i===3){
    //     //     question.innerHTML = questionArr[3].q3;
    //     // }else if(i===4) {
    //     //     question.innerHTML = questionArr[4].q4;
    //     // };
    //     //if timer === 0 or all questions answered 
    //     // display leader board
    //     // ask user for initials
    //     // user types initials and score is placed in order 
    //     //
    // };
