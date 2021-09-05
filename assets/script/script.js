var questionText = document.querySelector("#title");
var startText = document.querySelector("#starttxt");
var startButton = document.querySelector("#startbutton");
var buttonDiv = document.querySelector("#buttonholder");
var quizDiv = document.querySelector("#quiz");

var initialsBox = document.querySelector("#initials");
var initialsButton = document.querySelector("#initialssubmit");
var initialsInput = document.querySelector("#initialsinput");
var initialsText = document.querySelector("#initialstext");

var hsBox = document.querySelector("#highscorebox");
var hsList = document.querySelector("#highscoreslist");

var timerText = document.querySelector("#timer");

var counter = 0;
var score = 0;
var timer = 0;
var timerRef;
var totalScores = [];
var started = false;

var questions = [ // giant question array that holds the question, potential answers, and the answer itself
  {
    q: "What is the current of energy that emits a blue light?",
    pa: ["Pool", "River", "Aether", "Hot Sauce"],
    a: "Aether"
  },
  {
    q: "PLaceholder",
    pa: ["Placeholder", "Placeholder", "PLaceholder", "Placeholder"],
    a: "PLaceholder"
  },
  {
    q: "PLaceholder",
    pa: ["Placeholder", "Placeholder", "PLaceholder", "Placeholder"],
    a: "PLaceholder"
  },
  {
    q: "PLaceholder",
    pa: ["Placeholder", "Placeholder", "PLaceholder", "Placeholder"],
    a: "PLaceholder"
  },
  {
    q: "PLaceholder",
    pa: ["Placeholder", "Placeholder", "PLaceholder", "Placeholder"],
    a: "PLaceholder"
  },
  {
    q: "PLaceholder",
    pa: ["Placeholder", "Placeholder", "PLaceholder", "Placeholder"],
    a: "PLaceholder"
  },
]
var quizTimer = function () {
  timer--;
  timerText.textContent = timer;
  if (timer <= 0) {
    clearInterval(timerRef);
    buttonDiv.innerHTML = "";
    quizEnding();
  }
}

var clickedText = function (event) {
    var clicked = event.target;
    var text = clicked.textContent.substring(3);
    if (clicked.hasAttribute("answerid"))
    {
        buttonDiv.innerHTML = "";
            if (counter < (questions.length - 1)) {
                counter++;
                displayQuestion(counter);
                answeredStyle("Correct.");
            }
        else {
            answeredStyle("Correct.");
            quizEnding();
        }
    }
    else {
        buttonDiv.innerHTML = "";
            if (counter < (questions.length - 1)) {
                counter++;
                if (timer - 10 >= 1) {
                    timer = timer
                }
            }
    }