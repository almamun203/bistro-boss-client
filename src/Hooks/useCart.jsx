import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";



const useCart = () => {

const {user} = useAuth();
const axiosSecure = useAxios();
//    TanStack Query
 const {refetch,data : cart = []} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn:async ()=>{
     const res = await axiosSecure.get(`/carts?email=${user.email}`)
     return res.data;
    }
 })
 return [cart, refetch];
};

export default useCart;