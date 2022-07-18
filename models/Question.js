export class Question {
  /**
   * Class Question Constructor
   * @param {string} text This is the text question 
   * @param {string[]} choices These are the question options
   * @param {string} answer This is the correct answer
   */
  constructor(text, choices,answer){
    this.text= text;
    this.choices= choices;
    this.answer= answer;
  }

  correctAnswer(choice){
    return this.answer === choice; 
  }

}