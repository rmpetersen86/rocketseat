import axios from 'axios'

export const api = axios.create({
  /* baseURL: 'http://10.200.15.79:3333', */
  baseURL: 'http://192.168.100.140:3333',
})
