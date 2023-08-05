var a = "To be good to be";

//defining all the tasks
// diceGenerator()
// thirdTask();
// fourthTask();
// fifthTask();
tryingObjects();

console.log(a.replace(/to/gi, "hello"));

//function to greet you for congratualtions
function congratulations(param1) {
    console.log("Hurrah its a", param1)
}

//function to add 2 values on ES5
function addValues(param1, param2) {
    return param1 + param2
}

//function to add 2 values on ES6
const sum = (param1,param2) =>{
    return param1+param2
}
const static = () => "Static Return"

function diceGenerator() {
    // Make a Dice
    var num = Math.random();
    console.log("Random number is: ", num);

    var dice = Math.floor((num * 6) + 1);
    congratulations(dice); //passing a value

    var sum = addValues(2, 3);
    console.log("Sum is :", sum);
}

function thirdTask() {
    var userAge = parseInt(prompt("What is your age?"));

    checkValidation(userAge)

    function checkValidation(age) {
        if (age < 18) {
            invalid(age)
        }
        else {
            valid(age)
        }
    }

    function invalid(toShow) {
        console.log("Sorry, you are not eligible for the license. Age is: ", toShow);
    }

    function valid(toShow) {
        console.log("Hurrah, You are eleigible for the license. Age is: ", toShow)
    }
}

//global vs local variable
function fourthTask(){
    var value = 5; //global variable

    console.log("Value is", value);  //5
    changValue();
    console.log("value after change",value); //5
    
    function changValue(value=2){
        // value = 9; //local scopped changes
        console.log(`Value is ${value}`); //9
    }
}

//spread operator
function fifthTask(){
    var arr = [1,2,1,1,2,3]

    console.log([8,9,10,...arr]) // (...) are knows as spread operator
}

function tryingObjects(){
    let obj = [{fname:"Hasham",lname:"Khan",course:"WEB-DEV",paid:true},
               {fname:"Talal",lname:"Bhatti",course:"WEB-DEV",paid:false}];

    for(let i=0;i<obj.length;i++){
        if(obj[i].paid == false)
        {
            console.log(`Kindly Pay the fees ${obj[i].fname}`)
        }
    }
}