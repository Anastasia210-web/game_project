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

// Игра "Камень, ножницы, бумага"
function playGame() {
  const options = ["камень", "ножницы", "бумага"];
  
  const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
  
  if (!options.includes(userChoice)) {
    alert("Некорректный ввод. Пожалуйста, выберите камень, ножницы или бумагу.");
    return playGame();
  }
  
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  
  let result;
  
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Компьютер победил!";
  }
  
  alert(`
    Ваш выбор: ${userChoice}
    Выбор компьютера: ${computerChoice}
    Результат: ${result}
  `);
  
  if (confirm("Хотите сыграть еще раз?")) {
    playGame();
  } else {
    alert("Спасибо за игру!");
  }
}

// Игра "Генератор случайных цветов"
function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    currentColorDisplay.textContent = `Текущий цвет: ${randomColor}`;
}



