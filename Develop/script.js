// Assignment code here

//Create Function that prompts user for password criteria

var generatePassword = function () {
  //prompt how many characters the password needs to be, anywhere between 8 and 128
  var characterLength = promptLength();
  
  console.log(characterLength);
  passwordRequirements();
  console.log(desiredCharacters);
  var password = "";

  // for loop to create a string until it is the length of characterLength
  for (var i=0; i < characterLength; i++) {
  // if statement going through all 4 categories, if yes, add one character from the category to the password
    if (lowerCase) {
      var addCharacter = lower[randomNumber()];
      password += addCharacter;
      console.log(password);
    }
  }

    // nest if statements to add only characters they wanted inside their password
}

var promptLength = function () {
  var characterLength = window.prompt ("How many characters would you like your password to be? Please choose a value between 8 and 128.")

  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please choose a value between 8 and 128.");
    promptLength();
  }
  else {
    console.log(characterLength);
    return characterLength;
  }
}



var lowerCase;
var upperCase;
var specialCharacters;
var numbers;

var passwordRequirements = function () {
  // prompt do you want to include lower case characters
  var lowerCase = window.confirm("Do you want to include lower case characters in your password?");

  // prompt do you want to inclue upper case characters
  var upperCase = window.confirm("Do you want to include upper case characters?");

  // prompt - special characters
  var specialCharacters = window.confirm("Do you want to include special characters?");

  // prompt - numbers
  var numbers = window.confirm("Do you want to include numbers?");

  // verify that at least one of those prompts was answered w/ a yes

  if (lowerCase === false && upperCase === false && specialCharacters === false && numbers === false) {
    window.alert("You need to choose at least one required character for your password. Try again!");
    passwordRequirements();
  }
  else {
    return lowerCase, upperCase, specialCharacters, numbers;
  }
}

var randomNumber = function (arrayName) {
  Math.floor(Math.random() * arrayName.length)
};
  
var passwordArrays = {
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  special: ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|'],
  number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
}

  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
debugger;
generateBtn.addEventListener("click", writePassword);