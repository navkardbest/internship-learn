// console.log("Hello");
/*
const cars = ["Ford, Kia , Mahindra"];
document.getElementById('demo').innerHTML = cars;

const premiumCars = [
    "Mercedes",
    "JLR",
    "Ferrari"
];
document.getElementById('demo').innerHTML = premiumCars;

// No need to use this method
const lowEndCars = new Array("Maruti, Hyundai, Toyota");
document.getElementById('demo').innerHTML = lowEndCars;

const cars1 = ["Ford", "Kia" , "Mahindra"];
let car = cars1[0];
cars1[0] = "Mahindra";
document.getElementById('demo').innerHTML = cars1[0];

const fruits = ["banana" , "mango", "apple"];
document.getElementById('demo').innerHTML = fruits.toString();
document.getElementById('demo').innerHTML = typeof(fruits);

const person = {firstName:"John", lastname:"Doe", age:46};
document.getElementById('demo').innerHTML = person.firstName;

// const myArray = [];
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;
// document.getElementById('demo').innerHTML = myArray.length;
let length = fruits.length
document.getElementById('demo').innerHTML = length;

let fruit0 = fruits[0];
let fruitl = fruits[fruits.length - 1];
document.getElementById('demo').innerHTML = fruit0 + fruitl;

// looping array elements
const fruitsB = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruitsB.length;

let text = "<ul>"
// for loop
for(let i=0; i<fLen; i++){
    text += "<li>" + fruitsB[i] + "</li>";
}
text  += "</ul>"

document.getElementById('demo').innerHTML = text;

// forEach
let txt = "<ul>"
fruitsB.forEach(myFunc1);
txt += "</ul>"

function myFunc1(value){
    txt += "<li>" + value + "</li>"
}
document.getElementById('demo').innerHTML = txt;

// push() method
fruitsB.push("Lemon");
document.getElementById('demo').innerHTML = fruitsB;

fruitsB[fruitsB.length] = "Guava";
document.getElementById('demo').innerHTML = fruitsB;

fruitsB[8] = "kiwi";
document.getElementById('demo').innerHTML = fruitsB;

// named indexes
const people = [];
people["firstName"] = "John"
let ptype = typeof(people);
document.getElementById('demo').innerHTML = ptype;

// create arrays
const points = new Array(40, 100, 1, 5, 25, 10);
const points1 = [40, 100, 1, 5, 25, 10];
const points2 = new Array(5);
const points3 = [40];
document.getElementById('demo').innerHTML = points3;
let reality = Array.isArray(points);
let reality1 = points1 instanceof Array;
document.getElementById('demo').innerHTML = reality1;


// Array Methods
const students = ["A","B","C","D"];
let sizeStudents = students.length;
let student = students.at(-1);
students.pop();
students.push("E");
students.shift();
students.unshift("F");
delete students[2];
document.getElementById('demo').innerHTML = student;
document.getElementById('demo').innerHTML = students.join(" * ");
document.getElementById('demo').innerHTML = students;

// concat() method
const myGirls = ["A","B","C"];
const myBoys = ["D","E","F"];
const myMiddle = ["G","H","I"];

const myChildren = myGirls.concat(myBoys,myMiddle);
const myNewGirl = myGirls.concat("L");
document.getElementById('demo').innerHTML = myNewGirl;

// copyWithin() method 
const balls = ["Basketball","Football","Volleyball","GolfBall","Metaball","Fancyball","Quickball"];

// Copy to index 2, all elements from index 0:
balls.copyWithin(6,0);
document.getElementById('demo').innerHTML = balls;

// Copy to index 2, the elements from index 0 to 2:
balls.copyWithin(3,0,1);
document.getElementById('demo').innerHTML = balls;

// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

// Flattening an Array
const myArr = [[1,2],[2,3],[3,4]];
const myFlatArr = myArr.flat();
document.getElementById('demo').innerHTML = myFlatArr;

// Splicing  Array
const sizes = ["1","2","3","4"];
sizes.splice(2,1,"5","6","7");
sizes.splice(0,1);
const months = ["Jan","Feb","Mar"];
const spliced = months.toSpliced(0,1);
document.getElementById('demo').innerHTML = spliced;

// Slicing Array
const feb = months.slice(1,2);
document.getElementById('demo').innerHTML = feb;

// Array Search
const clothes = ["Top","Bottom","Jeans","Shirts","Top"];
let position = clothes.indexOf("Bottom") + 1;
let startPosition = clothes.indexOf("Jeans",3);
let lastPosition = clothes.lastIndexOf("Top") + 1;
let isBottom = clothes.includes("Bottom");
document.getElementById('demo').innerHTML = clothes;
// document.getElementById('demo1').innerHTML = lastPosition;
// document.getElementById('demo2').innerHTML = isBottom;

// find() method
const num = [4,9,16,25,64];
let first = num.find(myFunc2);

function myFunc2(value, index, array){
    return value > 18;
}
document.getElementById('demo').innerHTML = first;

// findIndex() Method
const letters = [1,2,3,4,5];
let fLetter = letters.findIndex(myFuncL);

function myFuncL(value,index,array){
    return value > 3;
}
document.getElementById('demo').innerHTML = fLetter;

// findLast() Method
const temp = [20,21,22,23,24];
let high = temp.findLast(x => x > 22);
document.getElementById('demo').innerHTML = high;

// sort() method
const colors = ["red","blue","green","yellow"];
colors.sort();
document.getElementById('demo').innerHTML = colors;

// reverse method
colors.reverse();
document.getElementById('demo').innerHTML = colors;

// toSorted() method
const furniture = ["fan","chair","desk","cupboard"];
const sorted = furniture.toSorted();
document.getElementById('demo').innerHTML = sorted;

// toReversed() method
const alphy = ["a","b","c","d","e"];
const reversed = alphy.toReversed();
document.getElementById('demo').innerHTML = reversed;

// numeric sort
const numPoints = [40,100,30,10,5];
numPoints.sort(function(a,b){
    return b - a;
});
document.getElementById('demo').innerHTML = numPoints;

// sort
const vals = [10,12,6,15,13]
document.getElementById('demo').innerHTML = vals;

function myFunction11(){
    vals.sort();
    document.getElementById('demo').innerHTML = vals;
}
function myFunction22(){
    vals.sort(function(a,b){
        return a-b;
    });
    document.getElementById('demo').innerHTML = vals;
}

// sorting in random order
const prime = [1,2,5,7,11,13,17];
prime.sort(function(){
    return 0.5 - Math.random()
});
document.getElementById('demo').innerHTML = prime;

// fisher yates method
const impVals = [40,100,1,5,25,10];

for (let i = impVals.length -1; i>0;i--){
    let j = Math.floor(Math.random()*(i+1));
    let k = impVals[i];
    impVals[i] = impVals[j];
    impVals[j] = k;
}

document.getElementById('demo').innerHTML = impVals;


// find min or max with sort (inefficient method)
const points = [40,100,1,5,25,10];
points.sort(function(a,b){
    return a - b
});
let min = points[0];
let max = points[points.length - 1];
document.getElementById('demo').innerHTML = min + " " + max;


// Math.min() on Array
const points = [40,100,1,5,25,10];
let y = findMin(points);
document.getElementById('demo').innerHTML = y;

let z = findMax(points);
document.getElementById('demo').innerHTML = z;

function findMin(arr){
    return Math.min.apply(null,arr);
}
function findMax(arr){
    return Math.max.apply(null,arr);
}



// home made function findMin()

function findMin(arr){
    let len = arr.length;
    let min = Infinity;
    while (len--){
        if(arr[len] <min){
            min = arr[len];
        }
    }
    return min;
}
// home made function findMax()

function findMax(arr){
    let len = arr.length;
    let max = -Infinity;
    while (len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}

// sorting object arrays

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2011},
    {type:"BMW", year:2015}
];

cars.sort(function(a,b){
    return a.year - b.year
});

document.getElementById('demo').innerHTML = cars;

// forEach()

const numbers = [45,4,9,16,25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value,index,array){
    txt += value + "<br>";
}
document.getElementById('demo').innerHTML = txt;



// map()

const num1 = [2,4,3,5,1];
const num2 = num1.map(myFunc);

function myFunc(value,index,array){
    return value * 2;
}
document.getElementById('demo').innerHTML = num1 + " " + num2;


const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap((x) => x *2);
document.getElementById('demo').innerHTML = newArr;


const numbers = [45,4,9,16,25];
const over18 = numbers.filter(myFunction);

function myFunction(value){
    return value > 18;
}

document.getElementById('demo').innerHTML = over18;


// reduce()

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction,100);

function myFunction(total,value,index,array){
    return total + value;
}

document.getElementById('demo').innerHTML = sum;

// every()

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myf);

function myf(value,index,array){
    return value > 2;
}
document.getElementById('demo').innerHTML = allOver18;

*/ 

// some()
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myf);

function myf(value){
    return value > 18;
}
document.getElementById('demo').innerHTML = someOver18;

// .ke













































 


















