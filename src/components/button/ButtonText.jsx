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

export default ButtonText;
