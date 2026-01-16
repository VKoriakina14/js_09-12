// ========== МАСИВИ ==========

// Завдання 1: Мінімум та максимум
/* let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// Результат: min = 0, max = 125

let min =Math.min(...values);
let max =Math.max(...values);

console.log("Мінімум", min)
console.log("Максимум", max) */

/* let minValue = values[0]
let maxValue = values[0]

for (let i = 0; i<values.length; i++){
    if(values[i] < minValue){
        minValue = values[i]
    }
    if(values[i] > maxValue){
        maxValue = values[i]
    }
}

console.log("Мінімум", minValue)
console.log("Максимум", maxValue)
 */





//--------------------------------------------------------------------------

// Завдання 2: Замінити від'ємні на 0
let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
// Результат: [10, 20, 0, 6, 11, 0, 125, 0, 8, 0, 3]

/* let result = array.map(item => item < 0 ? 0 : item)

console.log(result)
console.log(array)
 */

/* array.forEach((value, index)=> {
    if (value < 0){
        array[index] = 0;
    }
}
)

console.log(array) */

/* let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
for(let i = 0; i < array.length; i++ ){
    if (array[i] < 0){
        array[i] = 0;

    }
}

console.log(array) */

//--------------------------------------------------------------------------

// Завдання 3: Парні та непарні
let massiv = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// Парні: [10, 20, 8, 4, 8]
// Непарні: [5, 7, 11, 125, 3, 23]

/* let even = massiv.filter(item => item % 2 === 0)
let odd = massiv.filter(item => item % 2 !== 0)

console.log("Парні:", even)
console.log("Непарні:", odd) */

/* let massiv = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];

let even = []
let odd = []

for (let num of massiv) {
    if (num % 2 === 0){
        even.push(num)
    }
    else {
        odd.push(num)
    }

} 

console.log("Парні:", even)
console.log("Непарні:", odd)  */
//--------------------------------------------------------------------------

// Завдання 4: Сума всіх елементів
/* let values2 = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// Результат: 197

/* let result = 0;

for(let value of values2){
result += value
} */

/*let result = values2.reduce((acc, value) => acc + value, 0);

console.log(result)
 */
//--------------------------------------------------------------------------

// Завдання 5: Замінити позитивні на *
// let array2 = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
// Результат: ['*', '*', -2, '*', '*', -10, '*', -3, '*', 0, '*']

// let result = array2.map(item => item > 0 ? '*' : item)

/* let result = [];

for (let item of array2){
    if (item >0){
        result.push("*")
    }
    else {
        result.push(item)
    }
}

console.log(result) */

//--------------------------------------------------------------------------

// Завдання 6: Середнє арифметичне
/* let massiv2 = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
// Знайдіть середнє та виведіть значення більше нього
// Результат: [48, 125, 255, 77, 170]

let sum = massiv2.reduce((acc, value) => acc + value, 0)
console.log("Sum:", sum)

let avg = sum/massiv2.length;
console.log("Avg:", avg)

let above_avg = massiv2.filter(item => item > avg);
console.log("More than avg", above_avg)
 */
//--------------------------------------------------------------------------

// ========== ОБ'ЄКТИ ==========

// Завдання 7: Помножити числові властивості на 2
/* let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};
// Функція multiplyNumeric(obj)
// Результат: { width: 400, height: 600, title: "Моє меню" }

function multiplyNumeric(obj){
    for(let key in obj){ 
        if (typeof obj[key] === 'number'){
            obj[key] *=2;
    }
    }
}

multiplyNumeric(menu)
console.log(menu) */

//--------------------------------------------------------------------------

// Завдання 8: Вкладений об'єкт
/* let user = {
    balance: '$1,250.89',
    age: 24,
    name: {
        first: 'Golden',
        last: 'Clements'
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
        { id: 0, name: 'Buchanan Austin' },
        { id: 1, name: 'Richmond Garrison' },
        { id: 2, name: 'Burns Cook' },
        { id: 3, name: 'Sally Mcpherson' }
    ],
    favoriteFruit: 'strawberry'
};
// 1. Виведіть user.name.first та user.name.last
// 2. Змініть balance на '$2000'
// 3. Видаліть email
// 4. Виведіть весь об'єкт

console.log("First Name: ",user.name.first)
console.log("Last Name: ",user.name.last)

user.balance = "$2000"

delete user.email;

console.log(user)
 */
//--------------------------------------------------------------------------

// Завдання 9: Сума зарплат
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}; */
// Результат: sum = 390

/* let sum = 0;

for (let key in salaries){
    sum +=salaries[key]
}

console.log(sum) */
/* 
let sum = Object.values(salaries).reduce((acc, salary)=> acc + salary, 0)
console.log(sum) */
//--------------------------------------------------------------------------

// Завдання 10: Фільтрація користувачів
/* let users = [
    { id: 1, name: 'Leanne Graham', company: { name: 'Romaguera-Crona' } },
    { id: 2, name: 'Ervin Howell', company: { name: 'Deckow-Crist' } },
    { id: 3, name: 'Clementine Bauch', company: { name: 'Romaguera-Jacobson' } },
    { id: 4, name: 'Patricia Lebsack', company: { name: 'Keebler LLC' } },
    { id: 5, name: 'Chelsey Dietrich', company: { name: 'Keebler LLC' } },
    { id: 6, name: 'Mrs. Dennis Schulist', company: { name: 'Considine-Lockman' } },
    { id: 7, name: 'Kurtis Weissnat', company: { name: 'Keebler LLC' } },
    { id: 8, name: 'Nicholas Runolfsdottir V', company: { name: 'Abernathy Group' } },
    { id: 9, name: 'Glenna Reichert', company: { name: 'Yost and Sons' } },
    { id: 10, name: 'Clementina DuBuque', company: { name: 'Hoeger LLC' } }
];
// Виведіть користувачів з "Keebler LLC"
// Результат: Patricia Lebsack, Chelsey Dietrich, Kurtis Weissnat


const company = "Keebler LLC";

let keebkerUsers = users.filter(user => user.company.name === company);

console.log(keebkerUsers)

keebkerUsers.forEach(user => console.log(user.name)) */

//--------------------------------------------------------------------------

// Завдання 11: Calculator
/* let calculator = {
    // read(a, b) - зберігає a та b
    // sum() - повертає a + b
    // mul() - повертає a * b
    a: 0,
    b: 0,

    read(x,y){
        this.a = x;
        this.b = y;
    },

    sum(){
        return this.a + this.b

    },

    mul(){
        return this.a * this.b
    }

};

calculator.read(5, 6);
console.log(calculator.sum());  // 11
console.log(calculator.mul());  // 30


 */

//--------------------------------------------------------------------------

// Завдання 12: BankAccount
let BankAccount = {
    balance: 0,
    // deposit(amount) - додає суму
    // withdraw(amount) - забирає суму, перевіряє баланс
    // getBalance() - показує баланс

    deposit(amount){
        this.balance += amount;
        console.log ("Deposit: ", amount)
        console.log ("Balance: ", this.balance)
        return this.balance
    },

    getBalance(){
        console.log ("Balance: ", this.balance)
        return this.balance
    },

    withdraw(amount){
        if (amount <= this.balance){
            this.balance -= amount;
            console.log ("Amount: ", amount)
            return this.balance
        }
        else {
             console.log ("Not enough money on your balance ", this.balance)
             return this.balance
        }
    }

};

BankAccount.getBalance();           // Баланс: 0
BankAccount.deposit(500);
BankAccount.getBalance();           // Баланс: 500
BankAccount.withdraw(100);
BankAccount.getBalance();           // Баланс: 400
