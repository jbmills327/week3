// Returns name when button is clicked
function getName(person) {
    return person.name;
}

console.log(getName({
    name: "Luisa",
    age: 25
}));


// Found the length of all the letters in an array
function wordCount(array) {
    var newString = array.toString();
    newString = newString.replace(/,/g, "");
    return newString.length
}

console.log(wordCount(["javascript", "is", "awesome"]));


// This is a function to seperate an object into a key and value.

function keyValue(x, y) {
    // console.log(x);
    var newKeyStuff = {};
    newKeyStuff[x] = y;

    return newKeyStuff;
}
console.log(keyValue("City", "Denver"));


// This take an array and a number as an argument and will retturn the value that is at the point of slice.
function negativeIndex(arr, num) {
    var newStuff = arr.slice(num);
    return newStuff[0];
}

console.log(negativeIndex(["Jerry", "Sarah", "Sally"], -1));


// This function removes the "M"'s from a word and returns the word without said "M"'s
function removeM(word) {
    var newWord = word.toUpperCase().split("M");
    var newNewWord = newWord.join("").toLowerCase();
    return newNewWord;
}
console.log(removeM("memory"));


// This function  converts an object to a string and then prints the key + is + the value
function printObject(obj) {
    var newWord = JSON.stringify(obj).replace(/"/g, "").replace("{", "").replace("}", "").replace(/,/g, " ");
    var newArray = newWord.split(" ");
    for (i = 0; i < newArray.length; i++) {
        var newWords = newArray[i].replace(/:/, " is ");
        console.log(newWords);
    }

}

(printObject({
    a: 10,
    b: 20,
    c: 30
}));


// This function return the vowels of a string in the form of an array
function vowels(word) {
    var smallWord = word.toLowerCase();
    var newArray = [];
    for (i = 0; i < smallWord.length; i++) {
        if (smallWord[i] === "a" || smallWord[i] === "e" || smallWord[i] === "i" || smallWord[i] === "o" || smallWord[i] === "u") {
            newArray.push(word[i]);
        }
    }
    return newArray;
}

console.log(vowels("What evil odd ducks"));


// This function iterates through an array and determines if the pairs equal each other.

function twins(arr) {
    var newWord = arr.join();
    return newWord;
}

console.log(twins(["a", "a", "c", "d", "c", "c", "d", "d"]));
