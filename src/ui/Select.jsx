function Select({ type, options, value, onChange, ...props }) {
  return (
    <select
      {...props}
      onChange={onChange}
      value={value}
      className={`text-base px-3 py-2 border rounded-sm bg-gray-50 font-medium shadow-sm ${
        type === "white" ? "border-gray-100" : "border-gray-300"
      }`}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
