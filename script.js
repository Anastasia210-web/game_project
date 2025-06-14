//hw-2
//Задание 1
//let A = alert("10")
//A = alert("20")

//Задание 2
//alert(iPhone);
//let iPhone = prompt("В каком году выпустился первый iPhone?")

//Задание 3
//let javaScript = prompt("Имя создателя языка JavaScript?")
//alert(javaScript);

//Задание 4
//let sum = 10 + 2;
//alert(sum);

//let difference = 10 - 2;
//alert(difference);

//let product = 10 * 2;
//alert(product);

//let quotient = 10 / 2;
//alert(quotient);

//Задание 5
//let result = 2 ** 5;
//alert(result);

//Задание 6
//let a = 9;
//let b = 2;
//let remainder = a % b;
//alert(remainder);

//Задание 7
//let num = 1;
//num +=5;
//num -=3;
//num *=7;
//num /=3;
//num++;
//num--;
//alert(num);

//Задание 8 
//let age = Number(prompt("Сколько Вам лет?"));
//alert(age);

//Задание 9
//const user = {
    //name: 'Anna',
    //age: 20,
    //isAdmin: true
//}

//Задание 10 
//let Name = prompt("Как вас зовут?");
//alert(`Привет, ${Name}!`);

//hw-3
//Задание 1 
//let password = '112233';
//let enterPassword = prompt("Введите пароль");
//if (enterPassword === "112233") {
    //alert ("Пароль введен верно")}
    //else {
     //   alert ("Пароль введен неправильно")
    //};

//Задание 2
//let c = prompt('Введите число');
//if (c >= 0 && c <= 10) {
  // console.log('Верно')}
//else {console.log('Неверно')};

//Задание 3
//let d = 15;
//let e = 225;
//if (d >= 100 || e >= 100 ) 
//    {console.log('Верно')}
//else {console.log('Неверно')};

//Задание 4
//let a = '2';
//let b = '3';
//alert(+a + +b);

//Задание 5 
//var monthNumber = prompt('Введите число месяца');
//switch (monthNumber) {
    //case '1':
       // alert('Январь')
       // break;
        //    case '2':
       // alert('февраль')
        //break;
       //             case '3':
       // alert('Март')
       // break;
       //             case '4':
       // alert('Апрель')
       // break;
       //             case '5':
       // alert('Май')
       // break;
       //             case '6':
       // alert('Июнь')
       // break;
       //             case '7':
       // alert('Июль')
       // break;
       //             case '8':
       // alert('Август')
       // break;
       //             case '9':
       // alert('Сентабрь')
       // break;
       //             case '10':
       // alert('Октябрь')
       // break;
       //             case '11':
       // alert('Ноябрь')
       // break;
       //             case '12':
       // alert('Декабрь')
       // break;


    //default:
      //  alert('Такого месяца нет')
      //  break;
//}

//hw-4
//Задание 1
let i = 0;
while (i < 2) {
    console.log ("Привет");
    i++;
}
//Задание 2
let I = 1;
while (I <= 5) {
console.log(I);
I++;
}

//Задание 3
let a = 7;
while (a <= 22) {
console.log(a);
a++;
}

//Задание 4
const obj = {
    "Коля": '200',
    "Вася":'300',
    "Петя": '400'
}
for (const key in obj) {
    console.log (`${key}: ${obj[key]}`);
}

//Задание 5 
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(num);

//Задание 6
let dayFriday = 1;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}



