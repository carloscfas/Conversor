/* Código do Primeiro Conversor */
function converter() {
    const romanInput = document.getElementById("roman-input").value.toUpperCase();
    const result = document.getElementById("result");
    if (romanInput == 3999) {
        alert('Cuidado quase chegando no limite!!')
    }
    else if (romanInput > 3999) {
        alert('Chegou no Limite!!')
    }
  
    const romanNumerals = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };
  
    let arabicNumber = 0;
  
    for (let i = 0; i < romanInput.length; i++) {
      const currentNumeral = romanNumerals[romanInput[i]];
      const nextNumeral = romanNumerals[romanInput[i + 1]];
  
      if (nextNumeral && currentNumeral < nextNumeral) {
        arabicNumber += nextNumeral - currentNumeral;
        i++;
      } else {
        arabicNumber += currentNumeral;
      }
    }
  
    result.innerHTML = `O número arábico correspondente é: ${arabicNumber}`;
  }


/* Código do Segundo Conversor */

function convertArabicToRoman() {
    const arabicNumber = document.getElementById('arabic-number').value;
    const romanNumber = convertToRoman(arabicNumber);
    document.getElementById('result').innerText = romanNumber;
    if (arabicNumber == 3999) {
        alert('Cuidado quase chegando no limite!!')
    }
    else if (arabicNumber > 3999) {
        alert('Chegou no Limite!!')
    }
}
  
function convertToRoman(num) {
    const romanNumeralMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let romanNumber = '';
    for (let key in romanNumeralMap) {
      while (num >= romanNumeralMap[key]) {
        romanNumber += key;
        num -= romanNumeralMap[key];
      }
    }
    return romanNumber;
  }
