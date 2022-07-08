/* Java script: programming language (logic) :
1. synchronous
2. single threaded (one instruction at a time) */

var n =  2;
function students(num) {
    var ans = num*2;
    return ans;
}
var a1 = students(n);
console.log(a1);

//Execution context (EC) : block or storage

/*Two components of EC:
1. variable environment (memory)
2. thread of execution (code) */

//GEC: Global Execution Context (entire program)
/*Two phases within EC: 
1. creation phase: allocated memory to variables and functions
2. execution phase: code part (line-by-line execution) */

//run JS: initiates GEC
//return statement: breaks control from of EC from current to where the function was invoked

/* call stack: [FIFO]
stack of all the ECs in the program
base of synchronous concept- stores EC */