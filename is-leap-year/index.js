exports.is_leap_year = (year) => {
  if (typeof year !== 'number' || year < 0) {
    throw new Error("Ingrese un año válido como número positivo.");
  }

  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }

  return false;
}