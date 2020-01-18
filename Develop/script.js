// Assignment Code
let generateBtn = document.querySelector("#generate");

let userChoice = null;


function askUserPasswordLenght() {

 userChoice = parseInt(prompt("How many characters would you like your random password to be? Please enter a number between 8 and 128."));
  
  if (userChoice >= 8 && userChoice <= 128) {
  }
  else {
    alert("Hey! Follow the directions dummy!")
    askUserPasswordLenght();
  }  
}

askUserPasswordLenght();
  
let numberChoice = (confirm("Would you like your password to include numbers?"));
let lowerCaseChoice = (confirm("Would you like your password to include lower case letters?"));
let upperCaseChoice = (confirm("Would you like you password to include upper case letters?"));
let symbolsChoice = (confirm("Would you like your password to include special characters?"));

function randomNumber(){
  let numbers = "0123456789";
  if (numberChoice === true) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}}

function randomLower(){
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  if (lowerCaseChoice === true) {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}}

function randomUpper(){
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (upperCaseChoice === true) {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}}

function randomSymbol(){
  let symbols = "~!@#$%^&*()_+=?";
  if (symbolsChoice === true) {
  return symbols[Math.floor(Math.random() * symbols.length)];
}}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());

// Write password to the #password input
 
//charArr = [randomLower, randomUpper, randomNumber, randomSymbol];
charArr = [];

charArr.push(randomLower());
charArr.push(randomUpper());
charArr.push(randomNumber());
charArr.push(randomSymbol());


console.log(charArr);
//Array.from(randomLower, randomUpper, randomNumber, randomSymbol);


function generatePassword() {
  //need variable to store password outside of loop
  //array to reference functions
  //if statements push to array
  //to master to run for loop over just array
  for (let i = 1; i <= userChoice; i++) {
    charArr * userChoice[i];
  }
}


console.log(generatePassword());

function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  

  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}


function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
