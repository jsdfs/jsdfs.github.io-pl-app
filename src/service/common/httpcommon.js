import axios from 'axios';
import { serverUrl } from '../../config/config.js';

export const initAxiosConfig = (module) => {
  let url = '';

  if (module === "admin") {
    url = serverUrl.admin;
  }
  else if (module === "nb") {
    //url = "http://localhost:1235";
    url = serverUrl.nb;
  }
  else if (module === "cs") {
    url = serverUrl.cs;
  }
  else if (module === "ps") {
    //url = "http://localhost:1236";
    url = serverUrl.ps;
  }
  else if (module === "ac") {
    url = serverUrl.ac;
  }
  
  return url;
}

export const http = (url) => { 
  return axios.create({
    baseURL: url,
    timeout: 100000,
    headers: {
      'Content-type': 'application/json'
    }
  })
}
