// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    // Only change code below this line
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    // Only change code above this line
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;