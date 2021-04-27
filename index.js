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

// LIST
const listPlayers = [];



// FUNCTIONS 

// PLAYER LIST SETUP

const resetList = () => (list.innerHTML = ""); // empty the list
const setNoPlayer = () => (list.innerHTML = "<li>No player</li>");

function deletePlayer(evt) {
    const clickedBtn = evt.target; // this is the clicked button
    const parent = clickedBtn.parentElement; // let's access the li (the parent of clickedButton)
    const text = parent.querySelector(".text").textContent; // get the todo text in the span
    const indexPlayer = listPlayers.indexOf(text);
  
    listPlayers.splice(indexPlayer, 1);
  
    if (listPlayers.length === 0) setNoPlayer();
    parent.remove();
  }

  function addPlayer() {
    const playerString = input.value; // access the current input value
  
    if (playerString === "") return alert("Insert a player name");
  
    if (listPlayers.indexOf(playerString) !== -1) return alert("Name already entered");
  
    // no name ? let's remove the initial <li>No player...</li>
    if (listPlayers.length === 0) resetList();
  
    // modify the list HTML with a new li
    const li = document.createElement("li");
    // use the input value as text content for the new li +
  
    listPlayers.push(playerString); // insert the current todo in the state
  
    li.innerHTML = `
    <span class="text">${playerString}</span>
    <button class="btn">delete</button>`;
  
    // create a clickable button :)
    const btn = li.querySelector(".btn");
    btn.addEventListener("click", deletePlayer);
  
    list.appendChild(li); // insert the li in the document
    input.value = "";
    input.focus();
  }

  addBtn.addEventListener("click", addPlayer);
  window.onkeydown = (evt) => {
    // console.log(evt.keyCode);
    if (evt.keyCode === 13) addPlayer(); // only if user press the "enter" key
    // 13 is a convention in the DOM API => represents the enter key (each key has an associated number)
  };
// SHOW AND HIDE

// function show() {
//     section.classList.remove("hidden");
// };

// function hide(section1, section2, section3, section4, section5) {
//     section1.classList.add("hidden");
//     section2.classList.add("hidden");
//     section3.classList.add("hidden");
//     section4.classList.add("hidden");
//     section5.classList.add("hidden");
// };

// window.onload = () => {

//     document.getElementById("homelink").onclick = function () {
//         show(home);
//         hide(h2pPage, aboutPage, playerList, gamePage, endPage);
//     };
//     document.getElementById("h2plink").onclick = function () {
//         show(h2pPage);
//         hide(home, aboutPage, playerList, gamePage, endPage);
//     };
//     document.getElementById("aboutlink").onclick = function () {
//         show(aboutPage);
//         hide(h2pPage, home, playerList, gamePage, endPage);
//     };
// }






// ================
// - EVENTS
// ================

// button.addEventListener('click', () => {
//     checkButton();
// });


// btn.addEventListener("click", "got to next page");