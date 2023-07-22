console.log("Hello JS is integrated successfully")

// var forTable = prompt("Which table are you looing for")
// for (i=1;i<=10;i++){
//     if(i == 5){
//         continue //break to complete the execution of For Loop
//     }
//     console.log(forTable+ " x "+ i+ " = "+forTable*i);
// }

var input = parseInt(prompt("Enter your name to check weather it is PRIME or not"));//9
var isPrime = true //for idetification of Prime number

if(input == 1){
    console.log("1 is a composite number")
}
else if(input >= 2){ //greator than 2 or not
    for(var k=2; k < input;k++){ //iterata ble definition, 2<9, k++
        if(input % k == 0){  //9 / 3
            isPrime= false
            break;
        }
}
if(isPrime){
    console.log("this is a prime number")
}
else{
    console.log("this is not a prime number")
}
}

var n = 15; //input from user length for Pyramid
var string = ""; //Pyramid
var lineBreak = "Hello This is Talal \nIm teaching JS"
console.log(lineBreak)

for (var i = 1; i < n ; i++){ //decieding number of lines
    for (var j=0 ; j<i ; j++){  //deciding how many stars
        string += "*"
    }
    string += "\n"; //line break (new line)
}
console.log(string)

var food = ["pizza","burger","fries"]
food[1]= "sandwich" 
console.log(food)

//checking from an ARRAY
var arr = [2,3,4,5,6,7]
var userInput = 7;
for(i=0;i<  arr.length;i++){
    if(arr[i]==userInput){
        console.log("found in array")
    }
}