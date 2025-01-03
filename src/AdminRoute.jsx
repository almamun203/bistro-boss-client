/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./Hooks/useAdmin";
import useAuth from "./Hooks/useAuth";





const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin , isAdminLoading] = useAdmin();
    const location = useLocation();
    
   if(loading || isAdminLoading){
           return <progress className="progress w-full bg-white absolute mt-16"></progress>
       }
       if(user && isAdmin){
           return children;
       }
       return (
           <Navigate to='/' state={{from: location}} replace></Navigate>)
};

export default AdminRoute;