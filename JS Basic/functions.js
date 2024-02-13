let y = myFunction(2, 3);
console.log(y);

const x = (a, b) => a * b;
let z = x(4, 3);
console.log(z);

function myFunction(a, b) {
    return a + b;
}

(function hello() {
    console.log("Hello");
}());
(function world() {
    console.log("World");
})();

function mul2(values) {
    return values * 2;
}

let aa = mul2(3) + 5;
console.log(aa);

console.log(typeof mul2);

function check1(a, b) {
    return arguments.length;
}

console.log(check1(1, 1, 1, 1, 1, 1));

document.getElementById('demo').innerHTML = mul2.toString();

// function parameters
function myFunction1(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

document.getElementById('demo1').innerHTML = myFunction1(4);


function myFunction2(x, y = 10) {
    return x + y;
}
document.getElementById('demo2').innerHTML = myFunction2(5);

/// rest parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

let x2 = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x2);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
let z3 = findMax(1, 123, 500, 115, 44, 88);
console.log(z3);

// function call
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById('demo4').innerHTML = person.fullName.call(person1);
document.getElementById('demo5').innerHTML = person.fullName.call(person2);

function Product(name, price){
    this.name = name;
    this.price = price;
}

function Food(name, price){
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);

//
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "Steve",
    sayHi: function(age,height){
        console.log(this.name + " age is " + age + " height is " + height);
    }
}

// call,apply,bind 
let HiFun = PrintName.sayHi.bind(nameObj, 42, "33cm"); //bind() creates new function
HiFun();
PrintName.sayHi.call(nameObj, 42, "33cm"); //call() takes arguments seperately
PrintName.sayHi.apply(nameObj, [42, "33cm"]); //apply() takes arguments as an array

// Math
console.log(Math.max(1,2,3)); 
console.log(Math.max.apply(null, [1,2,3]));

class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById('demo6').innerHTML = myCar.show();






