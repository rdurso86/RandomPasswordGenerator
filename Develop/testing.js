// Assignment Code
let generateBtn = document.querySelector("#generate");

let userChoice = prompt("How many characters would you like your random password to be? Please enter a number between 8 and 128.");

  if (userChoice > 8 && userChoice < 128) {
    }
  else {
    alert("Hey! Follow the directions dummy!")
    userChoice();
  }  
  

let specialCharactersChoice = confirm("Would you like your password to include special characters?");
let numericChoice = confirm("Would you like your password to include numbers?");
let lowerCaseChoice = confirm("Would you like your password to include lower case letters?");
let upperCaseChoice = confirm("Would you like you password to include upper case letters?");



  let specialCharacters = "~!@#$%^&*()_+=?".split("");
  let specialSplit = specialCharacters.split(" ");


function myFunction2() {
  let numericChoice = ["0123456789"];
  let numericSplit = numericChoice.split(" ");
}

function myFunction3() {
  let lowerCaseChoice = ["abcdefghijklmnopqrstuvwxyz"];
  let lowerSplit = lowerCaseChoice.split(" ");
}

function myFunction4() {
  let upperCaseChoice = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let upperSplit = upperCaseChoice.split(" ");
}


function generatePassword() {
  if (symbolsChoice === true) {
    password += symbols;
  }
  
  if (upperCaseChoice === true) {
    password += upperCase;
  }

  if (lowerCaseChoice === true) {
    password += lowerCase;
  }

  if (numberChoice === true) {
    password += numbers;
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (randomNumber) {
    password += numbers;
  }

  if (randomSymbol) {
    password += symbols;
  }

  if (randomLower) {
    password += lowerCase;
  }

  if (randomUpper) {
    password += upperCase;
  }

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
