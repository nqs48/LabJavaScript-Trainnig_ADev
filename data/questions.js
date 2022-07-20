// @ts-ckeck
import { Question } from "../models/Question.js";
import { dataBase } from "./data.js";



//Creación de Questions a traves de método map
const listQuestions= dataBase.map( q => new Question(q.question, q.choices, q.answer, q.category));


export const uploadQuestionLocalStorage = () => {
  localStorage.setItem("questions", JSON.stringify(listQuestions));
};


