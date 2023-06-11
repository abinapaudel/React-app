import GoogleLogo from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import logo from "../assets/companyLogo.png";
import ButtonText from "..//components/button/ButtonText";
import AuthButton from "../components/button/AuthButton";
import { useNavigate } from "react-router-dom";
import Input from "../components/input/Input";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-100 sm:justify-center sm:items-center flex flex-col h-screen w-full">
        <form className="px-10 bg-white drop-shadow-2xl rounded-md">
          <div className="flex justify-center mt-5">
            <img src={logo} alt="" className="sm-block w-20 h-20" />
          </div>
          <h1 className="text-primary font-bold md-text-5xl text-3xl my-3 max-w-3xl font-raleway text-center">
            Register your account
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
            <div className="flex flex-col ">
              <span className="mb-2 text-md font-bold font-lato">Name</span>
              <Input title="Your Name" onChange={() => {}} />
            </div>
            <div className="flex flex-col font-bold ">
              <span className="mb-2 text-md font-lato">Email</span>
              <Input title="Email" onChange={() => {}} />
            </div>
          </div>
          <div className="flex flex-col font-bold ">
            <span className="mb-2 text-md font-lato">Password</span>
            <Input title="Password" onChange={() => {}} />
          </div>
          <AuthButton text="Login" />
          <div className="text-center text-gray-400 mb-5 font-lato">
            Already have an account?
            <span
              onClick={() => {
                navigate("/sign-in");
              }}
              className="text-primary text-black cursor-pointer pointer-events-auto focus:pointer-events-auto font-lato"
            >
              {" "}
              Sign in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
