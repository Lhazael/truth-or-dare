import { truthQuestions } from './data/truth.js';
import { dareQuestions } from "./data/dare.js";

// PAGES

const home = document.getElementById("homepage");
const h2pPage = document.getElementById("how2play");
const aboutPage = document.getElementById("aboutPage");
const playerList = document.getElementById("playerPage");
const gamePage = document.getElementById("gameplay");
const endPage = document.getElementById("endgame");

// BUTTONS

const startBtn = document.getElementById("start-btn");
const addBtn = document.getElementById("add-btn");
const enterBtn = document.getElementById("enter-btn");
const truthBtn = document.getElementById("truth-btn");
const dareBtn = document.getElementById("dare-btn");
const nextBtn = document.getElementById("next-btn");
const endBtn = document.getElementById("end-btn");
const restartBtn = document.getElementById("restart-btn");

// INPUT

const list = document.getElementById("player-list");
const input = document.getElementById("player-input");

// GAME VARIABLES

const listPlayers = [];
let truthStep = 0;
let dareStep = 0;

const playerName = document.querySelector("#question-zone h2");
const questionArea = document.querySelector("#question-zone p");


// BUTTONS EVENTS

startBtn.addEventListener(
  "click",
  function () {
    home.hidden = true;
    playerList.hidden = false;
  }, false
);

enterBtn.addEventListener("click", function () {
  if (listPlayers.length === 0) {
    gamePage.hidden = true;
    playerList.hidden = false;
  return alert("Insert a player name")
}
  else {
    playerList.hidden = true;
    gamePage.hidden = false;
  }
}, false
);

truthBtn.addEventListener("click", function () {
  setUpElements()
  setUpQuestion("truth")
}, false
);

dareBtn.addEventListener("click", function () {
  setUpElements()
  setUpQuestion("dare")
}, false
);

// Wanted to use this button but found out I don't need it (for the moment)

// nextBtn.addEventListener("click", function () {
//   gamePage.hidden = false;
//   playerList.hidden = true;
//   home.hidden = true;
//   dareBtn.hidden = false;
//   truthBtn.hidden = false;
// }, false
// );

endBtn.addEventListener("click", function() {
    endPage.hidden = false;
    home.hidden = true;
    gamePage.hidden = true;
    playerList.hidden = true;
}, false
);

restartBtn.addEventListener("click", function() {
  home.hidden = true;
  gamePage.hidden = true;
  playerList.hidden = false;
}, false
);

// SET UP HIDDEN ELEMENTS WHEN TRUTH OR DARE IS CLICKED

function setUpElements() {
  gamePage.hidden = false;
  playerList.hidden = true;
  home.hidden = true;
  dareBtn.hidden = true;
  truthBtn.hidden = true;
}

let nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("count").textContent=nombreClics;
  article.innerHTML =`<article><span id="count">${nombreClics}</span></article>`;
}

// SET UP THE QUESTION DEPENDING ON TRUTH OR DARE CHOICE

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setUpQuestion(choice) {
  playerName.innerHTML = pickRandom(listPlayers);

  if (choice === "truth") {
    questionArea.innerHTML = truthQuestions[truthStep].question;
    truthStep++
    if (truthStep === truthQuestions.length) {
      truthStep = 0;
    }
  } else {
    questionArea.innerHTML = dareQuestions[dareStep].question;
    dareStep++ 
    if (dareStep === dareQuestions.length) {
      dareStep = 0;
    }
  }
}

// PLAYER LIST SETUP

const resetList = () => (list.innerHTML = ""); // to empty the list
const setNoPlayer = () => (list.innerHTML = "<li>No player</li>"); // when list is empty

function deletePlayer(evt) {
  const clickedBtn = evt.target; 
  const parent = clickedBtn.parentElement;
  const text = parent.querySelector(".text").textContent; 
  const indexPlayer = listPlayers.indexOf(text);

  listPlayers.splice(indexPlayer, 1);

  if (listPlayers.length === 0) setNoPlayer();
  parent.remove();
}

function addPlayer() {
  const playerString = input.value;

  if (playerString === "") return alert("Insert a player name");

  if (listPlayers.indexOf(playerString) !== -1)
    return alert("Name already entered");

  if (listPlayers.length === 0) resetList();

  const li = document.createElement("li");

  listPlayers.push(playerString); 

  li.innerHTML = `
    <span class="text"><i class="fas fa-star"></i>  ${playerString}</span>
    <button class="btn">Delete</button>`;

  // CLICKABLE BUTTON
  
  const btn = li.querySelector(".btn");
  btn.addEventListener("click", deletePlayer);

  list.appendChild(li);
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addPlayer);
window.onkeydown = (evt) => {
  if (evt.keyCode === 13) addPlayer(); // if user press the "enter" key
};


