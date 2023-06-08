import { useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import logo from "../assets/Logo.png";
import ButtonText from "..//components/button/ButtonText";
import AuthButton from "../components/button/AuthButton";
import Input from "../components/input/Input.jsx"
import { useState } from "react";

const LoginPage = () => {

  const initialValues = {email: "admin@admin.com", password: "12345678"};
  const [formValues, setFormValues] = useState(initialValues);
  
  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setFormValues({ ...formValues, name: value});
  // }
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-100 sm:justify-center sm:items-center flex flex-col h-screen w-full">
        <form className="px-10 bg-white drop-shadow-2xl rounded-md">
          <div className="flex justify-center mt-5">
            <img src={logo} alt="" className="sm-block w-30 h-20" />
          </div>
          <h1 className="text-primary font-bold md-text-5xl text-3xl my-5 max-w-3xl font-raleway text-center">
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
              <span className="mb-2 text-md font-bold">Email</span>
              <Input title="Your Email" values={formValues.email} onChange={()=> {}}/>

            </div>
            <div className="flex flex-col mb-2 font-bold ">
              <span className="mb-2 text-md">Password</span>
              <Input title="Your Password" values={formValues.password} type= "password" onChange={() => {}}/>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="font-bold text-black w-full text-md text-start">
              Remember password
            </span>
            <span className="text-black w-full text-sm text-end">
              Forgot Password?
            </span>
          </div>
          <AuthButton text="Login" />
          <div className="text-center text-gray-400 mb-5">
            Don't have an account?
            <span
              onClick={() => {
                navigate("/sign-up");
              }}
              className="font-bold text-black cursor-pointer pointer-events-auto focus:pointer-events-auto"
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
