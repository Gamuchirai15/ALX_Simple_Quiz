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
