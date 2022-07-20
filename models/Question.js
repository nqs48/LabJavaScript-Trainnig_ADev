export class Question {
  /**
   * Class Question Constructor
   * @param {string} question This is the text question 
   * @param {string[]} choices These are the question options
   * @param {string} answer This is the correct answer
   * @param {number} category This is the category
   */
  constructor(question, choices, answer, category){
    this.text= question;
    this.choices= choices;
    this.answer= answer;
    this.category= category;
  }

  /**
   * Validate answer
   * @param {String} choice User choice for validate
   * @returns {boolean} Returns true if the answer is correct
   */
  correctAnswer(choice){
    return this.answer === choice; 
  }

}


