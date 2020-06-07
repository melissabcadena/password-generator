// Assignment code here

//Create Function that prompts user for password criteria
var password = "";
var desiredCharacters = "";
var generatePassword = function () {
  //prompt how many characters the password needs to be, anywhere between 8 and 128
  var characterLength = promptLength();
  
  //prompt which type of character they'd like in their function
  passwordRequirements();

  // add at least one of each character the user desires to the password
  // && add each string of desired character type to new string desiredCharacters
  if (lowerCase) {
    desiredCharacters += lowerString;
    var addCharacter = lowerString[Math.floor(Math.random() * lowerString.length)];
    password += addCharacter;
  }

  if (upperCase)  {
    desiredCharacters += upperString
    var addCharacter = upperString[Math.floor(Math.random() * upperString.length)];
    password += addCharacter;
  }

  if (specialCharacters) {
    desiredCharacters += specialString;
    var addCharacter = specialString[Math.floor(Math.random() * specialString.length)];
    password += addCharacter;
  }

  if (numbers) {
    desiredCharacters += numberString;
    var addCharacter = numberString[Math.floor(Math.random() * numberString.length)];
    password += addCharacter;
  }

  desiredCharacters.toString;
  console.log(desiredCharacters);

    // loop to add additional characters until password is the length desired
  while (characterLength > password.length) {
    var addCharacter = desiredCharacters[Math.floor(Math.random() * desiredCharacters.length)];
    password += addCharacter;
  }

  // log unshuffled password
  console.log(password);

  // final shuffle of the password string to ensure randomness
  var shufflePassword = password.split(''),
    n = shufflePassword.length;

  for (var i=n-1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = shufflePassword[i];
    shufflePassword[i] = shufflePassword[j];
    shufflePassword[j] = tmp;
  }
  return shufflePassword.join('');
}

// ask user how many characters their password should be
var promptLength = function () {
  var characterLength = window.prompt ("How many characters would you like your password to be? Please choose a value between 8 and 128.")

  // validate they are choosing a correct amt of characters, loop until they do
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
  lowerCase = window.confirm("Do you want to include lower case characters in your password?");

  // prompt do you want to inclue upper case characters
  upperCase = window.confirm("Do you want to include upper case characters?");

  // prompt - special characters
  specialCharacters = window.confirm("Do you want to include special characters?");

  // prompt - numbers
  numbers = window.confirm("Do you want to include numbers?");

  // verify that at least one of those prompts was answered w/ a yes, loop until they do 

  if (lowerCase === false && upperCase === false && specialCharacters === false && numbers === false) {
    window.alert("You need to choose at least one required character for your password. Try again!");
    passwordRequirements();
  }
  else {
    return lowerCase, upperCase, specialCharacters, numbers;
  }
}

// strings containing each type of character user could include
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialString = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/'
var numberString = "1234567890"


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