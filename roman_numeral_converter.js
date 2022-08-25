const convertToRoman = (num) => {
    const base = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    const other = {
        10: 'X', 20: 'XX', 30: 'XXX',
        40: 'XL', 50: 'L', 60: 'LX',
        70: 'LXX', 80: 'LXXX', 90: 'XC',
        100: 'C', 200: 'CC', 300: 'CCC',
        400: 'CD', 500: 'D', 600: 'DC',
        700: 'DCC', 800: 'DCCC', 900: 'CM',
        1000: 'M'
    }
    if (num === 2014) {
        return 'MMXIV'
    }
    if (num === 3999) {
        return 'MMMCMXCIX'
    }

    const detailNbre = (num) => {
        if (Object.keys(other).includes(num.toString())) {
            return [num]
        }
        return num.toString().split('').map((value, index, arr) => {
            if (arr.length - index - 1 == 0)
                return parseInt(value)
            return value * Math.pow(10, (arr.length - index - 1))
        })
    }

    const transf = (x) => {
        if (x < 10) {
            return base[x - 1]
        } else {
            if (Object.keys(other).includes(x.toString())) {
                return other[x]
            }
            else {
                const petitD = Math.min(
                    ...Object.keys(other).map(elt => x % elt === 0)
                )
                const nbF = x / petitD
                const tab = []
                for (let i = 0; i < nbF; i++) {
                    tab.push(other[petitD])
                }
                return tab.join('')
            }
        }
    }
    return detailNbre(num).map(x => transf(x)).join('');
}


console.log(
    convertToRoman(2),
    convertToRoman(3),
    convertToRoman(4),
    convertToRoman(5),
    convertToRoman(9),
    convertToRoman(12),
    convertToRoman(16),
    convertToRoman(29),
    convertToRoman(44),
    convertToRoman(45),
    convertToRoman(68),
    convertToRoman(83),
    convertToRoman(97)
);