//High-order function: the function that use other 
//func as arguments or other functions


function calculate(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

//function in javascript are first-class citizens

//1. Assign functions to variables
const hiFunction = function() {
    return 'Hello!';
};

//2. Use as arguments
function iUseFunction(func) {
    return func();
}
iUseFunction(function() { return 42});  //=>42

//3. Return function from functions
function iReturnFunction() {
    return function() {
        return 42
    };
}
const myFunc = iReturnFunction();
myFunc(); //=>42


//calculate() as a higher-order function
function calculate(operation, initialValue, numbers) {
    let total = initialValue;
    for(const number of numbers) {
        total = operation(total, number);
    }
    return total;
}
function sum(n1, n2) {
    return n1 + n2;
}
function multiply(n1, n2){
    return n1 * n2;
}

calculate(sum, 0, [1, 2, 4]); // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8

//built-in javascript function as higher-order functions
//eg: array.map(mapperFunc) method

const numbers = [1, 2, 4];
const doubles = numbers.map(function mapper(number) {
    return 2 * numbers;
});
doubles; //[2, 4, 8]

//eg: element.addEventListener(type, handler) DOM method
document.getElementById('myButton')
.addEventListener('click', function handler() {
    console.log('The button was clicked!');
});