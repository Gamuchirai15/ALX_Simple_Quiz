function checkAnswer() {
     const correctAnswer = 4
     return correctAnswer;
}

const name = document.querySelector('quiz');

const question = [
    {
        question: "What is 2+2?",
        answers: [
            { text: "4", correct: true},
            { text: "22", correct: false},
            { text: "3", correct: false},
        ]
    }
]

function userAnswer() {
    const userAnswer = value
    return userAnswer;
}

if(correctAnswer === userAnswer) {
    console.log('Correct! Well done.');
} else {
    console.log("That's incorrect. Try again!");
}

const containerElement = document.getElementById('quiz-container');
const questionElement = document.getElementById('quiz-question');
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer)
const feedbackElement = document.getElementById('feedback');

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    submitButton.innerHTML = "Submit Answer";
    showQuestion();

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendchild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function userAnswer(){
    const submitButton = 4;
    const isCorrect = submitButton.dataset.correct === "true";
    if(isCorrect){
        submitButton.classList.add("Correct! Well done");
    }else{
        submitButton.classList.add("That's incorrect. Try again!");
    }
}