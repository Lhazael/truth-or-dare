const home = document.getElementById("homepage");
const startBtn = document.getElementById("start-btn");
const input = document.getElementById("player-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("player-list");
const listPlayers = [];
const truthBtn = document.getElementById("truth-btn");
const dareBtn = document.getElementById("dare-btn");
const nextBtn = document.getElementById("next-btn");

// const resetList = () => (list.innerHTML = ""); // empty the list


function show(section) {
    section.classList.remove("hidden")
};

function hide(section1, section2, section3) {
    section1.classList.add("hidden");
    section2.classList.add("hidden");
    section3.classList.add("hidden");
};

// window.onload = () => {
//     document.getElementById("").onclick = function () {
//         show(homePage);
//         hide(rulesPage, aboutPage, gamePage);
//     };


// ================
// - EVENTS
// ================

button.addEventListener('click', () => {
    checkButton();
});


// btn.addEventListener("click", "got to next page");