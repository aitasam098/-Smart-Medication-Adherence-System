const Button = ({ text }) => {
  return (
    <button className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition w-full">
      {text}
    </button>
  );
};

export default Button;