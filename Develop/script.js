// Assignment Code
let generateBtn = document.querySelector("#generate");

//let passwordEl = document.getElementById(password)

let userChoice = 0;


function askUserPasswordLenght() {

 userChoice = parseInt(prompt("How many characters would you like your random password to be? Please enter a number between 8 and 128."));
  
  if (userChoice > 8 && userChoice < 128) {
  }
  else {
    alert("Hey! Follow the directions dummy!")
    askUserPasswordLenght();
  }  
}

askUserPasswordLenght();
  
  

//let numericChoice = confirm("Would you like your password to include numbers?");
//let lowerCaseChoice = confirm("Would you like your password to include lower case letters?");
//let upperCaseChoice = confirm("Would you like you password to include upper case letters?");
//let specialCharactersChoice = confirm("Would you like your password to include special characters?");

/*let specialCharacters = "~!@#$%^&*()_+=?".split("");
let numeric = "0123456789".split("");
let lower = "abcdefghijklmnopqrstuvwxyz".split("");
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
*/

function randomNumber(){
  numberChoice = (confirm("Would you like your password to include numbers?"));
  let numbers = "0123456789";
  if (numberChoice === true) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}}

function randomLower(){
  lowerCaseChoice = (confirm("Would you like your password to include lower case letters?"));
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  if (lowerCaseChoice === true) {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}}

function randomUpper(){
  upperCaseChoice = (confirm("Would you like you password to include upper case letters?"));
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (upperCaseChoice === true) {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}}

function randomSymbol(){
  symbolsChoice = (confirm("Would you like your password to include special characters?"));
  let symbols = "~!@#$%^&*()_+=?";
  if (symbolsChoice === true) {
  return symbols[Math.floor(Math.random() * symbols.length)];
}}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());

// Write password to the #password input

function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
