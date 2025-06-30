//hw-6
//Задание 1
const age = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < age.length; i++) {
  if (age[i] === 10) {
    break;
  }
console.log(age[i]);
}

//Задание 2 
const number = [1, 5, 4, 10, 0, 3] 
console.log(number.indexOf(4));

//Задание 3
const num = [1, 3, 5, 10, 20]
const numJoin = num.join(" ");
console.log(numJoin);

//Задание 4 
const arr =[];
for (let i = 0; i < 3; i++) {
  const arr2 = [];
  for (let i = 0; i < 3; i++) {
    arr.push(1);
  }
}
  console.log(arr);

//Задание 5
const one = [1, 1, 1]
one.push(2, 2, 2);
console.log(one);


//Задание 6
const only = [9, 8, 7, 'a', 6, 5]
only.sort();
const filterOnly = only.filter(item => typeof item === 'number');
console.log(filterOnly);

//Задание 7
const guess = [9, 8, 7, 6, 5]
const userGuess = +prompt('Угадайте число');
if (guess.includes(userGuess)) {
  alert('Угадал');
} else {
  alert('Не угадал');
  
}

//Задание 8 
const text = ['abcdef']
text.reverse();
console.log(text);

//Задание 9
const numArr = [[1, 2, 3], [4, 5, 6]];
const newArr = [];
for (let i = 0; i < numArr.length; i++) {
  newArr.push(...numArr[i]);
}
console.log(newArr);

//Задание 10
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numb.length; i++) {
  if (numb[i + 1]) {
  console.log(numb[i] + numb[i + 1]);
  }
}

//Задание 11
function square(arr) {
  return arr.map(item => item ** 2);
}
console.log(square([1, 2, 3]));

//Задание 12
function name(arr) {
  return arr.map(item => item.length);
}
console.log(name(['my', 'name', 'Anastasia']))

//Задание 13
function notNum(array) {
  return array.filter(item => item < 0);
}
console.log(notNum([1, 2, -3, 4, -5, 6, 7, -8, -9, 10]));

//Задание 14
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

const numbers = Array.from({length: 10}, getRandomNumber);

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log('Исходный массив:', numbers);
console.log('Четные числа:', evenNumbers);


//Задание 15
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
const numbe = [];
for (let i = 0; i < 10; i++) {
    numbe.push(generateRandomNumber());
}
console.log("Сгенерированные числа:", numbe);
const average = numbe.reduce((sum, number) => sum + number, 0) / numbers.length;
console.log("Среднее значение:", average);




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

