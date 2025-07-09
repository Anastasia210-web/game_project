//hw-8
//Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

//Задание 2
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleOne = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleOne, isMale)); 

//Задание 3
function printDateEvery3Seconds() {
  let secondsPassed = 0;
  const interval = setInterval(() => {
    console.log(new Date());
    secondsPassed += 3;
    
    if (secondsPassed >= 30) {
      clearInterval(interval);
      console.log("30 секунд прошло");
    }
  }, 3000);
}

printDateEvery3Seconds();

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

delayForSecond(() => sayHi('Глеб'));

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



