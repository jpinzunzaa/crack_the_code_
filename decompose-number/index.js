exports.decompose_number = (num) => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("El número debe ser un entero positivo.");
  }

  const digits = num.toString().split('').reverse();
  const result = [];
  
  digits.forEach((digit, index) => {
    if (index === 0) {
      result.push(`${digit} unidades`);
    } else if (index === 1) {
      result.push(`${digit} decenas`);
    } else if (index === 2) {
      result.push(`${digit} centenas`);
    } else {
      result.push(`${digit} ${Math.pow(10, index)}enas`);
    }
  });

  return result.reverse().join(', ');
}