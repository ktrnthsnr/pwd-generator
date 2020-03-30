function generate( length = 12 ){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var allChoices = uppercase + lowercase + numbers + symbols;

    var password = '';

    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * allChoices.length);
        password += allChoices.substring(character, character + 1);
    }

    return password;
}

//reference: https://randompasswordgenerator.org/javascript-password-generator.html 