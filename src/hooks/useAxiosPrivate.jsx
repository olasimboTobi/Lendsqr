import axios from "axios"

const axiosPrivate = axios.create({
    baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
    method: 'GET',
   
  })

  export default axiosPrivate;