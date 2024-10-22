function Button({
  size = "medium",
  variation = "primary",
  children,
  ...props
}) {
  const sizes = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium",
  };

  const variations = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary:
      "text-stone-600 bg-stone-50 border border-stone-200 hover:bg-stone-100",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={` rounded shadow-sm border-none
        ${sizes[size]}
        ${variations[variation]} `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
