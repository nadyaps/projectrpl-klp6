import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
})

axiosClient.interceptors.request.use((config)=>{
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    "Content-Type": "application/json",
  }
  return config
});

axiosClient.interceptors.response.use(response=>{
  console.log(response)
  return response;
}, error=>{
  if(error.response && error.response.status === 401){
    router.navigate('/login')
    return error;
}
  throw error;
})

export default axiosClient;