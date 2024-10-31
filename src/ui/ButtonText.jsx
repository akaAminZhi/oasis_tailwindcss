function ButtonText({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-blue-600 font-medium text-center rounded-sm hover:text-blue-800 focus:text-blue-800 duration-300"
    >
      {children}
    </button>
  );
}

export default ButtonText;
