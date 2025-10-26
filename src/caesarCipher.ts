export function caesarCipher(str: string, factor: number) {
  if (typeof factor !== 'number') {
    throw new Error('Factor must be a number');
  }
  let result = '';
  for (const char of str) {
    let charCodeNew: number;
    let newChar: string;
    if (isUppercase(char)) {
      charCodeNew = rotate(char.charCodeAt(0) - 65, factor);
      newChar = String.fromCharCode(charCodeNew + 65);
    }
    else if (isLowercase(char)) {
      const charCodeNew = rotate(char.charCodeAt(0) - 97, factor);
      newChar = String.fromCharCode(charCodeNew + 97);
    }
    else {
      newChar = char;
    }
    result += newChar;
  }
  console.log(result);
  return result;
}

function rotate(char: number, factor: number): number {
  return (char + factor) % 26;
}

function isUppercase(char: string) {
  return isAlpha(char) && char === char.toUpperCase();
}

function isLowercase(char: string) {
  return isAlpha(char) && char === char.toLowerCase();
}

function isPunct(char: string) {
  return /\p{P}/u.test(char);
}

function isAlpha(char: string) {
  return /[A-Za-z]/.test(char);
}

caesarCipher('Bad!', 14); // Khoor, Zruog!
