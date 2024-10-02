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

const containerElement = document.getElementById('quiz-container');
const questionElement = document.getElementById('quiz-question');
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer)
const feedbackElement = document.getElementById('feedback');


function userAnswer(){
    const submitButton = 4;
    const isCorrect = submitButton.dataset.correct === "true";
    if(isCorrect){
        submitButton.classList.add("Correct! Well done");
    }else{
        submitButton.classList.add("That's incorrect. Try again!");
    }
}

