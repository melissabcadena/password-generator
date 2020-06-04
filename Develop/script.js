// Assignment code here

//Create Function that prompts user for password criteria

var generatePassword() 
  //prompt how many characters the password needs to be, anywhere between 8 and 128

  // prompt what character types need to be included - options should be lowercase, uppercase, numeric, and/or special characters, at least one needs to be selected

  //password is generated and saved to passwordText.value 

  

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
