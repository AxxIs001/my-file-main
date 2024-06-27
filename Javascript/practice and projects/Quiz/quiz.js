const quizData = [{
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: 'Which planet is known as the "Red Planet"',
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"',
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Euro", "Dollar", "Rupee"],
        answer: "Yen"
    },
    {
        question: "Which country is home to the famous ancient monument Stonehenge?",
        options: ["France", "United Kingdom", "Italy", "Egypt"],
        answer: "United Kingdom"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Dan Brown"],
        answer: "J.K. Rowling"
    },
    {
        question: 'Which country is known as the "Land of the Rising Sun"?',
        options: ["China", "South Korea", "Japan", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
        answer: "Mount Everest"
    }
];

const questions = document.getElementById("quiz");
const answers = document.getElementById("options");
const submitBtn = document.getElementById("submit");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;



// To make Options in random position
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// To make Questions random order
function shuffleQuizData() {
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}


function showQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questions.innerHTML = questionNo + ". " + currentQuestion.question;

    answers.innerHTML = "";


    // To run options randomize
    shuffleOptions(currentQuestion.options);


    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        answers.appendChild(button);
        button.addEventListener("click", () => selectAnswer(option));
    });

    if (currentQuestionIndex === quizData.length - 1) {
        submitBtn.innerHTML = "Submit";
    } else {
        submitBtn.innerHTML = "Next";
    }
}

function selectAnswer(option) {
    selectedAnswer = option;
}


submitBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
        const answer = quizData[currentQuestionIndex].answer;
        if (selectedAnswer === answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer.");
    }
});



function showResult() {
    const container = document.getElementById("container");
    container.innerHTML = `
    <h1 class="completed">Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <button class="retry" id = "retry"> Retry Again </button>
`;
    retryQuiz()
}


function retryQuiz() {
    const retryBtn = document.getElementById("retry");
    retryBtn.addEventListener("click", () => {
        location.reload();
    })
}

shuffleQuizData();
showQuestion();