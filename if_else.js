
var age = 25;

if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
} 

// equality operator

var num1 = 10;
var num2 = "10";

if(num1 == num2){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

if(num1 === num2){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}   

// switch

var day = 3;

switch(day){
    case 1:
        console.log("Monday");      
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");              
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid Day");
}   

console.log("\n");
