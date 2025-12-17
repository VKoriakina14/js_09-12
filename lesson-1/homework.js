//Task 1

const fileCreationDate = "2025-12-17";
const fileName = "homework.js";
const errorCount = 0;

//Task 2

let login;
let name = 'Владислав';
login = name;
console.log(login);

//Task 3

let one = 5, two = 'Hello', three = true;

//Task 4

let myUndefined = null;

//Task 5

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";

let resultLine = `${line3} ${line1} ${line2}`;

console.log(resultLine);

//Task 6

let x = 3;
let y = 4;
let z = 0;

let digits = (x + y) + '' + z;

console.log(digits);

//Task 7

let bigAmount = "500";
let greatAmount = "100000";

let hugeAmount = Number(bigAmount) + Number(greatAmount);

console.log(hugeAmount);

//Task 8

let emptyString = "";

    console.log(emptyString.length);
    console.log("Think Different".length);
    console.log((emptyString + 2 + 2 + "22").length);

//Task 9

let title = "Senior Lead Principal Data Analyst";
let degree = "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career = "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

    console.log("RESUME".toLowerCase());
    console.log("TITLE: ".toLowerCase() + title.toLowerCase());
    console.log("DEGREE: ".toLowerCase() + degree.toLowerCase());
    console.log("CAREER: ".toLowerCase() + career.toLowerCase());

//Task 10

let caps = "if I type in caps ";
let fbi = "фбр";

    console.log(fbi.toUpperCase());
    console.log("Гекльберрі Фінн".toUpperCase());
    console.log(caps.toUpperCase() + "they know I mean business".toUpperCase());

//Task 11

let inputX = 2;
    let inputY = 3;

    let x = Number(inputX);
    let y = Number(inputY);

    //let sum = x + y;
    let sum = inputX + inputY;

    console.log(`${x} + ${y} = ${sum}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(x + " + " + y + " = " + sum);
    console.log(x + " * " + y + " = " + (x * y));
    console.log(x + " / " + y + " = " + (x / y));
    console.log(x + " - " + y + " = " + (x - y));

//Task 12

let name = "Владислав";
        let age = 22;
        let company = "Cowchain";
        let position = "QA";

        let message1 = `Привіт, мене звати ${name}. Мені ${age} роки. Я працюю в компанії ${company} на посаді ${position}.`;
        let message2 = "Привіт, мене звати " + name + ". Мені " + age + " роки. Я працюю в компанії " + company + " на посаді " + position + ".";
        console.log(message1);
        console.log(message2);