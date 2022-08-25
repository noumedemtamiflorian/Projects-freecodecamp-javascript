function palindrome(str) {

    let newStr = str.split('').map(elt => {
        if (/\W|\s|_/.test(elt)) {
            return ''
        }
        return elt.toLowerCase()
    }).join('')

    var firstCharacter = function (str) {
        return str.slice(0, 1);
    };

    var lastCharacter = function (str) {
        return str.slice(-1);
    };

    var middleCharacters = function (str) {
        return str.slice(1, -1);
    };


    const isPalindrome = (str) => {
        if (str.length < 2) {
            return true;
        }

        if (firstCharacter(str) == lastCharacter(str)) {
            return isPalindrome(middleCharacters(str));
        }

        return false;
    };
    return isPalindrome(newStr)
}

const result = {
    "eye": palindrome("eye"),
    "race car": palindrome("race car"),
    "_eye": palindrome("_eye"),
    "not a palindrome": palindrome("not a palindrome"),
    "A man, a plan, a canal. Panama": palindrome("A man, a plan, a canal. Panama"),
    "never odd or even": palindrome("never odd or even"),
    "nope": palindrome("nope"),
    "almostomla": palindrome("almostomla"),
    "My age is 0, 0 si ega ym.": palindrome("My age is 0, 0 si ega ym."),
    "1 eye for of 1 eye.": palindrome("1 eye for of 1 eye."),
    "0_0 (: /-\ :) 0-0": palindrome("0_0(: / -\ :) 0 - 0"),
    "five|\_/|four": palindrome("five|\_/|four")
}

console.log(result);

// {
//     "eye": true,
//     "race car": true,
//     "_eye": true,
//     "not a palindrome": false,
//     "A man, a plan, a canal. Panama": true,
//     "never odd or even": true,
//     "nope": false,
//     "almostomla": false,
//     "My age is 0, 0 si ega ym.": true,
//     "1 eye for of 1 eye.": false,
//     "0_0 (: /- :) 0-0": true,
//     "five|_/|four": false
// }