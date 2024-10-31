function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-2 py-2">
      <span className="flex items-center gap-1 font-normal stroke-blue-600">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
