// import axios from 'axios';
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://192.168.0.104:8080',
    headers: { 'Authorization': localStorage.getItem('token') }
});

module.exports = instance;