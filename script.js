// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passOptions = {
  passLength: 0,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialChar: false
};


// Function to prompt user for password options
function getPasswordOptions() {


// let passLength = 0;
// let lowerCase = false;
// let upperCase = false;
// let numeric = false;
// let specialChar = false;

let passLengthAnswer = prompt("Please indicate the length of the password (between 10 and 64 characters)", 10);
let lowerCaseAnswer = prompt("Would you like for the password to include lower case characters? (Please answer yes or no)");
let upperCaseAnswer = prompt("Would you like for the password to include upper case characters? (Please answer yes or no)");
let numericAnswer = prompt("Would you like for the password to include numeric characters? (Please answer yes or no)");
let specialCharAnswer = prompt("Would you like for the password to include special characters? (Please answer yes or no)");

if (passLengthAnswer > 10 && passLengthAnswer < 64) {
  passOptions.passLength = passLengthAnswer;
} else {
  alert("Password length does not match our requirements");
}

if (lowerCaseAnswer.toLowerCase() == "yes"){
  passOptions.lowerCase = true;
} else if(lowerCaseAnswer.toLowerCase() == "no"){
  passOptions.lowerCase = false;
} else {
  alert("Password lower case option entered incorrectly");
}

if (upperCaseAnswer.toLowerCase() == "yes"){
  passOptions.upperCase = true;
} else if(upperCaseAnswer.toLowerCase() == "no"){
  passOptions.upperCase = false;
} else {
  alert("Password upper case option entered incorrectly");
}

if (numericAnswer.toLowerCase() == "yes"){
  passOptions.numeric = true;
} else if(numericAnswer.toLowerCase() == "no"){
  passOptions.numeric = false;
} else {
  alert("Password numeric case option entered incorrectly");
}

if (specialCharAnswer.toLowerCase() == "yes"){
  passOptions.specialChar = true;
} else if(specialCharAnswer.toLowerCase() == "no"){
  passOptions.specialChar = false;
} else {
  alert("Password special Character case option entered incorrectly");
}

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);