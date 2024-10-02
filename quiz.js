function checkAnswer() {
     const correctAnswer = 4
     return correctAnswer;
}

const name = document.querySelector('quiz');

function userAnswer() {
    const value = userAnswer
    return value;
}

if(correctAnswer === userAnswer) {
    feedback = 'Correct! Well done.';
} else {
    feedback = "That's incorrect. Try again!";
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

