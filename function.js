


function print(message) {
    console.log(message);
}

// global scope and local scope

var globalVar = "I am a global variable";

function myFunction() {
    var localVar = "I am a local variable";
    print(localVar);
}

myFunction();
print(globalVar);

