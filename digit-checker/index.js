exports.digit_checker = (n, d) => {
  while (n > 0) {
    if (n % 10 === d) return true;
    n = Math.floor(n / 10);
  }
  return false;
}