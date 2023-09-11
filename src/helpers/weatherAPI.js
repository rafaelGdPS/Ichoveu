// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;

// const captureError = (data) => {
//   if (data.length === 0) {
//     throw new Error('Nenhuma cidade encontrada');
//   }
// };

export const searchCities = async (term) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
    const data = await response.json();

    return data;
  } catch (error) {
    window.alert(error.message);
  }
};
export const getWeatherByCity = async (cityURL) => {
  const eachCity = cityURL.map(async (element) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${element}`);
    const data = await response.json();
    const { current } = data;
    const { location } = data;
    return {
      name: location.name,
      country: location.country,
      temp: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon,
    };
  });
  // console.log(await Promise.all(eachCity));

  return eachCity;
};
// const test = ['rio-de-janeiro-rio-de-janeiro-brazil', 'rio-branco-acre-brazil'];
// console.log(searchCities('Rio'));
// console.log(getWeatherByCity(test));
