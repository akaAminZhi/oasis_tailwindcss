function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="flex gap-2 px-2 py-1 ">
      <input
        className="m-1 h-5 w-5 outline-offset-1 accent-blue-600 disabled:accent-blue-600 disabled:cursor-not-allowed"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="flex gap-1 items-center" htmlFor={!disabled ? id : ""}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
