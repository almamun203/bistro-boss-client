import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import wallImage from '../../assets/others/authentication2.png'
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('Logged in Successfully.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      navigate(from, { replace: true });
    }).catch(error=>{
       toast.error(error.message)
       console.log(error);
      }
    )
    
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Wrong Captcha!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Log In | Bistro Boss</title>
      </Helmet>

      <div className="authBg  min-h-screen">
        <div className="hero-content flex-col md:flex-row md:gap-20">
          <div className="text-center  max-w-2xl">
            <h1 className="text-5xl font-bold">Login</h1>
            <img className="my-4" src={wallImage} alt="" />
          </div>
          <div className=" w-full max-w-sm shrink-0 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input "
                  required
                />                
              </div>
              <div className="form-control">
                <label className="label input  my-4 pt-4 text-sm">
                  <LoadCanvasTemplate  />
                </label>
                <input
                  onDoubleClick={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input "
                  required
                />
              </div>
              <div className="form-control ">
                <input
                  className="btn  bg-[#D1A054] mt-3 text-white hover:text-black"
                  type="submit"
                  value="Login"
                  disabled={disabled}
                />
              </div>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  New here? Go to Register
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

export default Login;
