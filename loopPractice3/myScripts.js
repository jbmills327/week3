var students = [{
    name: 'Liz',
    age: 25,
    city: 'Boulder'
}, {
    name: 'Meghan',
    age: 27,
    city: 'Denver'
}, {
    name: 'Trent',
    age: 32,
    city: 'Boulder'
}, {
    name: 'Chelsea',
    age: 24,
    city: 'Boulder'
}, {
    name: 'Amir',
    age: 18,
    city: 'Denver'
}];

// function returns students age
function getAge(students) {

    for (var i = 0; i < students.length; i++) {
        console.log(students[i].age);
    }
}

getAge(students);


// Function return the students name and where they live
function whereYouAt() {

    for (var i = 0; i < students.length; i++) {
        console.log(students[i].name + ", " + students[i].city);
    }
}

whereYouAt(students);



// This function returns where the student is from and excludes the last student
function whereYouIsAt() {

    for (var i = 0; i < students.length - 1; i++) {
        console.log(students[i].name + " is from " + students[i].city);
    }
}

whereYouIsAt(students);



//
function howOldAreYou() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].age > 25) {
            console.log(students[i].name + " is older than 25. ");
        }

    }
}

howOldAreYou(students);
