// !Chapter 35-38

//? Question 1

// function date() {
//   var date = new Date();

//   document.write(date);
// }
// date();

//? Question 2

// function fullName() {
//   var firstName = prompt("Enter First Name");
//   var lastName = prompt("Enter yur Last Name");
//   var fullName = firstName + " " + lastName;
//   document.write(fullName);
// }
// fullName();

//? Question 3

// function Sum() {
//   var num1 = parseInt(prompt("Enter First Number"));
//   var num2 = parseInt(prompt("Enter Second Number"));
//   var sum = num1 + num2;
//   document.write(sum);
// }
// Sum();

// ? Question 4

// function calculator(num1, num2, opr) {
//   if (opr === "+") {
//     return num1 + num2;
//   } else if (opr === "-") {
//     return num1 - num2;
//   } else if (opr === "*") {
//     return num1 * num2;
//   } else if (opr === "/") {
//     if (num2 === 0) {
//       return "Disvided By Zero Is Not Possible";
//     }
//     return num1 / num2;
//   } else {
//     return "Invalid Operator. Please Use (+, -, /, * )";
//   }
// }

// var num1 = parseInt(prompt("Enter First Number"));
// var opr = prompt("Please Enter Operator(+, -, /, *)");
// var num2 = parseInt(prompt("Enter Second Number"));
// var result = calculator(num1, num2, opr);

// document.write("Result: " + result);


// ?Question 5

// function square(){
//   var num = parseInt(prompt("Enter Number"));
//   var sq = num * num;
//   document.write("The Square Root Of "+ num + " = "+ sq);
// }

// square();

// ? Question 6

// function factorialRecursive(n){
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorialRecursive(n - 1);
//   }
// }
// var num = parseInt(prompt("Enter Number"));

//  var result = factorialRecursive(num);
//  document.write("Factorial Of " + num + " is " + result);

// ? Question 7

// function counting(start, end){

//   if(start <=end){
//     for (let i = start; i <=end; i++){
//   document.write(i + "<br>");}
//   }
// else{
//   document.write( "Start Number Should Be Less Than End Number");
// }
// }
// var startNumber = parseInt(prompt("Enter Start Number"));
// var endNumber = parseInt(prompt("Enter End Number"));

// counting(startNumber,endNumber);


//? Question 8

// function calculateHupotenuse(base,perpandicular){
//   var hypotenuse = Math.sqrt(Math.pow(base,2) + Math.pow(perpandicular,2));
//   return hypotenuse;
// }

// var base = parseInt(prompt("Enter Base"));

// var perpandicular = parseInt(prompt("Enter Perpandicular"));

// var hypotenuse = calculateHupotenuse(base,perpandicular);

// document.write("Hypotenuse Of Triangle Is " + hypotenuse);

//? Question 9

//!Argument values
// function areaOfRectengle(widht,height){
//   var area = widht * height;
//   return area;

// }
// var area1 = areaOfRectengle(5,8);
// document.write("Area With Values As Argument:" + area1);

//!Values as Variable
// function areaOfRectengle(){
//   var width = 5;
//   var height =8;
//   return width * height;

// }
// var area2 = areaOfRectengle();
// document.write("Area With Values As Variable:" + area2);

//? Question 10

// function isPalindrome(str){
//   var cleanStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
// return cleanStr===cleanStr.split('').reverse().join('');

// }
// var inputStr ="M,o,m"
// var result = isPalindrome(inputStr);

// if(result){
//   document.write(inputStr + " is Palindrome");
// }
// else{
//   document.write(inputStr + " is not Palindrome");
// }


// ?Question 11

// function capitalizeFirstLetterOFEachWord(inputString){
//   var words = inputString.split(' ');
// var capitalizeWord = words.map(word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });
// var resultStr = capitalizeWord.join(' ');
// return resultStr;


// }
// var inputString = "the quick brown fox jump over the lazy dog";
// var outputString = capitalizeFirstLetterOFEachWord(inputString);
// document.write(outputString);


//? Question 12

// function longestWord(inputString){

//   var words = inputString.split(' ');
//   let longestWord = '';
//   let maxLength = 0;

// words.forEach(word => {
// if (word.length > maxLength){
//   maxLength = word.length;
//   longestWord = word;
// }

// });
// return longestWord;

// }

// var inputString = "Web Development Tutorial";
// var longest = longestWord(inputString);
// document.write("Longest Word: " + longest );


//? Question 13


// function countOccurrenceOfLetter(inputString,letter){
//   let count = 0;
//   for (let i = 0 ; i < inputString.length; i++){
//     if(inputString[i]===letter){
//       count++;
//     }
//   }
//   return count;


// }

// var inputString ="Resourses.com";
// var specifiedLetter = "o";
// var occurrenceCount = countOccurrenceOfLetter(inputString,specifiedLetter);
// document.write("The Letter "+ specifiedLetter + " Appeared " + occurrenceCount + " Times In The String.")



//? Question 14

// !Calculate Circumference

// function calculateCircumference(radius){

//   var circumference = 2 * Math.PI * radius;

// document.write("The Circumference is:" + circumference.toFixed(2));

// }
// var radius = 5;
// calculateCircumference(radius);

// !Calculate Area


// function calculateArea(radius){

//   var circumference = Math.PI *Math.pow(radius,2);

// document.write("The Area is:" + circumference.toFixed(2));

// }
// var radius = 5;
// calculateArea(radius);

