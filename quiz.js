function checkAnswer() {
     const correctAnswer = 4 
     return correctAnswer
}

const name = document.querySelector('quiz')

function userAnswer() {
    const value = userAnswer
    return value
}

if(correctAnswer === userAnswer) {
    feedback = 'Correct! Well done.'
} else {
    feedback = "That's incorrect. Try again!"
}

document.getElementById('submit-answer').addEventListener('click', function checkAnswer() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('feedback').textContent = result;
});

