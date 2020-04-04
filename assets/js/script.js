//generate function, with input parameter where length is set to 14

var lengthRequested = function() {
        var length;
        while (true){
            length = parseInt(window.prompt("What is the length of your password from 8-128?"));
            console.log(length);
            //debugger;
            if ( length >= 8 && length <= 128 ) {
                return length;
            }
        }       
};

function generate(){
    
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
            //reference: https://randompasswordgenerator.org/javascript-password-generator.html 
    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * allChoices.length);
        password += allChoices.substring(character, character + 1);
    }
    //return the value of all values from the for loop
    return password;
};


