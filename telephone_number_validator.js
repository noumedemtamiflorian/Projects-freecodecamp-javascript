function telephoneCheck(str) {

    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }

}

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

// {
//     "555-555-5555": true,
//     "1 555-555-5555": true,
//     "1 (555) 555-5555": true,
//     "5555555555": true,
//     "(555)555-5555": true,
//     "1(555)555-5555": true,
//     "1 555 555 5555": true,
//     "1 456 789 4444": true
// }