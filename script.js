

// function translate(string) {
//     if ([vowels].indexOf(string[0].toLowerCase()) != -1) {
//         let newString = string + 'way';
//         return newString;
//     }
// }

function translate(messyString) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let string = messyString.toLowerCase();
    if (vowels.includes(string.charAt(0))) {
        let newString = string + 'way';
        return newString;
    } else {
        let stringArray = string.split("");
        let consonants = [];
        let newString = "";
        while (!vowels.includes(stringArray[0])) {
            consonants.push(stringArray.shift());
            newString = stringArray.join("") + consonants.join("") + 'ay';            
        }
        return newString;
    }
}


console.log(translate('Freeze'));

module.exports = {
    translate
}



// function firstIsVowel(string) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(string[0].toLowerCase()) !== -1
// }

//create a variable for the first vowel?

// let stringArray = string.split("");
//         while (!vowels.includes(stringArray[0])) {
            
//             let consonants = stringArray.shift();
//             let newString = stringArray.join("") + consonants + 'ay';
//             return newString;
//         }


