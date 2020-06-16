"use-strict";
const startButton = document.getElementById("start-btn");

const questionContainerElt = document.getElementById("question-container");



const questionElt = document.getElementById("question");

const answerBtnsElt = document.getElementById("answer-btns");

let shuffledQuestions, currentQuestionIndex;
// undeclaring without assigning them values, leave them undefined

startButton.addEventListener("click", start);

function start() {
  startButton.classList.add("hide"); // on button click hide it
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  //  this shuffles the question by assignin them either a positive or negative value
  questionContainerElt.classList.remove("hide"); // on button click display the questions
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]); //take first question in the array, since currQuestionIndex is set to 0
}

function showQuestion(question) {
  questionElt.innerText = question.question; //display current question
  question.answers.forEach((answer) => {
    //for each question create a button that will display the answers
    const button = document.createElement("button");
    button.innerText = answer.text; //set the inner text to the value in the answer in the array
    button.classList.add("btn"); //ensure styling thru thhis class
    if (answer.correct) {
      // if answer is true
      button.dataset.correct = answer.correct; //the dataset attr adds an attribute to our html elt
      //   we set this attr so as to ease checking if answer is correct later
    }
    button.addEventListener("click", selectAnswer); //on click call the select answerfunction
    answerBtnsElt.appendChild(button);
  });
}

function selectAnswer() {
    
}
const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "22", correct: false },
      ],
    },
    // {
    //   question: "Who is the best YouTuber?",
    //   answers: [
    //     { text: "Web Dev Simplified", correct: true },
    //     { text: "Traversy Media", correct: true },
    //     { text: "Dev Ed", correct: true },
    //     { text: "Fun Fun Function", correct: true },
    //   ],
    // },
    // {
    //   question: "Is web development fun?",
    //   answers: [
    //     { text: "Kinda", correct: false },
    //     { text: "YES!!!", correct: true },
    //     { text: "Um no", correct: false },
    //     { text: "IDK", correct: false },
    //   ],
    // },
    // {
    //   question: "What is 4 * 2?",
    //   answers: [
    //     { text: "6", correct: false },
    //     { text: "8", correct: true },
    //   ],
    // },
  ];
