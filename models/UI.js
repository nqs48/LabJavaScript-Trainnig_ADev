// ts-check
import { updateTable } from "../app.js";
import { Gamer } from "./Gamer.js";
import { success, error} from "../assets/js/sweet.alerts.js";
export class UI {
  constructor() {}

  showFormData(callback) {
    const separatorOne = document.getElementById("separator_one");
    separatorOne.style.display = "none";
    const separatorTwo = document.getElementById("separator_two");
    separatorTwo.style.display = "none";

    const title = document.getElementById("title");
    title.innerText = "New Game";
    const container = document.getElementById("quiz");

    const containerForm = document.createElement("form");
    containerForm.setAttribute("id", "mainForm");
    containerForm.className = "form-style";

    const inputName = document.createElement("input");
    inputName.setAttribute("id", "nameGamer");
    inputName.setAttribute("required", "required");
    inputName.placeholder = "Name";
    inputName.className = "style_input";
    inputName.type = "text";

    const inputEmail = document.createElement("input");
    inputName.setAttribute("id", "inputGamer");
    inputEmail.setAttribute("required", "required");
    inputEmail.setAttribute("type", "email");
    inputEmail.placeholder = "Email";
    inputEmail.className = "style_input";

    const inputButton = document.createElement("button");
    inputButton.type = "submit";
    inputButton.className = "button";
    inputButton.textContent = "Play Game";

    containerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      callback(new Gamer(inputName.value, inputEmail.value));
    });
    containerForm.append(inputName, inputEmail, inputButton);
    container.append(containerForm);
  }

  hiddenComponent() {
    const formContainer = document.getElementById("mainForm");
    formContainer.style.display = "none";
  }

  /**
   *
   * @param {string} text This is the question to render
   */
  showQuestion(text) {
    console.log(text);
    const title = document.getElementById("title");
    console.log(title);
    title.innerText = "Quiz";
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} choices Question choices
   * @param {function} callback Specific Function
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.className = "button";
      choicesContainer.append(button);
      button.addEventListener("click", () => callback(choice));
    });
  }

  showRound(ronda) {
    const roundContainer = document.getElementById("container_round");
    roundContainer.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.className = "progress";
    paragraph.innerText = "Question " + ronda + " of 5";
    roundContainer.append(paragraph);
  }

  showLogOut(callback) {
    const leaveContainer = document.getElementById("container_leave");
    leaveContainer.innerHTML = "";
    const button = document.createElement("button");
    button.innerText = "Leave Game";
    leaveContainer.append(button);
    button.className = "button";
    button.classList.add("button-logout");
    button.addEventListener("click", () => callback(false));
  }

  /**
   *
   * @param {Quiz} quiz
   */
  showScores(quiz) {
    // console.log(quiz.gamer.name);
    // console.log(quiz.gamer.score);

    // const winner = document.createElement("h1");
    // winner.innerText = "You win the higher rewards";

    // const loser = document.createElement("h1");
    // loser.innerText = "You lose all rewards";

    // const saver = document.createElement("h1");
    // saver.innerText = "You save your current reward";

    // const name = document.createElement("h2");
    // name.innerText = "Gamer: " + quiz.gamer.name;

    // const score = document.createElement("h3");
    // score.innerText = "Your Score: " + quiz.gamer.score;

    // const container = document.getElementById("quiz");
    // container.innerHTML = "";
    if (quiz.gamer.score == 10000) {
      success("You win the higher rewards").then(() => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
      
      container.append(winner, name, score);
    } else if (quiz.gamer.score == 0) {
      error("ooops", "You lose all rewards").then(() => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
      
      // container.append(loser, name, score);
    } else {
      success("You save your current reward").then(() => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
      // container.append(saver, name, score);
      
    }
    
  }
}
