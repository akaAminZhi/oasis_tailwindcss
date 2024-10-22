function Form({ type, children, ...props }) {
  const commentStyle = "overflow-scroll text-xl";
  if (type === "modal")
    return (
      <form className={`${commentStyle} w-[40rem]`} {...props}>
        {children}
      </form>
    );
  return (
    <form className={`${commentStyle} py-6 px-12 border rounded-md`} {...props}>
      {children}
    </form>
  );
}

export default Form;
