var letters = '0123456789ABCDEF';
var color = '#';
//Hex values
//#000000 to #FFFFFF
//#42FEA5

var getRandomColor = function() {
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}
//Math.floor: 12.3 -> 12

//functions are just like variables
//functions can be returned from other functions
//functions can be passedto other functions, like variables
console.log(getRandomColor());
console.log(getRandomColor());

document.getElementById('grid').style.backgroundColor = getRandomColor();

//padding-left => paddingLeft
//background-color => backgroundColor

document.getElementById('grid').style.backgroundColor = getRandomColor();
//calling it twice: append six more characters, so will not work

var changeBackground = function (getRandomColor) {
    document.getElementById('grid').style.backgroundColor = getRandomColor();
}

changeBackground(getRandomColor); //Referencing

var getBackgroundColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var getRandomColor = function() {
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    //var getRandomColor = "" => returning string
    return getRandomColor; //returning function
}

getBackgroundColor()();
//to call getRandomColor
//first call: gives the function
//second call: actually gives the function;

//two calls to run the function that is returned
var x = getBackgroundColor();
var color = x();

//arrow function
var incrementByOne = val => val+1;
console.log(incrementByOne(5));

var getRandomColor = () => {
    for (var i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//similar to lambda expression in java
//python map reduce
//functional programming: functions are first class members

//p-slice function
var multiply = (a, b) => a*b;
var multiple = (a) => (b) => a*b;
//broken function or a part function which has fixed one parameter
//army of functions with one parameter fixed

var multiplyBy5 = multiply(5); //b => 5*b
var multiplyBy3 = multiply(3);
multiply(2);
//a = 2
//call this with anything, it will multiply that with 2

console.log(multiplyBy5(6)); 