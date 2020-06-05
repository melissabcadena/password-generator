// Assignment code here

//Create Function that prompts user for password criteria

var generatePassword = function () {
  //prompt how many characters the password needs to be, anywhere between 8 and 128
  promptLength();

  passwordRequirements();



  //password is generated and saved to passwordText.value 
}

var promptLength = function () {
  var characterLength = window.prompt ("How many characters would you like your password to be? Please choose a value between 8 and 128.")

  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please choose a value between 8 and 128.");
    promptLength();
  }
  else {
    return characterLength;
  }
}

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
  

  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);