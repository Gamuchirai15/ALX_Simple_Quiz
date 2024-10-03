function checkAnswer() {
    const correctAnswer = 4
    return correctAnswer;
}

const quiz = document.querySelector("checked");

if(userAnswer === correctAnswer){
    feedback = ('Correct! Well done.');
} else {
   feedback = ("That's incorrect. Try again!");
}
