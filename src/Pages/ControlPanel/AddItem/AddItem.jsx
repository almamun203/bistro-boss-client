import { useForm } from "react-hook-form";
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  const onSubmit = async(data) => {
  //  image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        image: res.data.data.display_url,
        price: parseFloat(data.price)
      }
      const menuRes = await axiosSecure.post('/menu',menuItem);
      if(menuRes.data.insertedId){
        toast.success(`${data.name} added successfully` );
        reset();
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <SectionTItle
        heading={"Add An Item"}
        subheading={"--Whats New--"}
      ></SectionTItle>
      <div className=" p-4 rounded-md w-full max-w-lg shrink-0 bg-gray-300 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className=" ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name"
              className="input w-full rounded-none"
              {...register("name", { required: true })}
            />
          </div>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                type="text"
                placeholder="Category"
                className="input rounded-none"
                {...register("category", { required: true })}
                
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                step="any"
                name="price"
                placeholder="Price"
                className="input rounded-none"
                min={0}
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              type="text"
              name="recipe"
              placeholder="Recipe Details"
              className="p-4 w-full rounded-none"
              {...register("recipe", {
                required: true,
              })}
            ></textarea>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full rounded-none"
            {...register("image", { required: true })}
          />
          <button
            className="btn  mt-6 border-none  hover:bg-[#9a691f] text-white  rounded-none bg-[#D1A054]"
            type="submit"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
