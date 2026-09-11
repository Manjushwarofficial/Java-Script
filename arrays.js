

arr = [];

arr= [1, "Manjushwar"]

console.log(arr[0]);
console.log(arr[1]);

console.log(arr.length);
console.log("\n");

// 2d arr

arr2d = [[1,2,3],[4,5,6],[7,8,9]];

console.log(arr2d);
console.log(arr2d[2][2]);

arr2d.push([1,2])
console.log(arr2d.length);

// shift and unshift

arr2d.shift();
console.log(arr2d);

arr2d.unshift([1,2,3]);
console.log(arr2d);


// json.strigify

var obj = {name: "Manjushwar", age: 25, city: "Pune"};

var myJSON = JSON.stringify(obj);

console.log(myJSON);

var myObj = JSON.parse(myJSON);


console.log(myObj.name);

