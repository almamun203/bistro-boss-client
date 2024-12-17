import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import "../../../src/index.css";
import wallImage from "../../assets/others/authentication2.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser  , updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        const userInfo = {
          name: data.name,
          email:data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          if(res.data.insertedId){
            console.log("user added to database");
            reset();        
            Swal.fire({
              title: "User Created Successfully!",
              icon: "success",
              position: "top-end",
              timer: 1500,
              showConfirmButton: false
            });
            navigate('/');
          }
        })
        
      }).catch(error =>console.log(error))
      
    });
  };
 
  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="authBg hero bg-base-300 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse md:gap-20">
          <div className="text-center  max-w-2xl">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <img className="my-4" src={wallImage} alt="" />
          </div>
          <div className="  w-full max-w-sm shrink-0 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input "
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-600 text-xs">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input "
                  {...register("photoURL", { required: false })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Here"
                  className="input "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-600 text-xs">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-600 text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-600 text-xs">
                    Password must be at least 6 characters.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className=" text-red-600 text-xs">
                    Password must be less than 20 characters.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-600 text-xs">
                    Password must have at least one uppercase,one lowercase,one
                    number and one special character.
                  </p>
                )}
              </div>

              <div className="form-control pt-6">
                <input
                  className="btn text-white hover:text-black bg-[#D1A054]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt text-[#D1A054] font-semibold link link-hover"
                >
                  Already registered? Go to log in
                </Link>
              </label>
               
               <SocialLogin></SocialLogin>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
