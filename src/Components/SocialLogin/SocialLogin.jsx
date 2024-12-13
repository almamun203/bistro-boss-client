import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import fbIcon from "../../assets/facebook-brands-solid.svg";
import gitIcon from "../../assets/github-brands-solid.svg";
import gIcon from "../../assets/google-brands-solid.svg";

const SocialLogin = () => {
  const { GoogleSign } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    GoogleSign().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="text-center">
      <p className="text-sm font-semibold"> Or, Sign Up With</p>
      <div className="flex justify-center gap-4 my-3">
        <img className="w-6 cursor-pointer " src={fbIcon} alt="" />
        <img
          onClick={handleGoogleSignIn}
          className="w-5 cursor-pointer "
          src={gIcon}
          alt=""
        />
        <img className="w-6 cursor-pointer " src={gitIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialLogin;
