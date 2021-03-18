
// Only change code below this line
function myMutation(arr) {
    var firstStr = arr[0].toLowerCase();
    var secondStr = arr[1].toLowerCase();
    
    for(var i = 0; i < secondStr.length; i++){
        if(firstStr.indexOf(secondStr[i]) === -1){
            return false;
        } 
    }

    return true;
}

// Only change code above this line

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutrsqponmlkjihgfedcab", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;