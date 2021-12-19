

var Question = function (text, choises, answer) {
    this.text = text;
    this.choises = choises;
    this.answer = answer;
}

var q1 = new Question('Best programming languages', ['C', 'C#', 'Fortran', 'Java'], 'C');
var q2 = new Question('Most favorite programming languages', ['C', 'C#', 'Fortran', 'Java'], 'C');
var q3 = new Question('Most useful programming languages', ['C', 'C#', 'Fortran', 'Java'], 'C');

var question_arr = [q1, q2, q3];

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}


function Quiz(arr) {
    this.question = arr;
    this.score = 0;
    this.question_index = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.question[this.question_index];
}

Quiz.prototype.isFinished = function () {
    return this.question.length === this.question_index;
}

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }

    this.question_index++;
}

var quiz = new Quiz(question_arr);

loadQuestion();


function loadQuestion() {

    if (quiz.isFinished()) {
        showScore();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choises;

        document.querySelector('#question').textContent = question.text;

        for (let i = 0; i < choices.length; i++) {
            document.querySelector('#choice' + i).textContent = choices[i];

            client_guess('#btn' + i, choices[i]);
        }

    }
}


function client_guess(btn, choice) {

    var button = document.querySelector(btn);
    button.onclick = function () {
        quiz.guess(choice);
        loadQuestion();
    }
}


function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}






