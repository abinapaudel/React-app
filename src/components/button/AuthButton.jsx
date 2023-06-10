import PropTypes from "prop-types";

const AuthButton = ({ text, type }) => {
  return (
    <button
      className="rounded mb-5 mt-12 bg-primary text-white px-6 py-2 outline-none border-none w-full"
      type={type}
    >
      {text}
    </button>
  );
};
AuthButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default AuthButton;
