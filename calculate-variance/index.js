exports.calculate_variance= (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Debe proporcionar un conjunto de números');
  }

  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  const squared_diffs = numbers.map(num => Math.pow(num - mean, 2));
  const variance = squared_diffs.reduce((sum, diff) => sum + diff, 0) / numbers.length;

  return variance;
}