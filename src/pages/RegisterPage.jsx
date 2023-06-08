import GoogleLogo from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import logo from "../assets/Logo.png";
import ButtonText from "..//components/button/ButtonText";
import AuthButton from "../components/button/AuthButton";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
  return (
        <div>
        <div className="bg-gray-100 sm:justify-center sm:items-center flex flex-col h-screen w-full">
      <form className="px-10 bg-white drop-shadow-2xl rounded-md">
        <div className="flex justify-center mt-5">
          <img src={logo} alt="" className="sm-block w-30 h-20" />
        </div>
        <h1 className="text-primary font-bold md-text-5xl text-3xl my-5 max-w-3xl font-raleway text-center">
          Sign up to your account
        </h1>
        <div className="flex sm:flex-1 flex-col sm:flex-row sm:gap-4">
          <ButtonText text="Sign up with Google" image={GoogleLogo} />
          <ButtonText text="Sign up with Facebook" image={FacebookIcon} />
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex sm:flex-1 flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col mb-2 ">
            <span className="mb-2 text-md font-bold">Email</span>
            <input
              type="text"
              className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 placeholder:font-light placeholder:text-gray bg-white"
              placeholder="Name"
              onChange={() => {
                // info.current.name = event.target.value;
                // isValid();
              }}
            />
          </div>
          <div className="flex flex-col mb-2 font-bold ">
            <span className="mb-2 text-md">Password</span>
            <input
              type="text"
              className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 placeholder:font-light placeholder:text-gray bg-white"
              placeholder="Email"
              onChange={() => {
                // info.current.name = event.target.value;
                // isValid();
              }}
            />
          </div>
          <span className="mb-2 text-md">Password</span>
            <input
              type="text"
              className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 placeholder:font-light placeholder:text-gray bg-white"
              placeholder="Email"
              onChange={() => {
                // info.current.name = event.target.value;
                // isValid();
              }}
            />
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
          <span className="font-bold text-black pointer-events-none focus:pointer-events-auto" onClick={() => navigate("/sign-in")}> Sign up</span>
        </div>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage