const axios = require("axios");

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000/api';
}