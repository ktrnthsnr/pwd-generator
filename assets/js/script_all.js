//generate function, with input parameter where length is set to 14

 /*
var lengthRequested = function(length = 8) {
    
    var lengthRequested = window.prompt("What is the length of your password from 8-128?");
    //length = lengthRequested;

    //length = lengthRequested;
    if (lengthRequested < 8 || lengthRequested > 128) {
        prompt("Length cannot be less than 8 or greater than 128. Length must be between 8-128.");
        console.log(lengthRequested);    
        lengthRequested();
    }
    else if (lengthRequested == " ") {
        prompt("Length cannot be blank. Length must be between 8-128.");
        console.log(lengthRequested);
        lengthRequested();
    }
    else {
        confirm("You have selected a password length of " + lengthRequested + " .");
        console.log(lengthRequested);
        return lengthRequested;
    }
}
*/
/*
var lengthRequested = function() {
    
    var lengthRequested = window.prompt("What is the length of your password from 8-128?");
    while (lengthRequested = "" || lengthRequested < 8 || lengthRequested > 128 ) {
        prompt("Length cannot be less than 8 or greater than 128. Length must be between 8-128.");
    }
    console.log(lengthRequested);
    return lengthRequested;

};
*/
/*
function lengthRequested() { 
    var a = window.prompt("What is the length of your password from 8-128?");
    if ( a != " " || a < 8 || a > 128 ) {
        confirm("You have selected a password length of " + a + " .");
        console.log(a);
        return a;
    } else { 
        return "Not correct length." }
}
*/
/*
var lengthRequested = function() {
    var lengthInput = window.prompt("What is the length of your password from 8-128?"); 
  
     while (lengthInput === "" || (lengthInput < 8 && lengthInput > 128) {
        window.prompt("Try again. Please enter a number between 8-128.");
    }
        confirm("You entered " + lengthInput + ".");
        return lengthInput;
};
*/

var lengthRequested = function() {
    //debugger;
    //var length = window.prompt("What is the length of your password from 8-128?"); 
    /*
    if (length === " " || length < 8 || length > 128) {
        length = window.prompt("Try again. What is the length of your password from 8-128?");
    }
    else if (length > 8 && length < 128) {
        console.log("You entered " + length + ".");
        return length;
    }
    */
    var length;
    while (true){
        length = parseInt(window.prompt("What is the length of your password from 8-128?"));
        console.log(length);
        //debugger;
        if ( length >= 8 && length <= 128 ) {
            return length;
        }

    } 

    /*
    while (length === " " || length < 8 || length > 128) {
        length = window.prompt("Try again. What is the length of your password from 8-128?");
    }
    console.log("You entered " + length + ".");
    return length;
    */
    
};

function generate(){
/*
var length = 0;
var lengthRequested = window.prompt("What is the length of your password from 8-128?");

if ( lengthRequested != " " || lengthRequested < 8 || lengthRequested > 128 ) {
    window.confirm("You have selected a password length of " + lengthRequested + " .");
    console.log(lengthRequested);
} else {
    window.confirm("Length cannot be blank, less than 8, or greater than 128. Length must be between 8-128. Click Generate Password to start again.")
    console.log(lengthRequested);
    return "Length is not correct."
}
*/
    //debugger;

//var length = window.prompt("What is the length of your password from 8-128?"); 
var length = lengthRequested();

//declare variables
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

//ask which characters you'd like to include in the final password
var uppercase = window.prompt("Do you want uppercase letters? Y or N");
    if (uppercase === "Y" || uppercase === "y" || uppercase == "") {
        var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } 
    //else if (uppercase === "Y" || uppercase === "y" || uppercase == ""){
      //  uppercase = "";
    //}
    else {
        uppercase = "";
    }
    console.log(uppercase);
    
var lowercase = window.prompt("Do you want lowercase letters? Y or N");
    if (lowercase === "Y" || lowercase === "y" || lowercase == "") {
        var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    } else {
        lowercase = "";
    }
    console.log(lowercase);
var numbers = window.prompt("Do you want to include numbers? Y or N");
    if (numbers === "Y" || numbers === "y" || numbers == "") {
        var numbers = '0123456789';
    } else {
        numbers = "";
    }
    console.log(numbers);
var symbols = window.prompt("Do you want to include symbols? Y or N");  
    if (symbols === "Y" || symbols === "y" || symbols == "") {
        var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    } else {
        symbols = "";
    }
    console.log(symbols);

//add all variables together
var allChoices = uppercase + lowercase + numbers + symbols;
//set password blank to start
var password = '';
//for loop to add values till length stops the loop
for (var i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * allChoices.length);
    password += allChoices.substring(character, character + 1);
}
//return the value of all values from the for loop
return password;
};

//reference: https://randompasswordgenerator.org/javascript-password-generator.html 
