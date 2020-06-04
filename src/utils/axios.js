import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'https://test.com/',
  timeout: 15000
})
instance.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'multipart/form-data'
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
}, ({err}) => {
  console.log(err)
})
export default instance
