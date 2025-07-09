//hw-7
//Задание 1
let js = 'js';
const result = js.toUpperCase();
console.log(result);

//Задание 2
function filterStringsByPrefix(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();
  return arr.filter(item => 
    item.toLowerCase().startsWith(lowerPrefix)
  );
}

const fruits = ['Apple', 'Banana', 'apricot', 'Orange', 'Grape', 'avocado'];
const filteredFruits = filterStringsByPrefix(fruits, 'ap');
console.log(filteredFruits);

//Задание 3
let arr = 32.58884;

console.log(Math.ceil(arr));
console.log(Math.round(arr));
console.log(Math.floor(arr));

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(minValue);
console.log(maxValue);

//Задание 5
function resultR(){
let numberRandom;
resultRandom = Math.floor(Math.random() * 10) + 1;
console.log(resultRandom);
}
resultR()

//Задание 6
function generateRandomArray(n) {
  const length = Math.floor(n / 2);
  return Array.from({ length }, () => Math.floor(Math.random() * (n + 1)));
}

console.log(generateRandomArray(16));

//Задание 7
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 10));

//Задание 8
let tuday = new Date;
console.log(tuday);

//Задание 9
let currentDate = new Date;
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function myDateRus(date) {
    const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  
  const days = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = days[date.getDay()];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const myDate = new Date();
console.log(myDateRus(myDate));

//Игра "Угадай число"
function oneNewGame() {
  alert('Добро пожаловать в игру "Угадай число". Тебе необходимо угадать число которое я загадала, я буду давать тебе подсказки "больше" или "меньше"');
  let secretNumber;
  let attempts = 0;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  while (true) {
    const userGuess = +prompt('Твое число...');
    attempts++;
   if (isNaN(userGuess)) {
    alert('Нужно ввести число!')
    continue;
   }
   if (userGuess < 1 || userGuess > 100) {
    alert('Число должно быть от 1 до 100!');
    continue;
   }
   if (userGuess === secretNumber) {
    alert(`Поздравляю! Ты угадал! Я загадала число ${secretNumber}!`);
    break;
   }
   else if (userGuess < secretNumber) {
    alert('Я загадала число больше. Попробуй еще раз!');
    continue;
   }
   else {
    alert('Я загадала число меньше. Попробуй еще раз!');
    continue;
   }
  }
}

//Игра "Арифметические задачки"

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateProblem() {
  const operations = ['+', '-', '*', '/'];
  const operation = operations[getRandomInt(0, 3)];
  
  let num1, num2;
  if (operation === '/') {
    num2 = getRandomInt(1, 10);
    const result = getRandomInt(1, 10);
    num1 = num2 * result;
  } else {
    num1 = getRandomInt(1, 20);
    num2 = getRandomInt(1, 20);
  }
  
  const expression = `${num1} ${operation} ${num2}`;
  const answer = eval(expression);
  
  return { expression, answer };
}
function startMathGame() {
  alert("Добро пожаловать в игру 'Простая арифметика'!\nРешите предложенную задачу.");
  
  let playAgain = true;
  
  while (playAgain) {
    const problem = generateProblem();
    const userAnswer = prompt(`Сколько будет: ${problem.expression}?`);
    
    if (userAnswer === null) {
      alert("Игра завершена.");
      return;
    }
    
    const numericAnswer = parseFloat(userAnswer);
    
    if (isNaN(numericAnswer)) {
      alert("Пожалуйста, вводите только числа!");
    } else if (Math.abs(numericAnswer - problem.answer) < 0.001) {
      alert("Правильно! Молодец!");
    } else {
      alert(`Неправильно. Правильный ответ: ${problem.answer}`);
    }
  } 
  alert("Спасибо за игру! До свидания!");
}

//Игра "Переверни текст"
function gameText() {
const text = prompt("Давай поиграем! Напиши любой текст и посмотри результат");
if (text) {
  const result = text.split('').reverse().join(''); 
  alert(`Твой текст наоборот- ${result}`);
} else {
  alert("Ты ничего не написал, хочешь выйти из игры?")
}
}

//Игра "Викторина"

const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зеленый"],
                correctAnswer: 2 
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2
            }
        ];
function runQuiz() {
  let score = 0;
  for (let i = 0; i < quiz.length; i++) {
  const currentQuestion = quiz[i];

  let questionText = `${currentQuestion.question}\n`;
  questionText += currentQuestion.options.join('\n');
  
  const userAnswer = parseInt(prompt(questionText));

  if (userAnswer === currentQuestion.correctAnswer) {
    score++;
      alert("Правильно!");
    } else {
        alert(`Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
    }
  }
  alert(`Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
}

