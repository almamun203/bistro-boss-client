import { CgMenuGridO } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbCalendarCheck, TbMessageStar } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Control = () => {
    // Get isAdmin value from the database
    
    const [isAdmin] = useAdmin() ;
    
  return (
    <div className="flex cinzel">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <p className=" text-xl  font-extrabold pl-6 pt-4">
          Bistro Boss <p className="text-sm  ">Restaurant</p>
        </p>
        <ul className="menu">
         
         {isAdmin? 
         <>
          <li>
            <NavLink to="/control/adminHome">
              <FaHome></FaHome>
              Admin Home 
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/addItem">
            <IoIosRestaurant />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/manageItems">
            <CgMenuGridO />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/manageBookings">
            <MdOutlineLibraryBooks />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/allUsers">
              <FaUsers /> 
              All Users
            </NavLink>
          </li>
          
         </> 
         :
          <>
           <li>
            <NavLink to="/control/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/payment">
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/review">
              <TbMessageStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/control/bookings">
              <TbCalendarCheck />
              My Bookings
            </NavLink>
          </li>
          </>}

          {/* shared NavLinks */}
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaList/>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad">
              <FaShop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaMessage />
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Control;
