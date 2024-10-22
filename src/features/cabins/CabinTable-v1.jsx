import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner></Spinner>;
  return (
    <div className="border border-stone-200 rounded-md">
      <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-1 items-center bg-stone-50 border border-stone-100 px-2 py-3 uppercase text-stone-600 font-semibold">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id}></CabinRow>
      ))}
    </div>
  );
}

export default CabinTable;
