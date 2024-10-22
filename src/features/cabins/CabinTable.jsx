import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner></Spinner>;
  return (
    <Table columns={"0.6fr_1.8fr_2.2fr_1fr_1fr_1fr"}>
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id}></CabinRow>
      ))}
    </Table>
  );
}

export default CabinTable;
