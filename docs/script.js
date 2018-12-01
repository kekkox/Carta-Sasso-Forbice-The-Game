let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('CPU-score');
const result_p = document.querySelector(".result-message p");
const paper_div = document.getElementById('p');
const rock_div = document.getElementById('r');
const scissors_div = document.getElementById('s');

function convertChoise(letter) {
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

function win(userChoise, cpuChoise) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertChoise(userChoise) +" beats " + convertChoise(cpuChoise)+ ". You WIN!";
  document.getElementById(userChoise).classList.add("win-glow");
  setTimeout(() => {document.getElementById(userChoise).classList.remove("win-glow")}, 300);
}

function draw(userChoise, cpuChoise) {
  result_p.innerHTML = convertChoise(userChoise) +" equals " + convertChoise(cpuChoise) + ". It's a DRAW!";
  document.getElementById(userChoise).classList.add("draw-glow");
  setTimeout(() => {document.getElementById(userChoise).classList.remove("draw-glow")}, 300);
}

function lose(userChoise, cpuChoise) {
  cpuScore++;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = convertChoise(userChoise) +" loses to " + convertChoise(cpuChoise) + ". You lost!";
  document.getElementById(userChoise).classList.add("lose-glow");
  setTimeout(() => {document.getElementById(userChoise).classList.remove("lose-glow")}, 300);
}

function getCPUChoise() {
  const choises = ["p","r","s"];
  const number = Math.floor(Math.random() * 3); //multiplying the generated number by 3, we obtain a number between 0 and 2
  return choises[number];
}

function play(userChoise) {
  const cpuChoise = getCPUChoise();
  switch (userChoise + cpuChoise) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoise, cpuChoise);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoise, cpuChoise);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoise, cpuChoise);
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
