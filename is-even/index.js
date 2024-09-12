exports.is_even = (n) => {
  if (n % 2 === 0) {
    console.log(`Número par: ${n}`);
    return true;
  } else {
    console.log(`Número impar: ${n}`);
    return false;
  }
}