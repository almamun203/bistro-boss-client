/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-full bg-white absolute mt-16"></progress>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;