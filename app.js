// @ts-ckeck
import { uploadQuestionLocalStorage } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Gamer } from "./models/Gamer.js";
import { UI } from "./models/UI.js";

let listQuestions=[];
let gamerInfo = [];

const crearItem = (quiz) => {
  gamerInfo.push(quiz.gamer);
};

/**
 * Method to catch data of local storage and update
 */
export const updateTable=()=>{
  if(localStorage.getItem("gamers")){
    let items = JSON.parse(localStorage.getItem("gamers"));
    gamerInfo.push(...items);
  }
}

/**
 * Method to save data gamer
 */
const guardarDB = () => {
  localStorage.setItem("gamers", JSON.stringify(gamerInfo));
};


/**
 * 
 * @param {Quiz} quiz Instance of class Quiz
 * @param {UI} ui Instance of class UI
 */
const renderPage = (quiz, ui )=>{
  if(quiz.gaming){
    let currentQuestion = quiz.getQuestion();
    console.log(currentQuestion.text)
    ui.hiddenComponent();
    ui.showQuestion(currentQuestion.text);
    ui.showChoices(currentQuestion.choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showRound(quiz.level);
    ui.showLogOut((save) => {
      quiz.gaming= save;
      quiz.gamer.score= quiz.gamer.score;
      ui.showScores(quiz);
      updateTable();
      crearItem(quiz);
      guardarDB();
    });
  }else{
    updateTable();
    crearItem(quiz);
    guardarDB();
    ui.showScores(quiz);
  }
  
}

function main() {
  const ui= new UI();
  uploadQuestionLocalStorage();

  let questions= JSON.parse(localStorage.getItem("questions"))
  listQuestions.push(...questions);

  ui.showFormData((gamer) =>{
    const quiz = new Quiz(gamer, listQuestions);
    renderPage(quiz, ui);
  });
}

main();

