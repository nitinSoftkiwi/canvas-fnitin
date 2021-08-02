const axios = require("axios");

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000/api';
}

axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default () => {
  const token =  JSON.parse(localStorage.getItem('token'));
  axios.defaults.headers.common['x-auth-token'] = token;
  return axios;
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href='/';
  }

  return Promise.reject(error);
});
