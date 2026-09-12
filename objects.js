

var dog = {

    "name": "Sheru",
    "legs": 4,
    "tails": 1,
    "friends": ["Humans", "Dogs"]

}


var name = dog.name;
dog.name = "Tommy";

console.log(dog.name);

// nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


// update function

function updateDog(name, legs, tails, friends){
    dog.name = name;
    dog.legs = legs;
    dog.tails = tails;
    dog.friends = friends;
}

updateDog("Tiger", 6, 2, ["Humans", "Dogs"]);
console.log(dog)


// delete function

function deleteDogProperty(property){
    delete dog[property];
}

deleteDogProperty("tails");
console.log(dog);

// object.freeze() : prevents modification of object

Object.freeze(dog);

dog.name = "Rocky";
console.log(dog.name); // name will not be updated


