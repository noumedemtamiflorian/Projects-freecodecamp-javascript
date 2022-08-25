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


console.log(
    palindrome("eye"),
    palindrome("race car")
);