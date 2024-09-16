exports.convert_time = (h, m) => {
  if (h < 0 || h > 23 || m < 0 || m > 59) {
    throw new Error('Hora o minutos inválidos.');
  }

  const period = h >= 12 ? 'PM' : 'AM';
  const hours_12 = h % 12 === 0 ? 12 : h % 12;
  const minutes = m < 10 ? `0${m}` : m;
  
  return `${hours_12}:${minutes} ${period}`;
}