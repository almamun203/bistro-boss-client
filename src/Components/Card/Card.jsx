import { PropTypes } from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";


const Card = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure =  useAxios();
  const [,refetch]=useCart();
  const { name, image, recipe, price, _id } = item;
  const handleAddToCart = () => {
    if (user && user.email) {
      
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
           toast.success(`${name} added to cart`)
           refetch()
        }
      })
      
    }else{
      Swal.fire({
        title: "You are not logged in.",
        text: "Please login to add to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state: {from:location}})
        }
      });
    }
  };
  return (
    <div className="card bg-base-200 hover:scale-105 transition-transform  rounded-none ">
      <figure>
        <img src={image} className="h-56 md:h-64 " />
      </figure>
      <p className="bg-slate-900 px-2 rounded-lg text-white absolute right-24 md:right-5 top-2">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={ handleAddToCart}
            className="btn   border-0 border-b-4 border-slate-800  "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.obj,
};

export default Card;
