exports.calculate_correlation_coefficient = (x, y) => {
  if (x.length !== y.length) {
    throw new Error('Los conjuntos de datos deben tener la misma longitud');
  }
  
  const n = x.length;

  const sum_x = x.reduce((sum, xi) => sum + xi, 0);
  const sum_y = y.reduce((sum, yi) => sum + yi, 0);

  const sum_xy = x.reduce((sum, xi, i) => sum + xi * y[i], 0);

  const sum_x_square = x.reduce((sum, xi) => sum + xi * xi, 0);
  const sum_y_square = y.reduce((sum, yi) => sum + yi * yi, 0);

  const numerator = (n * sum_xy) - (sum_x * sum_y);
  const denominator = Math.sqrt((n * sum_x_square - Math.pow(sum_x, 2)) * (n * sum_y_square - Math.pow(sum_y, 2)));

  if (denominator === 0) {
    throw new Error('La división por cero es indefinida');
  }

  return numerator / denominator;
}