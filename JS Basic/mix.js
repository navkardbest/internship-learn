

let person1 = "John Doe";
console.log(person1);

let person2 = {
    fName: "John",
    lName: "Doe",
    age: 50,
    favColor: ["red", "blue", "green"]
}
console.log(person2);

person2.gender = "Male";
console.log(person2);

const x = person2;
delete x.age;
console.log("Person 2", person2);
console.log("X", x);


console.log(person2.fName);
document.getElementById('demo').innerHTML = person2.fName + " " + person2.lName;

let txt = "";
for (let x in person2) {
    txt += person2[x] + " ";
}
document.getElementById('demo1').innerHTML = txt;
console.log('The type of txt is: ', typeof txt);

person2.nationality = "English";
console.log(person2);

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

document.getElementById('demo2').innerHTML = myObj.cars.car1;
document.getElementById('demo3').innerHTML = myObj["cars"]["car2"];

const student = {
    name: "Navkar",
    division: "6C",
    rollId: 111,
    subjects: [
        { languages: "English", grammar: ["English-Grammar"] },
        { languages: "Hindi", grammar: ["Hindi-Vyakaran"] }
    ]
}
let txt2 = "";
for (let i in student.subjects) {
    txt2 += student.subjects[i].languages + " ";
    txt2 += student.subjects[i].grammar + " ";
}
document.getElementById('demo4').innerHTML = txt2;

const person3 = {
    fName: "Navkar",
    lName: "Shah",
    id: 5566,
    fullName: function () {
        return this.fName + " " + this.lName;
    }
};

console.log(person3.fullName());

person3.fullId = function () {
    return (this.id * 2);
};

console.log(person3.fullId());
console.log(person3.fName.toUpperCase());
document.getElementById('demo5').innerHTML = person3;

// displaying object
let txt3 = "";
for (let x in person3) {
    txt3 += person3[x] + " ";
}
document.getElementById('demo6').innerHTML = txt3;

// Object.values
const person3Arr = Object.values(person3);
document.getElementById('demo7').innerHTML = person3Arr;
console.log('Type of person3Arr is ' + typeof person3Arr);

// JSON.stringify , not stringifies functions
person3.fullId = person3.fullId.toString();
let person3Str = JSON.stringify(person3);
document.getElementById('demo8').innerHTML = person3Str;

// Object Accessors
const person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    grammar: "en-g",
    get myLang() {
        return this.language;
    },
    get myLangGrammar() {
        return this.language + " " + this.grammar;
    },
    set myLanguage(value) {
        this.language = value;
    }
};

document.getElementById('demo9').innerHTML = person4.myLang;
document.getElementById('demo10').innerHTML = person4.myLangGrammar;

person4.myLanguage = "guj";
document.getElementById('demo11').innerHTML = person4.language;

// Getters and Setters 
/*
let temperature = {
    _celsius: 25,
    get fahrenheit(){
        return this._celsius * 9/5 + 32;
    }
};
*/

// console.log(temperature.fahrenheit);

let temperature = {
    _celsius: 25,
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5 / 9;
    }
};

temperature.fahrenheit = 101;
console.log(temperature._celsius);

// setters example
let circle = {
    _radius: 0,
    set radius(value) {
        if (value < 0) {
            console.error("Radius cant be negative");
            return;
        }
        this._radius = value;
    }
};

circle.radius = 5;
console.log(circle._radius);

// setters example
let rectangle = {
    _length: 0,
    _width: 0,

    set length(value) {
        this._length = value;
    },
    set width(value) {
        this._width = value;
    }
};

rectangle.length = 10;
rectangle.width = 5;
console.log('Length of the rectangle is: ' + rectangle._length);
console.log('Width of the rectangle is: ' + rectangle._width);

//setters example
let button = {
    _clicked: false,
    set clicked(value) {
        this._clicked = value;
        if (value) { console.log("Button clicked!"); }
    }
};

button.clicked = true;

// Object.define Property()
const obj = {
    counter: 0
};

Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    }
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    }
});
obj.reset;
obj.increment;
obj.increment;
obj.increment;
obj.decrement;
document.getElementById('demo12').innerHTML = "The value of obj counter is: " + obj.counter;

// Object Constructors

function Person(first, last, age) {
    this.fName = first;
    this.lName = last;
    this.age = age;
}


const myFather = new Person("John", "Kenny", 45);
document.getElementById('demo13').innerHTML = "My father is " + myFather.fName + " " + myFather.lName +
    ". " + "He is " + myFather.age + " years old";

// Object Prototypes
function Person5(first, last, age) {
    this.fName = first;
    this.lName = last;
    this.age = age;
}
const myMother = new Person5("Jenny", "Keller", 40)

Person5.prototype.nationality = "English";
Person5.prototype.fullName = function () {
    return this.fName + " " + this.lName;
}

console.log(myMother.nationality);
console.log(myMother.fullName());

// Object Iterables
// using next()


function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

let customIterable = {
    values: [1, 2, 3],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.values.length) {
                    return { value: this.values[index++], done: false };
                }
                else{
                    return {done: true};
                }
            }
        };
    }
};

let iterator1 = customIterable[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// next() example
let myNum = {};

myNum[Symbol.iterator] = function(){
    let n = 0;
    done = false;
    return{
        next(){
            n += 10;
            if ( n == 100){done =  true}
            return {value: n, done: done};
        }
    };
}
let txt7 = "";
for (const num of myNum){
    txt7 += num + "<br>"
}
document.getElementById('demo18').innerHTML = txt7;

// Objects Sets
const letters = new Set(["a","b","c"]);
letters.add("d");
const e = "e";
letters.add(e);
letters.add("f");
letters.add("f");
letters.add("f");
letters.add("f");

console.log(letters.size);

let txt9 = "";
letters.forEach((value) => txt9 += value)

document.getElementById('demo18').innerHTML = txt9;

// values() method // keys() same as values()
const iterator2 = letters.values();

let txt10 = "";
for (const entry of iterator2){
    txt10 += entry;
}
document.getElementById('demo19').innerHTML = txt10;

//entries() returns [value,value] pairs

console.log(typeof letters);
console.log(letters instanceof Set);

// Maps
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);

fruits.set("kiwi", 200);
fruits.set("apples",1000);
console.log(fruits);

console.log(fruits.get("apples"));
console.log(fruits.size);

fruits.delete("bananas");
console.log(fruits);

console.log(fruits.has("bananas"));
console.log(typeof fruits);
console.log(fruits instanceof Map);

let txt11 = "";
fruits.forEach(function(value,key){
    txt11 += key + ' = ' + value + " ";
})

document.getElementById('demo20').innerHTML = txt11;

let txt12 = "";
for (const x of fruits.entries()){
    txt12 += x + " ";
}
document.getElementById('demo21').innerHTML = txt12;

let txt13 = "";
for (const x of fruits.keys()){
    txt13 += x + " ";
}
document.getElementById('demo22').innerHTML = txt13;

let txt14 = "";
for (const x of fruits.values()){
    txt14 += x + " ";
}
document.getElementById('demo23').innerHTML = txt14;

// fruits.clear();
// console.log(fruits);

// Object Reference

const newFruits = Object.create(fruits);
console.log(newFruits);
































