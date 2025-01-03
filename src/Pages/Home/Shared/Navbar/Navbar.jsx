import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/Salad">Order Now</Link>
      </li>
     
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-25 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100  rounded-box z-[1] text-black mt-3 w-36 md:w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" text-xl text-white">
            Bistro Boss <p className="text-sm">Restaurant</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
        <Link to='/control/cart'>
              <button className="btn btn-sm btn-outline mr-2 text-white">
                <GrCart />
                  <div className="badge badge-info  ">+{cart.length}</div>
                </button>
              </Link>
          {user ? (
            <>
           
              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-outline text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              

              <Link
                to="/login"
                className="btn btn-sm btn-outline text-white mr-2"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-sm btn-outline text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
