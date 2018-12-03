let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('CPU-score');
const result_p = document.querySelector(".result-message p");
const paper_div = document.getElementById('p');
const rock_div = document.getElementById('r');
const scissors_div = document.getElementById('s');

function convertChoice(letter) {
  let word = "";
  switch (letter) {
    case "p":
      word = "Paper"
      break;
    case "r":
      word = "Rock"
      break;
    case "s":
      word = "Scissors"
      break;
  }

  return word;
}

function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertChoice(userChoice) +" beats " + convertChoice(cpuChoice)+ ". You WIN!";
  document.getElementById(userChoice).classList.add("win-glow");
  setTimeout(() => {document.getElementById(userChoice).classList.remove("win-glow")}, 300);
}

function draw(userChoice, cpuChoice) {
  result_p.innerHTML = convertChoice(userChoice) +" equals " + convertChoice(cpuChoice) + ". It's a DRAW!";
  document.getElementById(userChoice).classList.add("draw-glow");
  setTimeout(() => {document.getElementById(userChoice).classList.remove("draw-glow")}, 300);
}

function lose(userChoice, cpuChoice) {
  cpuScore++;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = convertChoice(userChoice) +" loses to " + convertChoice(cpuChoice) + ". You lost!";
  document.getElementById(userChoice).classList.add("lose-glow");
  setTimeout(() => {document.getElementById(userChoice).classList.remove("lose-glow")}, 300);
}

function getCPUChoice() {
  const choices = ["p","r","s"];
  const number = Math.floor(Math.random() * 3); //multiplying the generated number by 3, we obtain a number between 0 and 2
  return choices[number];
}

function play(userChoice) {
  const cpuChoice = getCPUChoice();
  switch (userChoice + cpuChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, cpuChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, cpuChoice);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, cpuChoice);
      break;
  }

}

function main() {
  //Click listener
  paper_div.addEventListener('click', () => {play("p")});
  rock_div.addEventListener('click', () => {play("r")});
  scissors_div.addEventListener('click',() => {play("s")});
}

main();
