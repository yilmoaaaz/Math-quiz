function generateQuestion() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = ["+", "-", "x"][Math.floor(Math.random() * 3)];
    return {question: num1 + " " + operator + " " + num2, answer: eval(num1 + operator + num2)};
}

function checkAnswer() {
    var userAnswer = parseInt(document.getElementById("answer").value);
    var question = document.getElementById("question").textContent;
    var resultDiv = document.getElementById("result");
    var questionParts = question.split(" ");
    var num1 = parseInt(questionParts[0]);
    var num2 = parseInt(questionParts[2]);
    var operator = questionParts[1];
    var correctAnswer = eval(num1 + operator + num2);

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Correct!";
    } else {
        resultDiv.textContent = "Incorrect. The correct answer is " + correctAnswer;
    }
}

window.onload = function() {
    var questionDiv = document.getElementById("question");
    var newQuestion = generateQuestion();
    questionDiv.textContent = "What is " + newQuestion.question + "?";
};
