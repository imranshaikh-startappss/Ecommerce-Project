import axios from "axios";


const instance = axios.create({
    baseURL: 'https://649177ad2f2c7ee6c2c844a9.mockapi.io',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });
  export default instance;