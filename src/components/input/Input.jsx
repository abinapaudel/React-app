const Input = ({title, onChange, values, type}) => {
  return (
    <input
      type={type}
      className="w-full border border-gray-200 text-md px-10 rounded-lg mb-6 py-2 placeholder:font-light placeholder:text-gray bg-white"
      placeholder= {title}
      value = {values}
      onChange={onChange}
    />
  );
};

export default Input;
