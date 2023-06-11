import { useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import logo from "../assets/companyLogo.png";
import ButtonText from "..//components/button/ButtonText";
import AuthButton from "../components/button/AuthButton";
import Input from "../components/input/Input.jsx";
import { useState } from "react";
import { loginSuccess, loginFailure } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});

  const handleLogin = () => {
    // event.preventDefault();
    if (email === "admin@admin.com" && password === "12345678") {
      dispatch(loginSuccess());
      navigate("/");
    } else {
      const errors = {};
      if (!email) {
        errors.email = "Email is required";
      }
      if (!password) {
        errors.password = "Password is required";
      }
      setFormErrors(errors);
      dispatch(loginFailure());
    }
  };

  return (
    <div>
      <div className="bg-gray-100 sm:justify-center sm:items-center flex flex-col h-screen w-full">
        <form
          className="px-10 bg-white drop-shadow-2xl rounded-md"
          onSubmit={handleLogin}
        >
          <div className="flex justify-center mt-5">
            <img src={logo} alt="" className="sm-block w-20 h-20" />
          </div>
          <h1 className="text-primary font-bold md-text-2xl text-2xl my-5 font-lato text-center">
            Sign in to your account
          </h1>
          <div className="flex sm:flex-1 flex-col sm:flex-row sm:gap-4">
            <ButtonText text="Sign in with Google" image={GoogleLogo} />
            <ButtonText text="Sign in with Facebook" image={FacebookIcon} />
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex sm:flex-1 flex-col sm:flex-row sm:gap-4">
            <div className="flex flex-col mb-2 ">
              <span className="mb-2 text-md font-bold font-lato">Email</span>
              <Input
                type="email"
                title="Your Email"
                values={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {formErrors.email}
              </span>
            </div>
            <div className="flex flex-col mb-2 font-bold ">
              <span className="mb-2 text-md font-lato">Password</span>
              <Input
                title="Your Password"
                values={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {formErrors.password}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-black w-full text-md text-start cursor-pointer font-lato">
              Remember password
            </span>
            <span className="text-black w-full text-sm text-end underline cursor-pointer font-lato">
              Forgot Password?
            </span>
          </div>
          <AuthButton text="Login" onClick={handleLogin} />
          <div className="text-center mb-5 font-lato">
            Dont have an account?
            <span
              onClick={() => {
                navigate("/sign-up");
              }}
              className="text-primary text-black cursor-pointer pointer-events-auto focus:pointer-events-auto"
            >
              {" "}
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
