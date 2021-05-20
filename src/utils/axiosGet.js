import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/users';

const axiosGet = (endpoint) => {
  if (typeof endpoint !== 'undefined') {
    return axios.get(
      `/${endpoint}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  } else {
    return axios.get();
  }
};

export default axiosGet;
