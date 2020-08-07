//start page
let startButton = document.querySelector("#startBtn")
let startBox = document.getElementById("startBox")
//score keeper
let score = document.getElementById("score")
let tally = 0
//tells if answer was correct
let status = document.getElementById("rightWrong")
//appears when quiz is over
let end = document.getElementById("endBox")
//selects the question divs
let questionBox0 = document.getElementById("questionBox0")
let questionBox1 = document.getElementById("questionBox1")
let questionBox2 = document.getElementById("questionBox2")
let questionBox3 = document.getElementById("questionBox3")
let questionBox4 = document.getElementById("questionBox4")
//chooses first item in array
let question0 = document.getElementById("question0")
let option0a = document.getElementById("option0a")
let option0b = document.getElementById("option0b")
let option0c = document.getElementById("option0c")
let option0d = document.getElementById("option0d")
//chooses second item in array
let question1 = document.getElementById("question1")
let option1a = document.getElementById("option1a")
let option1b = document.getElementById("option1b")
let option1c = document.getElementById("option1c")
let option1d = document.getElementById("option1d")
//chooses third item in array
let question2 = document.getElementById("question2")
let option2a = document.getElementById("option2a")
let option2b = document.getElementById("option2b")
let option2c = document.getElementById("option2c")
let option2d = document.getElementById("option2d")
//chooses fourth item in array
let question3 = document.getElementById("question3")
let option3a = document.getElementById("option3a")
let option3b = document.getElementById("option3b")
let option3c = document.getElementById("option3c")
let option3d = document.getElementById("option3d")
//chooses fifth item in array
let question4 = document.getElementById("question4")
let option4a = document.getElementById("option4a")
let option4b = document.getElementById("option4b")
let option4c = document.getElementById("option4c")
let option4d = document.getElementById("option4d")

let questionArr = [
{ q: "wut0", o1: "0a", o2: "0b", o3: "0c", o4: "0d" },
{ q: "wut1", o1: "1a", o2: "1b", o3: "1c", o4: "1d" },
{ q: "wut2", o1: "2a", o2: "2b", o3: "2c", o4: "2d" },
{ q: "wut3", o1: "3a", o2: "3b", o3: "3c", o4: "3d" },
{ q: "wut4", o1: "4a", o2: "4b", o3: "4c", o4: "4d" },
];
//initially hides all divs except the starting page
questionBox0.style.display = "none"
questionBox1.style.display = "none"
questionBox2.style.display = "none"
questionBox3.style.display = "none"
questionBox4.style.display = "none"
end.style.display = "none"

//timer 
let timer = document.getElementById("timer");
let noTime = document.getElementById("outOfTime");

var secondsLeft = 31;
// displays a countdown
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    //when countdown goes to 0 all divs except the last div will be hidden
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
        questionBox0.style.display = "none";
        questionBox1.style.display = "none";
        questionBox2.style.display = "none";
        questionBox3.style.display = "none";
        questionBox4.style.display = "none";
        end.style.display = "block";
        noTime.innerHTML = "You ran out of time!";
    }
  }, 1000);
};

// starting page with start button 

startButton.addEventListener("click", function(event){
    startBox.innerHTML = "";
    questionBox0.style.display = "block"
    score.innerHTML = "Score: " + tally;
    //start timer
    setTime();
});

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
//if timer = 0 endBox.style.display = "block"
//current div.style.display = "none"

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

//third question & options
//is revealed by buttons on second question
//if timer = 0 endBox.style.display = "block"
//current div.style.display = "none"

        question2.innerHTML = questionArr[2].q;
        option2a.innerHTML = questionArr[2].o1;
        option2b.innerHTML = questionArr[2].o2;
        option2c.innerHTML = questionArr[2].o3;
        option2d.innerHTML = questionArr[2].o4;

        option2a.addEventListener("click", function(event){
            //right answer
            status.innerHTML = "Correct!";
            tally++;
            score.innerHTML = "Score: " + tally;
            questionBox2.style.display = "none";
            questionBox3.style.display = "block";
        });
        option2b.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox2.style.display = "none";
            questionBox3.style.display = "block";
        });
        option2c.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox2.style.display = "none";
            questionBox3.style.display = "block";
        });
        option2d.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox2.style.display = "none";
            questionBox3.style.display = "block";
        });

//forth question & options
//is revealed by buttons on third question

        question3.innerHTML = questionArr[3].q;
        option3a.innerHTML = questionArr[3].o1;
        option3b.innerHTML = questionArr[3].o2;
        option3c.innerHTML = questionArr[3].o3;
        option3d.innerHTML = questionArr[3].o4;

        option3a.addEventListener("click", function(event){
            //right answer
            status.innerHTML = "Correct!";
            tally++;
            score.innerHTML = "Score: " + tally;
            questionBox3.style.display = "none";
            questionBox4.style.display = "block";
        });
        option3b.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox3.style.display = "none";
            questionBox4.style.display = "block";
        });
        option3c.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox3.style.display = "none";
            questionBox4.style.display = "block";
        });
        option3d.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "Wrong!";
            questionBox3.style.display = "none";
            questionBox4.style.display = "block";
        });

//fifth question & options
//is revealed by buttons on forth question

        question4.innerHTML = questionArr[4].q;
        option4a.innerHTML = questionArr[4].o1;
        option4b.innerHTML = questionArr[4].o2;
        option4c.innerHTML = questionArr[4].o3;
        option4d.innerHTML = questionArr[4].o4;

        option4a.addEventListener("click", function(event){
            //right answer
            status.innerHTML = "";
            tally++;
            score.innerHTML = tally +" out of 5 correct!";
            questionBox4.style.display = "none";
            end.style.display = "block";
        });
        option4b.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "";
            score.innerHTML = tally +" out of 5 correct!";
            questionBox4.style.display = "none";
            end.style.display = "block";
        });
        option4c.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "";
            score.innerHTML = tally +" out of 5 correct!";
            questionBox4.style.display = "none";
            end.style.display = "block";
        });
        option4d.addEventListener("click", function(event){
            //wrong answer
            //subtract time
            status.innerHTML = "";
            score.innerHTML = tally +" out of 5 correct!";
            questionBox4.style.display = "none";
            end.style.display = "block";
        });

        // if( (end.style.display = "block") === true){
        //     timer.textContent = "";
        // };




    //     // display leader board
    //     // ask user for initials
    //     // user types initials and score is placed in order 
