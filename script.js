// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", "*", "+", ",", "-", "/", ":", ";", "<=>?@[\]^_`{|}~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
var passLength = prompt("How many characters between 8 and 30 would you like your password to contain?");
if (passLength >= 8 && passLength <= 30 ) {
  alert("Your password will contain the selected amount of characters.");
} else {
  alert("Insufficient Password");
}
generatePassword ()
}

var genLowerCase = confirm("Do you want to include lowercase letters?");
var genUpperCase = confirm("Do you want to include uppercase letters?");
var genNumberChar = confirm("Do you want to include numbers?");
var genSpecChar = confirm("Do you want to include special characters?");
var genRandomPass = confirm("Do you want a randomized password?");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
