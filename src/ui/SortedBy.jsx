import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortedBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectValue = searchParams.get("sortBy") || "";
  function handleOnchange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      value={selectValue}
      options={options}
      onChange={handleOnchange}
    ></Select>
  );
}

export default SortedBy;
