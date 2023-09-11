// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;
console.log(TOKEN);

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  console.log(data);
  if (data.length === 0) {
    return window.alert('Nenhuma cidade encontrada');
  }
  return data;
};
export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
// console.log(searchCities('Rio'));
