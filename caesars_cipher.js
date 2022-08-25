function rot13(str) {

    const aphabet = ['A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const transform = (chat) => {
        const indice = aphabet.indexOf(chat)
        return indice < 13 ? indice + 13 : indice % 13
    }

    return str.split('').map(elt => {
        return aphabet.indexOf(elt) === -1 ? elt : aphabet[transform(elt)];
    }).join('')
}



console.log(
    "\n", "SERR PBQR PNZC : => ", rot13("SERR PBQR PNZC"),
    "\n",
    "SERR CVMMN! : => ", rot13("SERR CVMMN!"), "\n",
    "SERR YBIR? : => ", rot13("SERR YBIR?"), "\n",
    "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. : => ", rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
    "\n"
);