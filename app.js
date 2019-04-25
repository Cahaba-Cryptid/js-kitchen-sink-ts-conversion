//Defines myName as 'Hayden"
let myName = 'Hayden';
//Give a constant for the number of US states.
const statesoftheUS = '50 states';

//The below variable adds 5 and 4.
let val = 5 + 4;

//Presents an alert box that must be clicked in order to continue.
function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you are not old enough to view this page!');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeg = ['brussels sprouts', 'yellow onion', 'broccoli', 'lima beans', 'spinach', 'arugula'];

for (let x = 0; x < favVeg.length; x++) {
    console.log(favVeg[x]);
};

let friends = [{
    name: 'Katie',
    age: 25
}, {
    name: 'Paul',
    age: 27
}, {
    name: 'Greg',
    age: 19
}, {
    name: 'Sally',
    age: 20
}, {
    name: 'Pat',
    age: 23
}];

for (let x = 0; x < friends.length; x++) {
    checkAge(friends[x].name, friends[x].age);
}
//Make sure the argument is des
function getLength(arg) {
    return arg.length;
}

let wordLength = getLength('Hello World');

console.log(wordLength);

if (wordLength % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

