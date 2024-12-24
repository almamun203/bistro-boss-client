import { MdDelete } from "react-icons/md";
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import useMenu from "../../../Hooks/UseMenu";
import { FaEdit } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecure = useAxios();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(async (result) => {
      
      if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
              // refetch to update the ui
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${item.name} has been deleted`,
                  showConfirmButton: false,
                  timer: 1500
              });
          }
        
      }
    });
  };
  const handleUpdate = (item) => {
    refetch();
    console.log(item);
  };
  return (
    <div>
      <SectionTItle
        subheading={"--Hurry up--"}
        heading={"manage all items"}
      ></SectionTItle>
      <h3 className="text-lg font-semibold">Total Items:{menu.length}</h3>
      <div className=" ">
        <table className="table mt-4">
          {/* head */}
          <thead className="bg-[#D1A054] text-white  ">
            <tr>
              <th>Quantity</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td className="">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn border-solid border-gray-400  bg-[#f4f3f1] tooltip tooltip-bottom text-lg btn-sm text-[#D1A054]"
                    data-tip="Update"
                  >
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn tooltip tooltip-bottom bg-[#D1A054] text-lg btn-sm text-red-600"
                    data-tip="delete"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
