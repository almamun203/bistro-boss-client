import { MdDelete } from "react-icons/md";
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxios();
  const handleDelete = (id ,name)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
         axiosSecure.delete(`/carts/${id}`)
         .then(res=>{
          
           if( res.data.deletedCount > 0){
            Swal.fire({
                title: "Removed!",
                text: `'${name}' has been removed.`,
                icon: "success"
              });
              refetch();
           }
         })
        }
      });
      
  }
  return (
    <div>
      <SectionTItle
        heading={"Wanna Add More?"}
        subheading={"--My Cart--"}
      ></SectionTItle>
      <div className="flex justify-between">
        <p className="text-lg font-semibold ">
          Total Orders:
          <span className="text-[#D1A054] ml-2">{cart.length}</span>
        </p>
        <p className="text-lg font-semibold ">
          Total price: <span className="text-[#D1A054] ml-2">$ {totalPrice.toFixed(2)}</span>
        </p>
        <button className="btn btn-sm bg-[#D1A054] text-white hover:text-black">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead  className="bg-[#D1A054] text-white">
            <tr>
              <th>Quantity</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map(item=><tr
                key={item._id}>
                    <td className="">1</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </td>
                    <td>$ {item.price}</td>
                    <td>
                      <button onClick={()=>handleDelete(item._id,item.name)} className="btn bg-[#D1A054] text-lg btn-sm text-red-600">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>)
            }
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
