
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$&'()*+-.?:;<=>?@[\^_`{|}~";

function writePassword() {
    var password = ""
    var passwordChar = ""
    var passwordLengthUser = prompt ("How many character would you like your password to have? Password must have between 8-128 characters.")
    passwordLengthUser = parseInt (passwordLengthUser)

  if (passwordLengthUser < 8){
    alert ("Password must have more that 7 characters!");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert ("Pssword must have less than 128 characters!");
    return "";
  }

  var lowercaseCharactersChoice = confirm ("Include lowercase characters?");

  if (lowercaseCharactersChoice) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharactersChoice = confirm ("include uppercase characters?");

  if (uppercaseCharactersChoice) {
    passwordChar += uppercaseChar;
  }

  var numericalCharactersChoice = confirm ("would you like to add a few numbers?")

  if (numericalCharactersChoice) {
    passwordChar += numericalChar;
  }

  var specialCharactersChoice = confirm ("Should we add some special characters for more security?")

  if (specialCharactersChoice) {
    passwordChar += specialChar;
  }

  for (var i = 0; i < passwordLengthUser; i++) {
    password += passwordChar [Math.floor(Math.random() * passwordChar.length)]
  }

  function writePassword() {
    var password = generatePassword();
    var pwTextArea = document.getElementById ("password");
    pwTextArea.value = password;
    
  }
  document.getElementById ("password").value = password;
}

generateBtn.addEventListener("click", writePassword);