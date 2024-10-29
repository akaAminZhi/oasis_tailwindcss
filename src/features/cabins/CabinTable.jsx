import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  // filter

  let filterCabins;
  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (isPending) return <Spinner></Spinner>;

  // sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifyDirection = direction === "asc" ? 1 : -1;
  const sortCabins = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifyDirection
  );

  return (
    <Menus>
      <Table columns="0.6fr 1fr 1fr 1fr 1fr 0.2fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={filterCabins}
          data={sortCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id}></CabinRow>}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default CabinTable;
