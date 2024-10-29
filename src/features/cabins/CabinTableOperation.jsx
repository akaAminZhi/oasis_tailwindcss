import Filter from "../../ui/Filter";
import SortedBy from "../../ui/SortedBy";
import TableOperation from "../../ui/TableOperation";

function CabinTableOperation() {
  return (
    <TableOperation>
      <Filter
        filterFiled={"discount"}
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      ></Filter>
      <SortedBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      ></SortedBy>
    </TableOperation>
  );
}

export default CabinTableOperation;
