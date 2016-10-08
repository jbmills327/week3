// This function removes Ocelot from the array and returns the remaining

function damnOcelot(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "ocelot") {
            arr.splice(i);
        }
    }
    return arr;
}


console.log(damnOcelot(['rat', 'cat', 'butterfly', 'marmot', 'ocelot']));



// This function removes "cat" and "marmot" from the array
function damnCats(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "cat" || arr[i] === "marmot") {
            arr.splice(i, 1);
        }
    }
    return arr;
}


console.log(damnCats(['rat', 'cat', 'butterfly', 'marmot', 'ocelot']));




// This function returns the reverse array
function flipIt(arr) {
    var newArray = arr.reverse();

    return newArray;
}


console.log(flipIt(['rat', 'cat', 'butterfly', 'marmot', 'ocelot']));


// This function dulicates elements in an array
function dupityDupes(someStuff) {

    var newStuff = []
    var length = someStuff.length - 1;
    for (var i = 1; i < length; i++) {
        newStuff.push(someStuff[i]);
    }
    var mergeShit = someStuff.concat(newStuff);
    mergeShit.sort().reverse();
    return mergeShit;
}


console.log(dupityDupes(['rat', 'cat', 'butterfly', 'marmot', 'ocelot']));
