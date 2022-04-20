const cities = ['Mexico city', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara', 'New York'];

const randomCity = () => {
  const city = cities[Math.floor(Math.random() * cities.length)]
  return city;
};

module.exports = randomCity;