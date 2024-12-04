const displayScoreH = document.getElementById("score-h");
const displayScoreG = document.getElementById("score-g");

let scoreHome = 0;
let scoreGuest = 0;

function addOne() {
  scoreHome++;
  displayScoreH.textContent = scoreHome;
}

function addTwo() {
  scoreHome = scoreHome + 2;
  displayScoreH.textContent = scoreHome;
}

function addThree() {
  scoreHome = scoreHome + 3;
  displayScoreH.textContent = scoreHome;
}

function addOneG() {
  scoreGuest++;
  displayScoreG.textContent = scoreGuest;
}

function addTwoG() {
  scoreGuest = scoreGuest + 2;
  displayScoreG.textContent = scoreGuest;
}

function addThreeG() {
  scoreGuest = scoreGuest + 3;
  displayScoreG.textContent = scoreGuest;
}

function newGame() {
  scoreHome = 0;
  scoreGuest = 0;
  displayScoreG.textContent = scoreGuest;
  displayScoreH.textContent = scoreHome;
}
