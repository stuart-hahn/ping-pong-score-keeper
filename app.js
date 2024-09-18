const scoreInput = document.querySelector("#number");
scoreInput.value = 7;

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const p1Button = document.querySelector(".p1");
const p2Button = document.querySelector(".p2");
const resetButton = document.querySelector(".reset");

let p1 = 0;
let p2 = 0;

const winner = (p1, p2, target) => {
  return p1 + p2 === parseInt(target);
};

const winnerColor = (p1, p2) => {
  if (p1 > p2) {
    p1Score.style.color = "green";
    p2Score.style.color = "red";
  } else {
    p1Score.style.color = "red";
    p2Score.style.color = "green";
  }
};

p1Button.addEventListener("click", (e) => {
  p1 += 1;
  p1Score.innerText = p1;
  if (winner(p1, p2, scoreInput.value)) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    winnerColor(p1, p2);
  }
});

p2Button.addEventListener("click", (e) => {
  p2 += 1;
  p2Score.innerText = p2;
  if (winner(p1, p2, scoreInput.value)) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    winnerColor(p1, p2);
  }
});

resetButton.addEventListener("click", (e) => {
  p1 = 0;
  p2 = 0;
  p1Score.innerText = p1;
  p2Score.innerText = p2;

  p1Button.disabled = false;
  p2Button.disabled = false;

  p2Score.style.color = "black";
  p1Score.style.color = "black";
});
