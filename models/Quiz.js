// @ts-check
import { Question } from "./Question.js";
import { Gamer } from "./Gamer.js";

export class Quiz {
  level = 1;
  currentQuestion;
  gaming = true;

  /**
   *
   * @param {Gamer} gamer Is the player who is playing the game
   * @param {Question[]} questions List of questions
   */
  constructor(gamer, questions) {
    this.questions = questions;
    this.gamer = gamer;
    this.getQuestion()
  }

  /**
   * Method to returns the current random question for level
   * @returns {Question} this is the current Question
   */
  getQuestion() {
    let questionsForLevel = this.questions.filter(
      (question) => question.category === this.level
    );
    let random = Math.floor(Math.random() * 5);
    this.currentQuestion = questionsForLevel[random];
    return this.currentQuestion;
  }

  /**
   * Update the game values
   * @param {String} answer Response user
   */
  guess(answer) {
    console.log(answer)
    if (answer === this.currentQuestion.answer && this.level <= 5 ) {
      this.level += 1;
      this.gamer.score+= 1000;
      if(this.level >5){
        this.gamer.score*=2;
        this.gaming = false;
      }
    } else {
      this.gamer.score = 0;
      this.gaming = false;
    }
  }

}
