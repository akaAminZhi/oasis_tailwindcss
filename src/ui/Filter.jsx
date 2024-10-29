import { useSearchParams } from "react-router-dom";

function Filter({ filterFiled, options }) {
  const buttonStyle = `disabled:opacity-75 disabled:ring-blue-600 disabled:bg-blue-600 disabled:text-white disabled:ring disabled:cursor-not-allowed
     focus:ring-blue-600 focus:bg-blue-600 focus:text-white focus:ring 
     bg-gray-50 rounded-sm font-semibold text-xl px-2 py-1 transition-all duration-300 
     active:bg-blue-600 active:text-blue-200 hover:bg-blue-600 hover:text-blue-50`;
  const [searchParams, setSearchPatams] = useSearchParams();

  const selectValue = searchParams.get(filterFiled);
  function handleClick(value) {
    searchParams.set(filterFiled, value);
    setSearchPatams(searchParams);
  }

  return (
    <div className="border border-gray-100 bg-gray-50 rounded-sm shadow-sm p-1 flex gap-1">
      {options.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          className={buttonStyle}
          key={option.label}
          disabled={selectValue === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
