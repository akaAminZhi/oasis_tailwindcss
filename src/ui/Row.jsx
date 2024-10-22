function Row({ type, children }) {
  if (type === "horizontal")
    return <div className="flex items-center justify-between">{children}</div>;
  return <div className="flex flex-col gap-2">{children}</div>;
}

export default Row;
