var greetings = "Good Morning";  //String defiition
var age = 22; //Number
var adult = true; //Boolean
var weight = 60.50; //Float

var newSum = age + 10;
// alert(greetings)

console.log(newSum)

//swapping exercise
var a = 5;
var b = 6;

//I want to swap a with b and b with a without using third variable 
a = a + b; //11
b = a - b; //5
a = a - b //6

console.log("value of A:" + a + " " + "Value of B:" + b)

//Increment and Decrement Operator
var age = 20;

console.log(age++)
console.log(age)

var a = 4;
var b = 3;
var c = a++ + --b //6
c = c - --a 
console.log(a,b,c)

//taking prompt from user
var price = prompt("Product Cost?");
var tax = 5;
console.log(typeof(price))
console.log("Total price is:",parseInt(price)+tax)  //tax is your prod tax