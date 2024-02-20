// src/services/apiService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:9999';
const OPENED_TICKETS_ENDPOINT = '/getOpenedTickets';

const apiService = {
  fetchData: () => {
    return axios.get(`${BASE_URL}${OPENED_TICKETS_ENDPOINT}`)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  },
};

export default apiService;
