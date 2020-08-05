# CodeQuiz
This is homework number 4. Code quiz.


GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


start button

starts timer 
and
displays first question

var questions = [
      { q: "The sky is blue.", a: "t" },
      { q: "There are 365 days in a year.", a: "t" },
      { q: "There are 42 ounces in a pound.", a: "f" },
      { q: "The Declaration of Independence was created in 1745.", a: "f" },
      { q: "Bananas are vegetables.", a: "f" }
    ];

    // We start the game with a score of 0.
    var score = 0;

    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
      // Display current question to user and ask OK/Cancel
      var answer = confirm(questions[i].q);

      // Compare answers
      if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
      }
      else {
        alert("Wrong!");
        reduce time by ___ seconds;
      }
    }

    // Show total at end
    alert("You got " + score + "/" + questions.length);

        }


if (question != answer){
    reduce time; 
    question(index++);
};

else{
    question(index++);
};







Work on getting the html for the first page, showing some instructions with a Start Quiz button.

Create 5 questions and 4 possible instructions to each. One way to store this information is in an array of objects, that each contain the questions, responses, and correct answer. Once you have that information, set up, work on creating a click event for the Start button that displays the first question from the array with a list of buttons for the responses that each have a click event to check if the one selected was correct and to display the next question. I recommend saving the timer and the storing scores in local storage features for last.





cycle through divs one will be showing at a time while the others are hidden

create event listeners for each button on each div:
  - correct buttons will display correct in the bottom and add a point to the tally
  - incorrect buttons will display incorrect in the bottom and subtract time
every option button will hide current div and reveal(block) the next one 

create css file to manage hidden and unhidden styles 

.hidden{
  display = none
}

.reveal{
  display = block
}

OR

use java script to change display when button is clicked on every button