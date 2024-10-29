function Tag({ type, children }) {
  const statusToTagName = {
    unconfirmed: "text-blue-700 bg-blue-100",
    "checked-in": "text-green-700 bg-green-100",
    "checked-out": "text-gray-700 bg-gray-200",
  };
  return (
    <span
      className={`w-fit uppercase text-lg font-medium py-1 px-3 rounded-full ${statusToTagName[type]}`}
    >
      {children}
    </span>
  );
}

export default Tag;
