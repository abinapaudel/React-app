import PropTypes from "prop-types";

const Input = ({ type, title, value, onChange }) => {
  return (
    <input
      className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 placeholder:font-light placeholder:text-gray bg-white"
      type={type}
      placeholder={title}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
