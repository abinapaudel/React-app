import { useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import logo from "../assets/companyLogo.png";
import ButtonText from "..//components/button/ButtonText";
import AuthButton from "../components/button/AuthButton";
import Input from "../components/input/Input.jsx";
import { useState } from "react";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email) {
      errors.email = "Username is required";
    }
    if(!values.password) {
      errors.password = "Password is required!"
    }
    return errors;
};

  return (
    <div>
      <div className="bg-gray-100 sm:justify-center sm:items-center flex flex-col h-screen w-full">
        <form
          onSubmit={handleSubmit}
          className="px-10 bg-white drop-shadow-2xl rounded-md"
        >
          <div className="flex justify-center mt-5">
            <img src={logo} alt="" className="sm-block w-20 h-20" />
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
              <Input
                title="Your Email"
                values={formValues.email}
                onChange={handleChange}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {formErrors.email}
              </span>
            </div>
            <div className="flex flex-col mb-2 font-bold ">
              <span className="mb-2 text-md">Password</span>
              <Input
                title="Your Password"
                values={formValues.password}
                type="password"
                onChange={handleChange}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {formErrors.password}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-black w-full text-md text-start">
              Remember password
            </span>
            <span className="text-black w-full text-sm text-end underline">
              Forgot Password?
            </span>
          </div>
          <AuthButton text="Login" />
          <div className="text-center mb-5">
            Don't have an account?
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
