import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_LINK
})
const useAxios = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    // Request interceptor to add authorization header for every secure call to the api 
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        // console.log('Request stopped for checking',token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },(error)=>{
        return Promise.reject(error);
    })

    // intercepts 401 and 403
    axiosSecure.interceptors.response.use((res)=>{
      return res;
    },async(error)=>{
        const status = error.response.status;
        console.log('Status Error:',status);
        if(status === 401  || status === 403){
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
    })
   return axiosSecure;
};

export default useAxios;