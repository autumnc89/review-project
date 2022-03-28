var password=document.getElementById("password");

 function addNewPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pwLength = 12;
    let password = "";
 for (let i = 0; i <= pwLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
      document.getElementById("password").value = password;
 }

// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a 
//random password using a for loop inside of a function called "addNewPassword" either 
//saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
