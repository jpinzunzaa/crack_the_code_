exports.find_min_max = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('El conjunto debe contener al menos un número');
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return {
    min,
    max
  }
}