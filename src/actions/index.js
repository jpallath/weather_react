const API_KEY = 'b0f9ae3f6d8b3358c60d9c250e9306a9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
