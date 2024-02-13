/*
function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("Bye");
}

myFirst();
mySecond();

// sequence control

function myCalc(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalc(5, 5);
myDisplayer(result);

function myCalculator(num1,num2){
    let sum = num1 + num2;
    myDisplayer(sum)
}

function myCal(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}
myCal(5, 5, myDisplayer)

myCalculator(5, 6)

*/


// setTimeout(f1, 3000);
// function f1(){
//     document.getElementById('demo').innerHTML = "Hello";
// }

// setInterval(f2, 1000);
// function f2(){
//     let d = new Date();
//     document.getElementById('demo1').innerHTML = 
//     d.getHours() + ":" +
//     d.getMinutes() + ":"+
//     d.getSeconds();
// }

// Function with a callback
function doSomeAysnc(callback){
    setTimeout(function(){
        console.log('Task Completed');
        callback()
    }, 5000);
}

function afterTaskCompleted(){
    console.log('Callback function executed');
}

doSomeAysnc(afterTaskCompleted);




