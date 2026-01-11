let str = "JavaScript";
let letter = str[1]; 
console.log(letter);

let text = "Джаваскріпт - це весело";
let length = text.length;
console.log(length);

/* let result = 0/0;
console.log(result) */

let guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 9.14;
console.log(guessWho)

/* const num = 42;
const str1 = "Shuba";
const result = num + str1; 
console.log(result) */

let result = "40" - 4;
console.log(result);  

let n = 7;
 n *= 9 + 1; // n = n * (9 + 1)
 console.log(n);  

var a = 4;
var b = 3;
var c = b = a;
console.log(c) 

var number = 65;
number %= 2;    // number = number % 2
console.log(number);

console.log(17 !== '17');

console.log((+null));
console.log((+"123abc"));
console.log((+""));
console.log((+true));
console.log((-"-45"));      
console.log((-false));

let sex = 'male';
let birthday = 19;
let discount;
if (sex === 'male'){
    discount = (birthday >= 25 ) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
} 
console.log(discount)


if(sex === 'male'){
    if (birthday >= 25){
        discount = "30%";
    } else {
        discount = "10%";
    }   
}

let firstName = "";
let lastName = "Bulochka";
let nickName = "";
console.log( firstName || lastName || nickName || "Анонім"); 

console.log( null || (2 && 3) || 4 ); 

// Яке буде останне значення?
var i = 0;
do {
    i += 3;
    console.log("i = " + i);
} while (i < 8); //

/* Завдання 1:
Вирахуйте значення площі кола на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат 
*/

let r = 15; // радіус
let Pi = 3.1415; // число Пі

let area = Pi * r * r;
console.log("Площа кола = " + area);

/* Завдання 2:
Виведіть на екран загальну вартість всіх продуктів, які є на складі
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 

let totalSum = (productPrice1*productQuantity1)+(productPrice2*productQuantity2)+(productPrice3*productQuantity3)

let totalCost1 = productPrice1*productQuantity1
let totalCost2 = productPrice2*productQuantity2
let totalCost3 = productPrice3*productQuantity3

let totalCost = totalCost1+totalCost2+totalCost3

console.log(totalSum)
console.log(totalCost)

/* Завдання 3:
Змініть if...else на switch. 
Поведінка сценарія, після зміни, повинно залишитись без змін (зверніть увагу на змінні USA и Great Britain). 
*/

var country = prompt("Введіть назву країни");

        if (country == "USA" || country == "Great Britain") {
            alert("Англійська мова");
        }
        else if (country == "Germany") {
            alert("Німецька мова");
        }
        else if (country == "France") {
            alert("Французька мова");
        }
        else {
            alert("Вказаної країни немає в списку");
        }

let country = prompt("Введіть назву країни");
        switch(country){
            case "USA":
            case "Great Britain":
                alert("Англійська мова");
                break;
            case "Germany":
                 alert("Німецька мова");
                 break;
            case "France":
                alert("Французька мова");
                break;
            default:
                alert("Вказаної країни немає в списку");
        }

/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі НЕ діляться на 6 між 0 и 100 
*/

for(let i = 0; i <= 100; i++){
    if (i%6 !== 0){
        console.log(i);
    }
}


/* Завдання 5:
Створіть функцію max(a, b), яка повертає більшее число з чисел а и b без використання бібліотеки Math
*/

function max(a,b){
    if (a>b){
        return a
    }
    else if (a<b) {
       return b 
    }
    else return "number is equal"
}

console.log(max(10,5))
console.log(max(2,8))
console.log(max(15,15))