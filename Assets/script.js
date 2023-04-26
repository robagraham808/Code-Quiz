const questionBank = [
    {
        question: "Javascript is a ____ Language?",
        answers: [
         "Object Oriented",
         "Object Based",
         "Procedural",
         "None of the above",
        ],
        correctAnswer: "1"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
             "Var",
             "Let",
             "Both 1 and 2",
             "None of the above",
        ],
        correctAnswer: "3"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
             "getElementbyId()",
             "getElementsByClassName()",
             "both 1 and 2",
             "None of the above",
        ],
        correctAnswer: "3"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer: [
             "Throws an error",
             "Ignores the Statement",
             "Gives a warning",
             "None of the above",
        ],
        correctAnswer: "2"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
            "const",
            "var",
            "let",
            "constant",
        ],
        correctAnswer: "1"
    },
]
console.log(questionBank[0].correctAnswer)
// var wordBlank = document.querySelector(".word-blanks");
// var win = document. querySelector(".win");
// var lose = document.querySelector("lose");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var submitButton = document.querySelector("#submit")
var intialsEl = document.querySelector("#initials")
var questionIndex = 0
var timerId;

// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
var timer = 100;
// var timerCount = 100;


// The startGame function is called when the start button is clicked
function startQuiz() {
    console.log("pressed start Quiz")
    // document.querySelector("#main-quiz").setAttribute("class", "show");
    document.querySelector("#startscreen").setAttribute("class","hide");
    questionEl.removeAttribute("class")
    timerId = setInterval(countdown, 1000)
    timerElement.textContent = timer
    //somehow ensure I'm at the first question
    showQuestion()
}

function countdown(){
    timer--
    timerElement.textContent = timer
    if (timer <=0){endGame()}
}

function showQuestion(){
    //showing the question
    //showing the answer choices
//something needs to happen when the answer choices get clicked
//to the correc tone, you could add the correct = true attribute    
//addEventListener("click", handleAnswerSelected)
var currentQuestion = questionBank[questionIndex]
document.querySelector("#questionTitle").textContent = currentQuestion.question
choicesEl.innerHTML = ""
for(var i=0;i<currentQuestion.answers.length;i++){
    var answer = currentQuestion.answers[i]
    var button = document.createElement("button")
    button.setAttribute('class', "choice")
    button.setAttribute("value", answer)
    button.textContent = i+1+". "+answer
    choicesEl.appendChild(button)
}
} 


function handleAnswerSelected(event){
    event.preventDefault()
    console.log("We are pressed");

}



function endGame(){
    console.log("end game")
    // somehow show the users a form to get the initials
    //save their score
}

startButton.onclick = startQuiz


// startButton.addEventListener("click", function "" {
// })


