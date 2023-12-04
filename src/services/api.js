// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Change this if your backend runs on a different port

export const getRestaurants = async () => {
  const response = await axios.get(`${BASE_URL}/restaurants`);
  return response.data;
};
