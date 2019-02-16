import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.co/api/',
});

export const searchVehicles = async (search) => {
  const json = await instance.get('vehicles/', {
    params: { search }
  });
  return json.data.results;
};
