import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import useAxios from "../../../Hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {   
            Swal.fire({
                title: "Make Admin?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
                    if (res.data.modifiedCount > 0) {
                      Swal.fire({
                        title: "Done",
                        text: `${user.name} is an Admin Now!`,
                        icon: "success",
                      });
                      refetch();
                    }
                  });
                }
              });
        }
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Removed!",
              text: `'${user.name}' has been removed.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTItle
        heading={"manage all users"}
        subheading={"--How Many!--"}
      ></SectionTItle>

      <p className="text-lg font-semibold ">
        Total Items:
        <span className="text-[#D1A054] ml-2">{users.length}</span>
      </p>

      <div className="overflow-x-auto">
        <table className="table ">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      className="btn tooltip bg-[#D1A054] text-lg btn-sm text-white hover:text-black"
                      data-tip="Admin"
                    >
                      <GrUserAdmin />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn tooltip bg-[#D1A054] text-lg btn-sm text-white hover:text-black"
                      data-tip="User"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn tooltip bg-[#D1A054] text-lg btn-sm text-white hover:text-black"
                    data-tip="Delete"
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

export default AllUsers;
