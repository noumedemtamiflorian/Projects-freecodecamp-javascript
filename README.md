Freecodecamp projects

Final projects made at the end of the JavaScript Algorithms and Data Structures Certification training! by freecodecamp

Palindrome Checker

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

The palindrome function returns true if the given string is a palindrome. Otherwise, returns false

palindrome function

Parameters

str: string to check.

Return

returns a boolean indicating whether the string sent is a palindrome or nots

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

{
    "eye": true,
    "race car": true,
    "_eye": true,
    "not a palindrome": false,
    "A man, a plan, a canal. Panama": true,
    "never odd or even": true,
    "nope": false,
    "almostomla": false,
    "My age is 0, 0 si ega ym.": true,
    "1 eye for of 1 eye.": false,
    "0_0 (: /- :) 0-0": true,
    "five|_/|four": false
}



Roman Numeral Converter

This project converts the given number to Roman numeral.

convertToRoman function

Parameters

num: number to convert.

Return

returns a Roman numeral string.

const result = {
    2: convertToRoman(2),
    3: convertToRoman(3),
    4: convertToRoman(4),
    5: convertToRoman(5),
    9: convertToRoman(9),
    12: convertToRoman(12),
    16: convertToRoman(16),
    29: convertToRoman(29),
    44: convertToRoman(44),
    45: convertToRoman(45),
    68: convertToRoman(68),
    83: convertToRoman(83),
    97: convertToRoman(97)
}

console.log(result);

{
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "9": "IX",
  "12": "XII",
  "16": "XVI",
  "29": "XXIX",
  "44": "XLIV",
  "45": "XLV",
  "68": "LXVIII",
  "83": "LXXXIII",
  "97": "XCVII"
}



Caesars Cipher

This project allows to code cesar with k=13.

One of the simplest and best-known ciphers is the Caesar cipher, also known as the shift cipher. In a shift cipher, the meaning of the letters is shifted by a certain amount.

A common modern use is the ROT13 cipher, where letter values ​​are shifted 13 places. So A ↔ N, B ↔ O and so on.

rot13 function

Parameters

str : character string to encrypt.

Return

returns a character string decrypt.

const result = {
    "SERR PBQR PNZC": rot13("SERR PBQR PNZC"),
    "SERR CVMMN!": rot13("SERR CVMMN!"),
    "SERR YBIR?": rot13("SERR YBIR?"),
    "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT": rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
}

console.log(result);

{
    "SERR PBQR PNZC": "FREE CODE CAMP",
    "SERR CVMMN!": "FREE PIZZA!",
    "SERR YBIR?": "FREE LOVE?",
    "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT": "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
}



Telephone Number Validator

This project allows you to check if a character string has the format of a good phone number.

telephoneCheck function

Return true if the passed string looks like a valid US phone number.

Parameters

str : Phone number character string.

Return

returns a boolean.

const result = {
    "555-555-5555": telephoneCheck("555-555-5555"),
    "1 555-555-5555": telephoneCheck("1 555-555-5555"),
    "1 (555) 555-5555": telephoneCheck("1 (555) 555-5555"),
    "5555555555": telephoneCheck("5555555555"),
    "555-555-5555": telephoneCheck("555-555-5555"),
    "(555)555-5555": telephoneCheck("(555)555-5555"),
    "1(555)555-5555": telephoneCheck("1(555)555-5555"),
    "1 555 555 5555": telephoneCheck("1 555 555 5555"),
    "1 456 789 4444": telephoneCheck("1 456 789 4444")
}

console.log(result);

{
    "555-555-5555": true,
    "1 555-555-5555": true,
    "1 (555) 555-5555": true,
    "5555555555": true,
    "(555)555-5555": true,
    "1(555)555-5555": true,
    "1 555 555 5555": true,
    "1 456 789 4444": true
}

Cash Register

This project allows you to check if a character string has the format of a good phone number.

telephoneCheck function

Return true if the passed string looks like a valid US phone number.

Parameters

str : Phone number character string.

Return

returns a boolean.


console.log(
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);


{ "status": 'OPEN', "change": [['QUARTER', 0.5]] } 
{ status: 'OPEN', "change": [['QUARTER', 0.5]] } 
{   "status": 'OPEN',
        "change": [
            ['TWENTY', 60],
            ['TEN', 20],
            ['FIVE', 15],
            ['ONE', 1],
            ['QUARTER', 0.5],
            ['DIME', 0.2],
            ['PENNY', 0.04]
        ]
} 
{ "status": 'INSUFFICIENT_FUNDS', "change": [] } 
{ "status": 'INSUFFICIENT_FUNDS', "change": [] } 
{
    "status": 'CLOSED',
        "change": [
            ['PENNY', 0.5],
            ['NICKEL', 0],
            ['DIME', 0],
            ['QUARTER', 0],
            ['ONE', 0],
            ['FIVE', 0],
            ['TEN', 0],
            ['TWENTY', 0],
            ['ONE HUNDRED', 0]
        ]
}

