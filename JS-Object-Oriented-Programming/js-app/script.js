
var Question = function (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}


var q1 = new Question('Best programming languages?', ['C', 'C#', 'C++', 'Javascript'], 'C');

var q2 = new Question('Most popular programming languages?', ['C', 'C#', 'C++', 'Javascript'], 'Javascript');

var q3 = new Question('Worst programming languages?', ['C', 'Java', 'C++', 'Javascript'], 'Java');

var q_arr = [q1, q2, q3];

// Create Question Prototype

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}


// Quiz Constructor

function Quiz(q_arr) {
    this.question = q_arr;
    this.score = 0;
    this.q_index = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.question[this.q_index];
}

// Quiz isFinished

Quiz.prototype.isFinished = function () {
    return this.question.length === this.q_index;
}

// Quiz guess

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.q_index++;
}



// console.log(quiz.isFinished());

// quiz.guess('C');
// quiz.guess('Java');
// quiz.guess('php');

// console.log(quiz.score);


// console.log(quiz.isFinished());

var quiz = new Quiz(q_arr);

loadQuestion();
loadQuestionNumber();

function loadQuestion() {
    if (quiz.isFinished()) {
        showScore();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (let i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];

            guess('btn' + i, choices[i]);
        }

    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
        questionNumber();
    }
}



function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}


function loadQuestionNumber() {
    var html = `<span>Question</span><span>${quiz.q_index + 1}</span>`;
    document.querySelector('#progress').innerHTML = html;
}

function questionNumber() {
    if (quiz.q_index < 3) {
        var html = `<span>Question</span><span>${quiz.q_index + 1}</span>`;
        document.querySelector('#progress').innerHTML = html;
    } else {
        document.querySelector('#progress').innerHTML = '';
    }
}

