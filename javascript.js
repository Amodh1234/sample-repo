console.log("Hello");
//singlr line comment
/*
multi line comment
*/
var name = "Amodh";
var one = 1;
var two = 2.2;
console.log(one);
console.log(two);
console.log(name);
const dob = 2021;
const boll = true;
console.log(boll);
console.log(dob);
var arr = [1, 2, 3, 4, "Amodh"]
console.log(arr);
console.log(arr[1]);

// object declaration
var obj = {
    name: "amodh",
    id: 20,
    test: ["fail", "pass", "fail"],
    // object in object
    exam: {
        mids: "pass",
        ends: "pass"
    }
}
console.log(obj);
console.log(obj.exam.mids);

// loops 
//switch case

var num1 = 10;
var num2 = 20;

switch (num1 > num2) {
    case true:
        console.log("1st is large");

    case false:
        console.log("2nd is large");

    default:
        console.log("this is default")
}

// operators
// arithmetic
//  ==  --->   values check
//  ===  --->   checks values and datatypes

var a = "2";
var b = 2;

if (a === b) {
    console.log('this is triple equal to');
}

if (a == b) {
    console.log('this is double equal to');
}


// ternary operator
var mark = 30;
mark < 30 ? console.log("pass") : console.log("fail");

// one exampke of postfix and prefix

var a = 0;
var b = 0;
var c = 0;

b = a++;  //postfix
c = ++a;  // prefix

console.log({ a, b, c });

b = a--;
c = --a;

console.log({ a, b, c });


// loops

var num = 0;
do {
    if (num % 20 === 0) {
        console.log(num);
    }
    num++;
}
while (num <= 100);

const items = {
    food: 1000,
    drinks: 2000
}
var cart = 0; //hositing
function addToCart(parameter) { //parameter
    cart += parameter
}
addToCart(items.food); // argument
addToCart(items.drinks);
console.log("cart: ", cart);

const myfunction = () => console.log("Hello world")
myfunction();

const OurObject = {
    name: "this keyword",
    getThis: function () {
        console.log(this);
    }
};

OurObject.getThis();

// Array

var myarray = [1, 2, 3, 4, 5];
console.log(myarray);
myarray.push(7);   // to push something in last of array
console.log(myarray);
myarray.pop();
console.log(myarray);
myarray.unshift(0); // to push something in front of array
console.log(myarray);
myarray.shift();    // to remove something from front of array
console.log(myarray);


// recursive functions (whrn a function calls iteslf again and again)

var num = 1;
function printNum() {
    console.log(num);
    num++;
    if (num <= 10) {
        printNum();
    }
    else {
        console.log("hello");

        return;
    }
}
printNum();

function getArray() {
    return [1, 2];
}

const [x, y, z] = getArray();  // destructring
console.log(x, y, z);

var myArray = [1, 2, 3];
const newArray = myArray.map((e) => (e + 1)); // map fxn returns new array inspite of changing new array
console.log(myArray);
console.log(newArray);

var myArray = [10, 20, 50];
const newAray = myArray.filter(e => e < 50);
console.log(myArray);
console.log(newAray);

//template literals
console.log("----------------------------------");
console.log(`
They are called template literals
Apple
Mango
Banana`);

// scoping
function outer() {
    var name1 = "abc";
    let name2 = "def";

    function inner() {
        var name1 = "ghi";
        console.log(name1);
    }
    inner();
    console.log(name1);
}
outer();


//asynchronus javascript
//promises
//async await

// we will fetch the data using fetch function

console.log(fetch("https://jsonplaceholder.typicode.com/users")); // this gives the promise to the console

console.log(fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => console.log(data)));


console.log("----------------------------------");

const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
};

getData();

console.log("----------------------------------");

// asyncronous task

const getDataa = async () => {
    var result = await
        fetch("https://jsonplaceholder.typicode.com/users");
    var data = await result.json();
    console.log(data);
}

getDataa();