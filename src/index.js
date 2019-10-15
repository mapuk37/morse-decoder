const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let chunks = [];
    for (let i = 0; i < expr.length; i += 10) {
        chunks.push(expr.substring(i, i + 10));
    };
    let morseChunks = [];
    for (let i = 0; i < chunks.length; i++) {
        if (chunks[i] === '**********') {
            morseChunks.push(' ');
            continue;
        };
        let temp = '';
        let morseSymbol = '';
        for (let j = 0; j < chunks[i].length; j+=2) {
            temp = chunks[i].substring(j, j + 2);
            if (temp === '10') {
                morseSymbol += '.';
            } else if (temp === '11')   {
                morseSymbol += '-';
            }
        }
        morseChunks.push(morseSymbol);
    }
    let decoded = '';
    for (let i = 0; i < morseChunks.length; i++) {
        if (morseChunks[i]===' ') {
            decoded += ' ';
            continue;
        }
        decoded += MORSE_TABLE[morseChunks[i]];
    }
    return decoded;
};

module.exports = {
    decode
}