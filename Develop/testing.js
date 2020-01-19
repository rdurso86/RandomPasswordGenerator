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

let charArr = [];
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "~!@#$%^&*()_+=?";
let numbers = "0123456789";


function randomNumber(){
  if (numberChoice === true) {
    charArr.push(numbers);
  }
return;
}

function randomLower(){
  if (lowerCaseChoice === true) {
  charArr.push(lowerCase);
}}

function randomUpper(){
  if (upperCaseChoice === true) {
  charArr.push(upperCase);
}}

function randomSymbol(){
  if (symbolsChoice === true) {
  charArr.push(symbols);
}}


/*console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());
*/
// Write password to the #password input
 
//charArr = [randomLower, randomUpper, randomNumber, randomSymbol];


//charArr.push(randomLower());
//charArr.push(randomUpper());
//charArr.push(randomNumber());
//charArr.push(randomSymbol());


console.log(charArr);
//Array.from(randomLower, randomUpper, randomNumber, randomSymbol);
//for loop to repeat chararr until user choice is met

function generatePassword() {
  //need variable to store password outside of loop
  //array to reference functions
  //if statements push to array
  //to master to run for loop over just array
  for (let i = 1; i < userChoice; i++){
    charArr += userChoice
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


function generatePassword() {
  //let newArr = charArr[Math.floor(Math.random() * userChoice)];
  //to master to run for loop over just array
  //for (let i = 1; i < userChoice; i++){
  //charArr += userChoice;
  //let newArr = charArr[Math.floor(Math.random() * charArr.length)];
  for (let i = 1; i < userChoice; i++) {
    charArr += userChoice;
    //charArr = [Math.floor(Math.random() * charArr.length)];
  }

  return charArr;
  //for (let i = 1; i < userChoice; i++){
  //charArr += userChoice;
  //return charArr[Math.floor(Math.random() * userChoice)];
}