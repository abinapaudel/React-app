import PropTypes from "prop-types";

const ButtonText = ({ text, image, onClick }) => {
  return (
    <button
      className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 hover:bg-blue-100"
      onClick={onClick}
      name="button"
    >
      <img src={image} alt="icon" className="w-6 h-6 inline mr-2" />
      {text}
    </button>
  );
};
ButtonText.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonText;
