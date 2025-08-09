const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const answerInput = document.getElementById("answerInput");
const questionFormEl = document.querySelector(".form");

let storedAnswer;
let score = 0;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
  const answer = randomNumber1 * randomNumber2;
  return { question, answer };
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();
  questionEl.innerText = question;
  storedAnswer = answer;
};

const checkAnswer = (event) => {
  event.preventDefault();

  const userAnswer = Number(answerInput.value);

  if (!isNaN(userAnswer)) {
    if (userAnswer === storedAnswer) {
      score += 1;
    } else {
      score -= 1;
    }
    scoreEl.innerText = score;
  }

  answerInput.value = "";
  showQuestion();
};


questionFormEl.addEventListener("submit", checkAnswer);


showQuestion();
