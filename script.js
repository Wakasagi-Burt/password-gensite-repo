// Assignment Code
//view video by traversy media on youtube about let and const use rather than var
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let generateBtn = document.querySelector("#generate");
generateBtn.style.backgroundColor = "blue"; // just goofin around linking HTML and CSS through a .JS filetype!

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "#", "$", "%", "&", "'", "(", "*", "+", ",", "-", "/", ":", ";", "@", "<", ">", "?", "{", "}", "^", "=", "~", "_", "/", "[", "]", "`"]; 

console.log(lowerCase, upperCase, numberChar, specialChar); // debugging 

//global scope those arrays will be reused inside of functions

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
const passLength = prompt("How many characters between 8 and 30 would you like your password to contain?");
if (passLength >= 8 && passLength <= 128 ) {
  alert("Your password will contain the selected amount of characters.");
} else {
  alert("Insufficient Password");
  generatePassword ();
}

const genLowerCase = confirm("Do you want to include lowercase letters?");
const genUpperCase = confirm("Do you want to include uppercase letters?");
const genNumberChar = confirm("Do you want to include numbers?");
const genSpecChar = confirm("Do you want to include special characters?");
let finalPass = "";
let selection = []; // use of an open array https://stackoverflow.com/questions/12097851/difference-between-var-and-var

console.log(genLowerCase, genUpperCase, genNumberChar, genSpecChar);

let charSelect = [genLowerCase, genUpperCase, genNumberChar, genSpecChar];
let validSelect = charSelect.filter(charSelect => charSelect == true); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// arrow function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/*function checkChar(charSelect) {
  return charSelect == true;
}

let validSelect = charSelect.filter(checkChar); */    // ***** longhanded for of the arrow function for charSet.filter called above

if (genLowerCase) {
  console.log("Include Lowercase Characters");
  selection.push(lowerCase);
} else {
  console.log("Lowercase Characters Not Included"); // method .push to compile selected arrays to added into new array https://www.w3schools.com/jsref/jsref_push.asp
}

if (genUpperCase) {
  console.log("Include Uppercase Characters");
  selection.push(upperCase);
} else {
  console.log("Uppercase Characters Not Included");
}

if (genNumberChar) {
  console.log("Include Number Characters");
  selection.push(numberChar);
} else {
  console.log("Number Characters Not Included");
}

if (genSpecChar) {
  console.log("Include Special Characters");
  selection.push(specialChar);
} else {
  console.log("Special Characters Not Included");
}

console.log(validSelect.length);

if (validSelect.length == 0) {          // 0 is not an index but it is looking for the number of elements in the array
  alert("No Valid Options Selected");
  generatePassword();
}

console.log(charSelect); // debugging

console.log(selection); //debugging property to make sure open array contains selected array data

selection.flat(); //tried using .concat but did not compress all values in new array " https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat "

console.log(selection.flat());

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

for (let i = 0; i < passLength; i++) {
  let randomize = selection[(Math.random() * selection.length) | 0]; // taking the array length of the selections and randomizing it using the terminating condition in the for statement 
  let ranChar = randomize[(Math.random() * randomize.length) | 0];     // then adding a random character to password to create the final generated password using | 0 to generate a whole integer
  finalPass += ranChar; // adding variables using +=
}

console.log(finalPass); //debugging

let passFun = document.getElementById("password"); // just goofin around linking HTML and CSS through a .JS filetype!
passFun.style.color = "red";

alert("Your new password is being generated!\n\nClick OK to continue."); // https://stackoverflow.com/questions/1841452/new-line-in-javascript-alert-box

return document.getElementById("password").value = finalPass; 

// https://www.w3schools.com/jsref/dom_obj_document.asp list of document .methods for html/js
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// Mike Dane youtube accessing HTML elements in Javascript video
}

// Add event listener to generate button
// Mike Dane youtube eventlistner video
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp

generateBtn.addEventListener("click", writePassword);


