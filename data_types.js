/* data types: 
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Object
 * 7. Symbol
 */

q = 4/0;
console.log(q/Infinity); // Infinity

console.log(typeof q);

var num =10;

var str = "Hello World";

console.log(typeof(str+ ' '+ num));

q= [];
q.push(1);
q.length = 5;
len = q.length;
console.log(len);

for(i=0; i<len; i++){

    console.log(q[i]);
}

// arrow function

const add = (a,b) => a+b;
console.log(add(2,3));

// higher order function

const arr = [1,2,3,4,5];

const square = (x) => x*x;

const squaredArr = arr.map(square);

console.log(squaredArr);






