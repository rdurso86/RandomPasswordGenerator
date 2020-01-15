// Assignment Code
var generateBtn = document.querySelector("#generate");
let userChoice = prompt("How many characters would you like your random password to be? Please enter a number between 8 and 128.");
let specialCharacters = confirm("Would you like your password to include special characters?");
let numeric = confirm("Would you like your password to include numbers?");
let lowerCase = confirm("Would you like your password to include lower case letters?");
let upperCase = confirm("Would you like you password to include upper case letters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
