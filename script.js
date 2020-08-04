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
{ q: "wut0", o1: "0a", o2: "0b", o3: "0c", o4: "0d" },
{ q: "wut1", o1: "1a", o1: "1b", o3: "1c", o4: "1d" },
{ q: "wut2", o1: "2a", o2: "2b", o2: "2c", o4: "2d" },
{ q: "wut3", o1: "3a", o2: "3b", o3: "3c", o3: "3d" },
{ q: "wut4", o1: "4a", o2: "4b", o3: "4c", o4: "4d" },
]

questionBox.style.display = "none"


button.addEventListener("click", function(event){

    let tally = 0

    questionBox.style.display = "block"
    score.innerHTML = "Score: " + tally;
    box.innerHTML = "";


     // for loop to select question and options
    for (let i = 0; i < questionArr.length; i++) {

        // question.innerHTML = questionArr[i].q;
        // option1.innerHTML = questionArr[i].o1;
        // option2.innerHTML = questionArr[i].o2;
        // option3.innerHTML = questionArr[i].o3;
        // option4.innerHTML = questionArr[i].o4;

        // create if statement for wrong or right answer

        // if index = 0 && user selects right answer
        // append correct in status div score++
        // else append wrong in status div timer - 5 seconds
        //then index++ 

       if (i === 0) {
        question.innerHTML = questionArr[0].q;
        option1.innerHTML = questionArr[0].o1;
        option2.innerHTML = questionArr[0].o2;
        option3.innerHTML = questionArr[0].o3;
        option4.innerHTML = questionArr[0].o4;

        option1.addEventListener("click", function(event) {
            status.innerHTML = "Correct!";
            tally++;
            score.innerHTML = "Score: " + tally;
            i++; 
            console.log(i);
        });
        option2.addEventListener("click", function(event) {
            status.innerHTML = "Wrong!";
            i++; 
        });
        option3.addEventListener("click", function(event) {
            status.innerHTML = "Wrong!";
            i++; 
        });
        option4.addEventListener("click", function(event) {
            status.innerHTML = "Wrong!";
            i++; 
        });
        }else if(i === 1){
            question.innerHTML = questionArr[1].q;
            option1.innerHTML = questionArr[1].o1;
            option2.innerHTML = questionArr[1].o2;
            option3.innerHTML = questionArr[1].o3;
            option4.innerHTML = questionArr[1].o4;
    
            option1.addEventListener("click", function(event) {
                status.innerHTML = "Correct!";
                tally++;
                score.innerHTML = "Score: " + tally;
                i++; 
                console.log(i);
            });
            option2.addEventListener("click", function(event) {
                status.innerHTML = "Wrong!";
                i++; 
            });
            option3.addEventListener("click", function(event) {
                status.innerHTML = "Wrong!";
                i++; 
            });
            option4.addEventListener("click", function(event) {
                status.innerHTML = "Wrong!";
                i++; 
            });
            }else if(i === 2){
                question.innerHTML = questionArr[2].q;
                option1.innerHTML = questionArr[2].o1;
                option2.innerHTML = questionArr[2].o2;
                option3.innerHTML = questionArr[2].o3;
                option4.innerHTML = questionArr[2].o4;
        
                option1.addEventListener("click", function(event) {
                    status.innerHTML = "Correct!";
                    tally++;
                    score.innerHTML = "Score: " + tally;
                    i++; 
                    console.log(i);
                });
                option2.addEventListener("click", function(event) {
                    status.innerHTML = "Wrong!";
                    i++; 
                });
                option3.addEventListener("click", function(event) {
                    status.innerHTML = "Wrong!";
                    i++; 
                });
                option4.addEventListener("click", function(event) {
                    status.innerHTML = "Wrong!";
                    i++; 
                });
                }else if(i === 3){
                    question.innerHTML = questionArr[3].q;
                    option1.innerHTML = questionArr[3].o1;
                    option2.innerHTML = questionArr[3].o2;
                    option3.innerHTML = questionArr[3].o3;
                    option4.innerHTML = questionArr[3].o4;
            
                    option1.addEventListener("click", function(event) {
                        status.innerHTML = "Correct!";
                        tally++;
                        score.innerHTML = "Score: " + tally;
                        i++; 
                        console.log(i);
                    });
                    option2.addEventListener("click", function(event) {
                        status.innerHTML = "Wrong!";
                        i++; 
                    });
                    option3.addEventListener("click", function(event) {
                        status.innerHTML = "Wrong!";
                        i++; 
                    });
                    option4.addEventListener("click", function(event) {
                        status.innerHTML = "Wrong!";
                        i++; 
                    });
                    }else if(i === 4){
                        question.innerHTML = questionArr[4].q;
                        option1.innerHTML = questionArr[4].o1;
                        option2.innerHTML = questionArr[4].o2;
                        option3.innerHTML = questionArr[4].o3;
                        option4.innerHTML = questionArr[4].o4;
                
                        option1.addEventListener("click", function(event) {
                            status.innerHTML = "Correct!";
                            tally++;
                            score.innerHTML = "Score: " + tally;
                            i++; 
                            console.log(i);
                        });
                        option2.addEventListener("click", function(event) {
                            status.innerHTML = "Wrong!";
                            i++; 
                        });
                        option3.addEventListener("click", function(event) {
                            status.innerHTML = "Wrong!";
                            i++; 
                        });
                        option4.addEventListener("click", function(event) {
                            status.innerHTML = "Wrong!";
                            i++; 
                        });

                    }else {console.log(tally)};









        // if (i===0) {
        //     question.innerHTML = questionArr[0].q0;
        // }else if (i===1) {
        //     question.innerHTML = questionArr[1].q1;
        // }else if (i===2) {
        //     question.innerHTML = questionArr[2].q2;
        // } else if(i===3){
        //     question.innerHTML = questionArr[3].q3;
        // }else if(i===4) {
        //     question.innerHTML = questionArr[4].q4;
        // };
        //if timer === 0 or all questions answered 
        // display leader board
        // ask user for initials
        // user types initials and score is placed in order 
        //
    };
})