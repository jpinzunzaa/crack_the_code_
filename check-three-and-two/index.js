const check_three_and_two = (arr) => {
  const counts = {};

  for (let char of arr) {
    counts[char] = (counts[char] || 0) + 1;
  }

  const values = Object.values(counts);
  return values.includes(3) && values.includes(2);
}