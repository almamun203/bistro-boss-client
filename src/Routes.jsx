import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Menu from "./Pages/Menu/Menu/Menu";
import Order from "./Pages/Order/Order/Order";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Control from "./Layout/Control";
import Cart from "./Pages/ControlPanel/Cart/Cart";
import PrivateRoute from './PrivateRoute';
import AllUsers from "./Pages/ControlPanel/AllUsers/AllUsers";
import AddItem from "./Pages/ControlPanel/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "./Pages/ControlPanel/ManageItem/ManageItem";








export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },
  {
   path:'control',
   element:<PrivateRoute><Control></Control></PrivateRoute>,
   children:[
    {
      path:'cart',
      element:<Cart></Cart>
    },
    // admin Routes
    {
      path:'allUsers',
      element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    },
    {
      path:'addItem',
      element:<AdminRoute><AddItem></AddItem></AdminRoute>
    },
    {
      path:'manageItem',
      element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
    }
   ]
  }
]);
