// Task 1

const ex1 = Boolean(Number(`10`)) + 1; // 2, number
const ex2 = `sub` + Number(false); // sub0, string
const ex3 = 16  *  `      91    `; // 1456, number
const ex4 = true-70; // -69, number
const ex5 = Number(1 + String(1)) + 1; // 12, number

console.log (typeof (ex1));
console.log (typeof (ex2));
console.log (typeof (ex3));
console.log (typeof (ex4));
console.log (typeof (ex5));

// Task 2

// const secondsInHour = 60 * 60;
// const amountOfHours = +prompt ('Считаем секунды. Укажи количество часов, которое необходимо конвентировать');
// const count = secondsInHour * amountOfHours;
// alert (count);

const amountOfHours = +prompt ('Считаем секунды. Укажи количество часов, которое необходимо конвентировать');
const count = amountOfHours * 3600;
alert (count);

// Task 3

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// ++num;
// --num;
// alert(num);