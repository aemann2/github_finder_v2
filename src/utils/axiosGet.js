import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

const axiosGet = (endpoint) => {
  return axios.get(endpoint);
};

export default axiosGet;
