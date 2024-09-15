exports.temperature_converter = (celsius) => {
  if (celsius < 0) {
    return null;
  }
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  return { fahrenheit, kelvin }
}