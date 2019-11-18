import axios from 'axios';

function getWeath(zip) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=ffc212e5141cb55f187f132066eaf62f`

  return axios.get(url);
}

export default getWeath;
