exports.fibonacci_series = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('El número debe ser un entero positivo');
  }

  const series = [0, 1];
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    const next_value = series[i - 1] + series[i - 2];
    series.push(next_value);
    sum += next_value;
  }

  return {
    series: series.slice(0, n + 1),
    sum
  }
}