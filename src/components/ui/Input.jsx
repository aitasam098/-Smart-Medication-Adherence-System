const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
    />
  );
};

export default Input;