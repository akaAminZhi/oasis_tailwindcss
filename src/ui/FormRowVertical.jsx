function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2 py-3">
      {label && (
        <label className="font-normal" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-xl">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
