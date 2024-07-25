/* JAVASCRIPT */

const num1 = Math.ceil(Math.random() * 10); //Value of first number
const num2 = Math.ceil(Math.random() * 10); //Value of second number
const num3 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById("question"); //Question ID

const inputEl = document.getElementById("input"); //Input ID

const formEl = document.getElementById("form"); //Form ID

const scoreEl = document.getElementById("score"); //Score ID

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2} multiply by ${num3}?`;

const correctAns = num1 * num2 * num3;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}