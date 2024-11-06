function Stat({ icon, title, value, color }) {
  const colorStyle = {
    yellow: "bg-yellow-100",
    blue: "bg-blue-100",
    green: "bg-green-100",
    indigo: "bg-indigo-100",
  };
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-md p-2 grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div
        className={`row-span-full rounded-full flex items-center justify-center ${colorStyle[color]}`}
      >
        {icon}
      </div>
      <h5 className="self-end text-sm uppercase tracking-[0.4px] font-light text-gray-500">
        {title}
      </h5>
      <p className="font-normal text-2xl leading-none">{value}</p>
    </div>
  );
}

export default Stat;
