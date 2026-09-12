
// Math object in JavaScript

var random = Math.floor(Math.random() * 10); // generates a random number between 0 and 9
console.log(random);


// parsing a string to number

var str = "123.456";
var num = parseFloat(str);
console.log(num);

var num2 = parseInt(str,2); // parsing a string to number with base 2
console.log(num2);

// toString method

var num3 = 123;
var str2 = num3.toString();
console.log(str2);

// ternary operator

var age = 25;
var isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult);

// let vs var vs const

var x = 10;
if(true){
    var x = 20; // var is function scoped
    console.log(x); // 20
}
console.log(x); // 20

let y = 10;
if(true){
    let y = 20; // let is block scoped
    console.log(y); // 20
}
console.log(y); // 10

const z = 10;
// z = 20; // Error: Assignment to constant variable.

// template literals

var name = "Manjushwar";
var age = 25;

var str3 = `My name is ${name} and I am ${age} years old.`;
console.log(str3);

