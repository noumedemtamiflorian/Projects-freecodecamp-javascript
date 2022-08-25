#  Freecodecamp projects

Final projects made at the end of the JavaScript Algorithms and Data Structures Certification training! by freecodecamp

### Palindrome Checker project

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

The palindrome function returns true if the given string is a palindrome. Otherwise, returns false

#### palindrome function

- Parameters 
	- `str`: string to check.
- Return
	- returns a boolean indicating whether the string sent is a palindrome or not.
  

```json
result = {

		"eye":  `palindrome("eye")`,

		"race car":  `palindrome("race car")`,

		"_eye":  `palindrome("_eye")`,

		"not a palindrome":  `palindrome("not a palindrome")`,

		"A man, a plan, a canal. Panama":  `palindrome("A man, a plan, a canal. Panama")`,

		"never odd or even":  `palindrome("never odd or even")`,

		"nope":  `palindrome("nope")`,

		"almostomla":  `palindrome("almostomla")`,

		"My age is 0, 0 si ega ym.":  `palindrome("My age is 0, 0 si ega ym.")`,

		"1 eye for of 1 eye.":  `palindrome("1 eye for of 1 eye.")`,

		"0_0 (: /-\ :) 0-0":  `palindrome("0_0(: / -\ :) 0 - 0")`,

		"five|\_/|four":  `palindrome("five|\_/|four")`
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
```
