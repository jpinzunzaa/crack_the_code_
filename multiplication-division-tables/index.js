exports.multiplication_division_tables = (n, k) => {
  if (!Number.isInteger(n) || !Number.isInteger(k) || n <= 0 || k <= 0) {
    throw new Error('Los valores de n y k deben ser enteros positivos');
  }

  const multiplication_table = [];
  const division_table = [];

  for (let i = 1; i <= k; i++) {
    multiplication_table.push(`${n} * ${i} = ${n * i}`);
    division_table.push(`${n * i} / ${n} = ${i}`);
  }

  return {
    multiplication_table,
    division_table
  }
}

exports.print_tables = (n, k) => {
  const { multiplication_table, division_table } = multiplication_division_tables(n, k);
  
  console.log('Tabla de multiplicar:');
  multiplication_table.forEach((line) => console.log(line));

  console.log('\nTabla de división:');
  division_table.reverse().forEach((line) => console.log(line));
}