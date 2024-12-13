import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./../Pages/Home/Shared/Navbar/Navbar";
import Footer from "./../Pages/Home/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeadFoot = location.pathname.includes("login" ) || location.pathname.includes("register" )
  
  return (
    <div>
      
      {noHeadFoot || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeadFoot || <Footer></Footer>}
     
    </div>
  );
};

export default Main;
