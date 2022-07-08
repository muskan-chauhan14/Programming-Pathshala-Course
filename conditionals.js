var hour = new Date().hetHours(); //0-23

console.log(hour);

//6 - 11 => morning
//11 - 5 => Afternoon
//5 - 10 => Evening
//10 - 6 => Night

if (hour >= 6 && hour < 11) {
    console.log ("Good Morning!");
} else if (hour >= 11 && hour < 17) {
    console.log ("Good Afternoon!");
} else if (hour >= 17 && hour < 20) {
    console.log ("Good Evening!");
} else{
    console.log ("Good night");
}

//Nested if
//Have a nice summer/winter day/night

//Apr - Aug = Summer
//Winter

//5AM - 5PM => day
//night

var month = new Date().getMonth() + 1; //0-11

if (month >= 4 && month <= 8) {
    //Summer
    if (hour >= 5 && our < 17) {
        console.log("Have a nice summer day!");
    }
    else{
        console.log("Have a nice summer night!");
    }
} else {
    //Winter
    if (hour >= 5 && our < 17) {
        console.log("Have a nice winter day!");
    }
    else{
        console.log("Have a nice winter night!");
    }
}


//Truthy/Falsy
var x = 5;
if (x) {
    console.log("5 is a truthy value");
}

//falsy value
//null
//undefined
//0
//false
//NaN (not a number)
//empty string ("")
var y = 0;
if (y) {
    console.log("0 is a tuthy value");
}

var a = "abc";
var b = "def";
console.log(a-b);
if (a-b) {
    console.log("Truthy");
}
else{
    console.log("falsey");
}

var z="";
if(z) {
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

//ternery operator : shortened form of if-else
(z) ? console.log("Truthy") : console.log("Falsy")

//0-6 => {Sunday,..., Saturday}
if (day === 0 || day === 6) {
    console.log("Hurray! We are having a nice weekend");
} else {
    console.log("Waiting for the weekend to come");
}

//switch
//if you dont break, in switch case itgies on evaluate the next values
switch (day) {
    case 0:
    case 6: console.log("Hurray! It is the weekend");
            break;
    case 5: console.log("It is friday!! We are baout to get weekend");
            break;
    case 1: console.log("It is monday, we just had the weekend");
            //break;
    default: console.log("Waiting for the weekend to come");
}