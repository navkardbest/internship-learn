// function to display everything what it receives
function myDisplayer(input){
    document.getElementById('demo').innerHTML = input;
}

let myPromise = new Promise(
    function(myResolve, myReject){
        let x = 0;
        x += 3;

        if (x == 0){
            myResolve("OK");
        }else{
            myReject("Not OK")
        }
    }
);

myPromise.then(
    function (value) {myDisplayer(value);},
    function (error) {myDisplayer(error);}
);

// Promise example

let thePromise = new Promise(
    function(myResolve, myReject){
        setTimeout(function(){
            myResolve("Hello");
        },3000);
    }
);

thePromise.then(
    function(value){
        document.getElementById('demo2').innerHTML = value;
        
    }
);

